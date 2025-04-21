---
sidebar_position: 4
---

# Install Ansible

Ref link: https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html

For RHEL9.

```bash
sudo dnf install python3.12 python3.12-pip -y
sudo pip3.12 install ansible
```

Using `dnf`, those repos are having a bit older version of ansible, Hence we are going with pip based installation. Also ansible official documentation also will be showing the same approach.

