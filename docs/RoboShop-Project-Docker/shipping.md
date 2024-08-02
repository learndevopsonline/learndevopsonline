---
sidebar_position: 6
---

# 05-Shipping


```shell 

dnf install docker -y
docker run -d -p 8080:8080 -e CART_ENDPOINT=cart-ip -e DB_HOST=mysql-ip public.ecr.aws/w8x4g9h7/roboshop-v3/shipping

```


:::info Note

Replace `cart-ip` with actual IP or DNS record of cart server

Replace `mysql-ip` with actual IP or DNS record of mysql server

:::



