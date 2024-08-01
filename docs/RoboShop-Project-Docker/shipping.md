---
sidebar_position: 6
---

# 05-Shipping


```shell 

dnf install docker -y
docker run -d -p 8080:8080 -e CART_ENDPOINT=cart-ip -e DB_HOST=mysql-ip 973714476881.dkr.ecr.us-east-1.amazonaws.com/roboshop-v3/shipping

```


:::info Note

Replace `cart-ip` with actual IP or DNS record of cart server

Replace `mysql-ip` with actual IP or DNS record of mysql server

:::



