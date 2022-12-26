---
sidebar_position: 11
---

# 10-Payment 

This service is responsible for payments in RoboShop e-commerce app.
This service is written on `Python 3`, So need it to run this app.

:::tip Hint
Developer has chosen Python, Check with developer which version of Python is needed.
:::

Install Python 3.6

```shell 
yum install python36 gcc python3-devel -y
```

Configure the application.

:::info
Our application developed by the developer of our org and it is not having any RPM software just like other softwares. So we need to configure every step manually
:::

:::caution Recap
We already discussed in Linux basics section that applications should run as nonroot user.
:::

Add application User

```shell 
useradd roboshop
```

:::info
User **roboshop** is a function / daemon user to run the application. Apart from that we dont use this user to login to server.

Also, username **roboshop** has been picked because it more suits to our project name.
:::

:::info
We keep application in one standard location. This is a usual practice that runs in the organization.
:::

Lets setup an app directory.

```shell
mkdir /app 
```

Download the application code to created app directory.

```shell
curl -L -o /tmp/payment.zip https://roboshop-artifacts.s3.amazonaws.com/payment.zip 
cd /app 
unzip /tmp/payment.zip
```

Every application is developed by development team will have some common softwares that they use as libraries. This application also have the same way of defined dependencies in the application configuration.

Lets download the dependencies.

```shell 
cd /app 
pip3.6 install -r requirements.txt
```

We need to setup a new service in **systemd** so `systemctl` can manage this service

:::info
We already discussed in linux basics that advantages of systemctl managing services, Hence we are taking that approach. Which is also a standard way in the OS.
:::


Setup SystemD Payment Service

```unit file (systemd) title=/etc/systemd/system/payment.service
[Unit]
Description=Payment Service

[Service]
User=root
WorkingDirectory=/app
// highlight-start
Environment=CART_HOST=<CART-SERVER-IPADDRESS>
Environment=CART_PORT=8080
Environment=USER_HOST=<USER-SERVER-IPADDRESS>
Environment=USER_PORT=8080
Environment=AMQP_HOST=<RABBITMQ-SERVER-IPADDRESS>
// highlight-end
Environment=AMQP_USER=roboshop
Environment=AMQP_PASS=roboshop123

ExecStart=/usr/local/bin/uwsgi --ini payment.ini
ExecStop=/bin/kill -9 $MAINPID
SyslogIdentifier=payment

[Install]
WantedBy=multi-user.target
```

:::info
Hint! You can create file by using **`vim /etc/systemd/system/payment.service`**
:::

Load the service.

```shell 
systemctl daemon-reload
```

:::info
This above command is because we added a new service, We are telling systemd to reload so it will detect new service.
:::

Start the service.

```shell 
systemctl enable payment 
systemctl start payment
```




