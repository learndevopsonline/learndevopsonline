---
sidebar_position: 2
---

# 01-Frontend

The frontend is the service in RoboShop to serve the web content over Nginx. This will have the webframe for the web application.

This is a static content and to serve static content we need a web server. This server

Developer has chosen Nginx as a web server and thus we will install Nginx Web Server. 

Install Nginx 
```shell
yum install nginx -y 
```

Start & Enable Nginx service 
```shell
systemctl enable nginx 
systemctl start nginx 
```
