---
sidebar_position: 6
---

# 05-Shipping


```shell 

dnf install docker -y
docker run -d -p 8080:8080 -e CART_ENDPOINT=cart-ip:cart-port -e DB_HOST=mysql-ip public.ecr.aws/w8x4g9h7/roboshop-v3/shipping

```


:::info Note

Replace `cart-ip` with actual IP or DNS record of cart server

Replace `cart-port` with actual port of cart server

Replace `mysql-ip` with actual IP or DNS record of mysql server

:::


Create App User in Database 


```shell 

docker run -e DB_TYPE=mysql -e APP_GIT_URL=https://github.com/roboshop-devops-project-v3/shipping -e DB_HOST=mysql-ip -e DB_USER=root -e DB_PASS=RoboShop@1 -e SCHEMA_FILE=db/app-user.sql public.ecr.aws/w8x4g9h7/roboshop-v3/schema-load

```

Create Schema 


```shell 

docker run -e DB_TYPE=mysql -e APP_GIT_URL=https://github.com/roboshop-devops-project-v3/shipping -e DB_HOST=mysql-ip -e DB_USER=root -e DB_PASS=RoboShop@1 -e SCHEMA_FILE=db/schema.sql public.ecr.aws/w8x4g9h7/roboshop-v3/schema-load

```

Create Master Data 


```shell 

docker run -e DB_TYPE=mysql -e APP_GIT_URL=https://github.com/roboshop-devops-project-v3/shipping -e DB_HOST=mysql-ip -e DB_USER=root -e DB_PASS=RoboShop@1 -e SCHEMA_FILE=db/master-data.sql public.ecr.aws/w8x4g9h7/roboshop-v3/schema-load

```




