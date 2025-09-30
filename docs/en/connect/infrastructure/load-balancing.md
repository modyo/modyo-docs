---
search: true
---

# Load Balancing

Load balancing distributes Internet requests among a group of servers.

Modyo Connect implements load balancing using [AWS Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html). The ALB integrates natively with other AWS services, offering unique security features such as route and protocol redirection, [SSL/TLS certificates](ssl-tls-certificates.html), and the incorporation of [web application firewalls (WAF)](web-application-firewall.html).

## Steps to Activate

To request the creation of an ALB balancer in AWS, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com) that includes:

- Domain to point to the ALB.
- Description of the use case and service to which it will be applied.
- Technical contact of the DNS administrator for SSL/TLS certificate validation and redirects.

Once created, the balancer can be used by a service within a cluster of [containers](containers.html).

:::warning External Applications
The AWS ALB load balancer cannot direct traffic to AWS resources deployed outside the virtual private network (VPC) where it is deployed, so it should only be considered for use with internal resources.
:::