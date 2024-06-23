---
sidebar_position: 3
---

# 02-MongoDB

Developer has chosen the database MongoDB. Hence, we are trying to install it up and configure it. 

:::tip Hint
**Versions of the DB Software you will get context from the developer, Meaning we need to check with developer.**
**Developer has shared the version information as MongoDB-4.x**
:::

Setup the MongoDB repo file 

``` shell title=/etc/yum.repos.d/mongo.repo
[mongodb-org-7.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/9/mongodb-org/7.0/x86_64/
enabled=1
gpgcheck=0
```

:::tip Hint
Hint! You can create file by using **`vim /etc/yum.repos.d/mongo.repo`**
:::

Install MongoDB 

```shell 
dnf install mongodb-org -y 
```

Start & Enable MongoDB Service 

```shell 
systemctl enable mongod 
systemctl start mongod 
```

Usually MongoDB opens the port only to `localhost(127.0.0.1)`, meaning this service can be accessed by the application that is hosted on this server only. However, we need to access this service to be accessed by another server, So we need to change the config accordingly.

Update listen address from 127.0.0.1 to 0.0.0.0 in `/etc/mongod.conf`

:::tip Hint

You can edit file by using **`vim /etc/mongod.conf`**

:::

Restart the service to make the changes effected.

```shell 
systemctl restart mongod
```

