---
sidebar_position: 3
---

# 02-MongoDB

Developer has chosen the database MongoDB. Hence, we are trying to install it up and configure it. 

:::tip Hint
**Versions of the DB Software you will get context from the developer, Meaning we need to check with developer.**
:::

Setup the MongoDB repo file 

``` shell title=/etc/yum.repos.d/mongo.repo
[mongodb-org-4.2]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.2/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc
```

:::tip Hint
Hint! You can create file by using **`vim /etc/yum.repos.d/mongo.repo`**
:::

Install MongoDB 

```shell 
yum install mongodb-org -y 
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

