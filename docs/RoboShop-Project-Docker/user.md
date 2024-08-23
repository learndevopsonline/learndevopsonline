---
sidebar_position: 4
---

# 03-User


```shell 

dnf install docker -y
docker run -d -p 8080:8080 -e MONGO=true -e MONGO_URL="mongodb://mongo-ip:27017/users" -e REDIS_URL="redis://redis-ip:6379" public.ecr.aws/w8x4g9h7/roboshop-v3/user

```


:::info Note

Replace `mongo-ip` with actual IP or DNS record of mongodb server

Replace `redis-ip` with actual IP or DNS record of redis server

:::

