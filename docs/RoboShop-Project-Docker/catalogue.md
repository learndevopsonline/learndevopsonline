---
sidebar_position: 3
---

# 02-Catalogue


```shell 

dnf install docker -y
docker run -d -p 8080:8080 -e MONGO=true -e MONGO_URL="mongodb://mongo-ip:27017/catalogue" public.ecr.aws/w8x4g9h7/roboshop-v3/catalogue

```


:::info Note

Replace `mongo-ip` with actual IP or DNS record of mongodb server

:::

