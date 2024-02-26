---
sidebar_position: 4
---

# 03-Backend

Backend service is responsible for adding the given values to database.
Backend service is written in NodeJS, Hence we need to install NodeJS.

:::tip Hint
**Developer has chosen NodeJs, Check with developer which version of NodeJS is needed.**
**Developer has set a context that it can work with NodeJS >20**
:::

Install NodeJS, By default NodeJS 16 is available, We would like to enable 20 version and install this.

:::tip Hint
**You can list modules by using `dnf module list`**
:::

```shell 
dnf module disable nodejs -y
dnf module enable nodejs:20 -y
```

```shell 
dnf install nodejs -y
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
useradd expense
```

:::info
User **expense** is a function / daemon user to run the application. Apart from that we dont use this user to login to server.

Also, username **expense** has been picked because it more suits to our project name.
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
curl -o /tmp/backend.zip https://expense-artifacts.s3.amazonaws.com/expense-backend-v2.zip 
cd /app 
unzip /tmp/backend.zip
```

Every application is developed by development team will have some common softwares that they use as libraries. This application also have the same way of defined dependencies in the application configuration.

Lets download the dependencies.

```shell 
cd /app 
npm install 
```

We need to setup a new service in **systemd** so `systemctl` can manage this service

:::info
We already discussed in linux basics that advantages of systemctl managing services, Hence we are taking that approach. Which is also a standard way in the OS.
:::


Setup SystemD Expense Backend Service

```unit file (systemd) title=/etc/systemd/system/backend.service
[Unit]
Description = Backend Service

[Service]
User=expense
// highlight-start
Environment=DB_HOST="<MYSQL-SERVER-IPADDRESS>"
// highlight-end
ExecStart=/bin/node /app/index.js
SyslogIdentifier=backend

[Install]
WantedBy=multi-user.target
```

:::info
Hint! You can create file by using **`vim /etc/systemd/system/backend.service`**
:::

:::caution Note
Ensure you replace `<MYSQL-SERVER-IPADDRESS>` with IP address
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
systemctl enable backend 
systemctl start backend
```

For this application to work fully functional we need to load schema to the Database.

:::tip Info
Schemas are usually part of application code and developer will provide them as part of development.
:::

We need to load the schema. To load schema we need to install mysql client.

To have it installed we can use

```shell
dnf install mysql -y 
```

Load Schema

```shell 
mysql -h <MYSQL-SERVER-IPADDRESS> -uroot -pExpenseApp@1 < /app/schema/backend.sql 
```



