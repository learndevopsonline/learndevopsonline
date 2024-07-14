---
sidebar_position: 1
---

# GOCD Server Installation

Increase Disk Space for GoCD Server Setup.

https://learndevopsonline.github.io/learndevopsonline/build/docs/How-Tos/extend-lvm-disk-in-rhel9

Install Java

```shell 
dnf install java-17-openjdk.x86_64 -y
```

Create a user to run the software

```shell 
useradd gocd
```

Download GOCD 

```shell
curl -L -o /tmp/go-server-23.5.0-18179.zip  https://download.gocd.org/binaries/23.5.0-18179/generic/go-server-23.5.0-18179.zip 
```

Switch to the gocd user 

```shell
su - gocd -c 'unzip /tmp/go-server-23.5.0-18179.zip'
```

Create a service file to start the service with systemctl

```unit file (systemd) title=/etc/systemd/system/gocd-server.service
[Unit]
Description=GoCD Server

[Service]
Type=forking
User=gocd
ExecStart=/home/gocd/go-server-23.5.0/bin/go-server start sysd
ExecStop=/home/gocd/go-server-23.5.0/bin/go-server stop sysd
KillMode=control-group
Environment=SYSTEMD_KILLMODE_WARNING=true

[Install]
WantedBy=multi-user.target
```
Load and start service.

```shell 
systemctl daemon-reload
systemctl enable gocd-server 
systemctl start gocd-server
```

# GOCD Agent Installation, Perform this in workstation node

Install Java

```shell 
dnf install java-17-openjdk.x86_64 -y
```

Create a user to run the software

```shell 
useradd gocd
```

Download GOCD

```shell
curl -L -o /tmp/go-agent-23.5.0-18179.zip https://download.gocd.org/binaries/23.5.0-18179/generic/go-agent-23.5.0-18179.zip
```

Switch to the gocd user

```shell
su - gocd -c 'unzip /tmp/go-agent-23.5.0-18179.zip'
```

Create a service file to start the service with systemctl

```unit file (systemd) title=/etc/systemd/system/gocd-agent.service
[Unit]
Description=GoCD Server

[Service]
Type=forking
User=gocd
ExecStart=/home/gocd/go-agent-23.5.0/bin/go-agent start sysd
ExecStop=/home/gocd/go-agent-23.5.0/bin/go-agent stop sysd
KillMode=control-group
Environment=SYSTEMD_KILLMODE_WARNING=true

[Install]
WantedBy=multi-user.target
```

Update GoCD server in configuration file `/home/gocd/go-agent-23.5.0/wrapper-config/wrapper-properties.conf`  & Update line `wrapper.app.parameter.101` with `localhost` with gocd server ip address.

Load and start service.

```shell 
systemctl daemon-reload
systemctl enable gocd-agent 
systemctl start gocd-agent
```


