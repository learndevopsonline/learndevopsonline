---
sidebar_position: 3
---

# Install Nginx Ingress - From Community

Source - https://github.com/kubernetes/ingress-nginx

```terraform
resource "helm_release" "ingress" {
  depends_on = [null_resource.kubeconfig]
  name       = "ingress-nginx"
  repository = "https://kubernetes.github.io/ingress-nginx"
  chart      = "ingress-nginx"

  values = [
    file("${path.module}/ingress.yml")
  ]

}
```

For the above one to work, we need to have the ingress.yml file 

```yaml
controller:
  service:
    annotations:
      service.beta.kubernetes.io/aws-load-balancer-type: "nlb"
      service.beta.kubernetes.io/aws-load-balancer-cross-zone-load-balancing-enabled: "true"
```

- By default nginx ingress will create a Classic load balancer, In order to get the network load balancer we are going to use annotation `service.beta.kubernetes.io/aws-load-balancer-type: "nlb"`

- NLB supports cross availability zone load balancing To enable it we are using `service.beta.kubernetes.io/aws-load-balancer-cross-zone-load-balancing-enabled: "true"` 
    Ref link: https://aws.amazon.com/about-aws/whats-new/2018/02/network-load-balancer-now-supports-cross-zone-load-balancing/


To monitor the nginx ingress with prometheus, we need to scrape the metrics. So to scrape metrics thise needs to be exported. Hence we are using metrics to be enabled and giving port information.


```yaml
controller:
  service:
    annotations:
      service.beta.kubernetes.io/aws-load-balancer-type: "nlb"
      service.beta.kubernetes.io/aws-load-balancer-cross-zone-load-balancing-enabled: "true"
  metrics:
    enabled: true
  podAnnotations:
    prometheus.io/port: "10254"
    prometheus.io/scrape: "true"
```