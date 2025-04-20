---
sidebar_position: 2
---

# Kubernetes Metrics Server on Kubernetes


### Method1 - Manual Install

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

### Method2 - Install with Terraform

```terraform
resource "null_resource" "metrics-server" {

  provisioner "local-exec" {
    command = "kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml"
  }
}

```





