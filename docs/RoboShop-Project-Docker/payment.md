---
sidebar_position: 7
---

# 06-Payment


```shell 

dnf install docker -y
docker run -d -p 8080:8080 -e CART_HOST=cart-ip -e CART_PORT=8080 -e USER_HOST=user-ip -e USER_PORT=8080 -e AMQP_HOST=rabbitmq-ip -e AMQP_USER=roboshop -e AMQP_PASS=roboshop123 public.ecr.aws/w8x4g9h7/roboshop-v3/payment

```


:::info Note

Replace `cart-ip` with actual IP or DNS record of cart server

Replace `user-ip` with actual IP or DNS record of user server

Replace `rabbitmq-ip` with actual IP or DNS record of rabbitmq server

:::

