---
sidebar_position: 5
---

# 04-Cart


```shell 

dnf install docker -y
docker run -d -p 8080:8080 -e CATALOGUE_HOST=catalogue-ip -e CATALOGUE_PORT=8080 -e REDIS_HOST=redis-ip 973714476881.dkr.ecr.us-east-1.amazonaws.com/roboshop-v3/cart

```


:::info Note

Replace `catalogue-ip` with actual IP or DNS record of catalogue server

Replace `redis-ip` with actual IP or DNS record of redis server

:::
