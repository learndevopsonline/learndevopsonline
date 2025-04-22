---
sidebar_position: 5
---

# Filebeat on Kubernetes

This is the helm values input file, Inside that file we need to modify the input of elastic endpoint

```yaml
---
daemonset:
  extraEnvs: []
  secretMounts: []
  filebeatConfig:
    filebeat.yml: |
      filebeat.inputs:
      - type: container
        paths:
          - /var/log/containers/roboshop*.log
        processors:
        - add_kubernetes_metadata:
            host: ${NODE_NAME}
            matchers:
            - logs_path:
                logs_path: "/var/log/containers/"
      output.logstash:
        hosts: '<LOGSTASH-ENDPOINT>:5044'
```


### Install with Terraform

```hcl
## Filebeat Helm Chart
resource "helm_release" "filebeat" {
  name       = "filebeat"
  repository = "https://helm.elastic.co"
  chart      = "filebeat"
  namespace  = "kube-system"
  wait       = "false"

  values = [
    file("${path.module}/helm-config/filebeat.yaml")
  ]

}
```

### Install with Helm Cli 

```bash
helm repo add elastic https://helm.elastic.co
helm install filebeat elastic/filebeat
```

