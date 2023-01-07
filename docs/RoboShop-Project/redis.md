---
sidebar_position: 5
---

# 04-Redis

Redis is used for in-memory data storage(Caching) and allows users to access the data of database over API.

:::tip Hint
**Versions of the DB Software you will get context from the developer, Meaning we need to check with developer.**
:::

Redis is offering the repo file as a rpm. Lets install it

```shell 
yum install https://rpms.remirepo.net/enterprise/remi-release-8.rpm -y
```

Enable Redis 6.2 from package streams.

```shell 
dnf module enable redis:remi-6.2 -y
```

Install Redis 

```shell
yum install redis -y 
```

Usually Redis opens the port only to `localhost(127.0.0.1)`, meaning this service can be accessed by the application that is hosted on this server only. However, we need to access this service to be accessed by another server, So we need to change the config accordingly.

Update listen address from 127.0.0.1 to 0.0.0.0 in `/etc/redis.conf` & `/etc/redis/redis.conf`

:::tip Tip
You can edit file by using **`vim /etc/redis.conf`** & **`vim /etc/redis/redis.conf`**
:::

Start & Enable Redis Service 

```shell 
systemctl enable redis 
systemctl start redis 
```

