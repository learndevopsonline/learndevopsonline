---
sidebar_position: 10
---

# 09-RabbitMQ 

RabbitMQ is a messaging Queue which is used by some components of the applications.

Configure YUM Repos from the script provided by vendor.

```shell 
curl -s https://packagecloud.io/install/repositories/rabbitmq/erlang/script.rpm.sh | bash
```

Install ErLang 

```shell 
yum install erlang-26.0 -y
```

Configure YUM Repos for RabbitMQ.

```shell 
curl -s https://packagecloud.io/install/repositories/rabbitmq/rabbitmq-server/script.rpm.sh | bash
```

Install RabbitMQ 

```shell 
yum install rabbitmq-server -y 
```

Start RabbitMQ Service 

```shell 
systemctl enable rabbitmq-server 
systemctl start rabbitmq-server 
```

RabbitMQ comes with a default username / password as `guest/guest`. But this user cannot be used to connect. Hence, we need to create one user for the application.

```shell 
rabbitmqctl add_user roboshop roboshop123
rabbitmqctl set_permissions -p / roboshop ".*" ".*" ".*"
```



