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

💡 Try to access the service once over the browser and ensure you get some default content.

Remove the default content that web server is serving. 

```shell
rm -rf /usr/share/nginx/html/* 
```

Create Nginx Reverse Proxy Configuration.

```shell 
vim /etc/nginx/default.d/roboshop.conf 
```

Add the following content 

```nginx configuration title=/etc/nginx/default.d/roboshop.conf 
proxy_http_version 1.1;
location /images/ {
  expires 5s;
  root   /usr/share/nginx/html;
  try_files $uri /images/placeholder.jpg;
}
location /api/catalogue/ { proxy_pass http://localhost:8080/; }
location /api/user/ { proxy_pass http://localhost:8080/; }
location /api/cart/ { proxy_pass http://localhost:8080/; }
location /api/shipping/ { proxy_pass http://localhost:8080/; }
location /api/payment/ { proxy_pass http://localhost:8080/; }

location /health {
  stub_status on;
  access_log off;
}
```

:::info

Ensure you replace the `localhost` with the actual ip address of those component server. Word `localhost` is just used to avoid the failures on the Nginx Server.

:::


Restart Nginx Service to load the changes of the configuration.

```shell 
systemctl restart nginx 
```

