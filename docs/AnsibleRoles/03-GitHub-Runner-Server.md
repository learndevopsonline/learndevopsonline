---
sidebar_position: 3
---

# GitHub Runner - Server

```ansible template title=templates/github-runner.service
[Unit]
Description=GitHub Actions Runner (raghudevopsb82.github-runner-az)
After=network.target

[Service]
ExecStart=/github-runner/run.sh
User=github-runner
Environment=PATH=/github-runner/.local/bin:/github-runner/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin
WorkingDirectory=/github-runner
KillMode=process
KillSignal=SIGTERM
TimeoutStopSec=5min

[Install]
WantedBy=multi-user.target
```

```ansible tasks title=roles/main.yml
- name: Set Prompt
  ansible.builtin.shell: set-prompt github-runner

- name: Add github runner user
  ansible.builtin.user:
    name: github-runner
    home: /github-runner

- name: Download runner software
  ansible.builtin.unarchive:
    src: https://github.com/actions/runner/releases/download/v{{ runner_version }}/actions-runner-linux-x64-{{ runner_version }}.tar.gz
    dest: /github-runner
    owner: github-runner
    group: github-runner
    remote_src: yes

- name: Install libicu
  ansible.builtin.dnf:
    name: libicu
    state: installed

- name: Configure runner
  ansible.builtin.shell: ./config.sh --url https://github.com/{{ github_org_name }} --token {{ token }} --runnergroup Default --name github-runner --labels self-hosted --work _work --replace
  args:
    chdir: /github-runner
  become_user: github-runner
  vars:
    token: "{{ lookup('community.hashi_vault.hashi_vault', 'secret=roboshop-infra/github-actions:RUNNER_TOKEN token={{ vault_token }} url={{ vault_url }}') }}"
  ignore_errors: yes

- name: Copy Service
  ansible.builtin.template:
    src: github-runner.service
    dest: /etc/systemd/system/github-runner.service

- name: Start Runner Service
  ansible.builtin.systemd_service:
    name: github-runner
    state: restarted
    enabled: yes

```


```ansible tasks title=roles/vars.yml
runner_version: 2.327.1
# Change this as per your Org Name
github_org_name: raghudevopsb85
# Change this as per your DNS Name
vault_url: "http://vault-internal.rdevopsb85.online:8200"
```

Run ansible with `ansible-playbook -e vault_token=<Replace Token>`

