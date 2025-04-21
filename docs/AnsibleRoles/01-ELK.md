---
sidebar_position: 1
---

# ELK Stack

```ansible template title=templates/elastic.repo
[elasticsearch]
name=Elasticsearch repository for 8.x packages
baseurl=https://artifacts.elastic.co/packages/8.x/yum
gpgcheck=0
enabled=1
autorefresh=1
type=rpm-md
```

```ansible template title=templates/nginx.conf
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    include /etc/nginx/conf.d/*.conf;
  ## Kibana Config
  upstream kibana {
    server 127.0.0.1:5601;
    keepalive 15;
  }

  server {
    listen 80;

    location / {
      proxy_pass http://kibana;
      proxy_redirect off;
      proxy_buffering off;

      proxy_http_version 1.1;
      proxy_set_header Connection "Keep-Alive";
      proxy_set_header Proxy-Connection "Keep-Alive";
    }

  }
}
```

```ansible tasks title=roles/main.yml
- name: Set Prompt
  ansible.builtin.shell: set-prompt {{ tool_name }}

- name: Copy Elastic repo file
  ansible.builtin.template:
    src: elastic.repo
    dest: /etc/yum.repos.d/elastic.repo

- name: Install ELK
  ansible.builtin.dnf:
    name:
      - elasticsearch
      - kibana
      - logstash
      - nginx
    state: installed

- name: Copy nginx config file
  ansible.builtin.template:
    src: nginx.conf
    dest: /etc/nginx/nginx.conf

- name: Start ELK
  ansible.builtin.systemd_service:
    name: "{{ item }}"
    state: restarted
    enabled: yes
  loop:
    - elasticsearch
    - kibana
    - logstash
    - nginx
```

Few steps if elasticsearch that needs to be handled from UI to start the service, Following are the commands

1. Generate an enrollment token for Kibana instance.
```bash
/usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s kibana
```

2. Kibana Verification
```bash
/usr/share/kibana/bin/kibana-verification-code
```

3.Reset admin password
```bash
/usr/share/elasticsearch/bin/elasticsearch-reset-password -u elastic
```

