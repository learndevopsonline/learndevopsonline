---
sidebar_position: 2
---

# 01-Frontend


```shell 

dnf install docker -y
docker run -d -p 80:80 -e CATALOGUE_HOST=catalogue-ip -e CATALOGUE_PORT=catalogue-port -e USER_HOST=user-host -e USER_PORT=user-port -e CART_HOST=cart-host -e CART_PORT=cart-port -e SHIPPING_HOST=shipping-host -e SHIPPING_PORT=shipping-port-e PAYMENT_HOST=payment-host -e PAYMENT_PORT=payment-port  -it 973714476881.dkr.ecr.us-east-1.amazonaws.com/roboshop-v3/frontend

```


:::info Note

Replace `catalogue-ip` with actual IP or DNS record of catalogue server
Replace `catalogue-port` with actual catalogue port

Replace `user-ip` with actual IP or DNS record of user server
Replace `user-port` with actual user port

Replace `cart-ip` with actual IP or DNS record of cart server
Replace `cart-port` with actual cart port

Replace `shipping-ip` with actual IP or DNS record of shipping server
Replace `shipping-port` with actual shipping port

Replace `payment-ip` with actual IP or DNS record of payment server
Replace `payment-port` with actual payment port

:::

