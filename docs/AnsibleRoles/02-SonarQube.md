---
sidebar_position: 2
---

# SonarQube

```ansible template title=templates/sonarqube.repo
[Unit]
Description=SonarQube Server
After=network.target

[Service]
ExecStart=/sonarqube/sonarqube-25.2.0.102705/bin/linux-x86-64/sonar.sh start
User=sonar
KillMode=process
KillSignal=SIGTERM

[Install]
WantedBy=multi-user.target
```

```ansible tasks title=roles/main.yml
- name: Install Java
  ansible.builtin.dnf:
    name: java-17-openjdk
    state: installed

- name: Create sonarqube user
  ansible.builtin.user:
    name: sonar

- name: Create sonarqube directory
  ansible.builtin.file:
    path: /sonarqube
    state: directory
    owner: sonar
    group: sonar

- name: Download and Extract sonar
  ansible.builtin.unarchive:
    src: https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-25.2.0.102705.zip
    dest: /sonarqube
    owner: sonar
    group: sonar
    remote_src: true

- name: Copy Service file
  ansible.builtin.template:
    src: sonarqube.service
    dest: /etc/systemd/system/sonarqube.service

- name: Start service
  ansible.builtin.systemd_service:
    name: sonarqube
    state: started
    enabled: yes
    daemon_reload: yes


```


