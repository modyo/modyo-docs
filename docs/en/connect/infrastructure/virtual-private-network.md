---
search: true
---

# Virtual Private Network (VPC)

A VPN (site-to-site) is mainly used in organizations that need to connect infrastructure in different geographical locations through a secure link to transmit information.

Modyo Connect allows configuring site-to-site VPN links using [AWS VPN connections](https://docs.aws.amazon.com/vpc/latest/userguide/vpn-connections.html) within the [AWS VPC](https://aws.amazon.com/vpc/) network configured for the client. Once the link is established, microservices can establish direct connections to infrastructure and services deployed from the client side.

## Activation Steps
To request a VPC link from AWS to an external infrastructure, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com) stating:
- IP address to which the link should be created.
- Technical contact of the person responsible for establishing the link.

:::warning Link redundancy
Clients with multi-region redundancy may require the configuration of several simultaneous links. It is the client's responsibility to ensure the availability of all these links in case a failover is required.
:::

:::tip Support for manufacturers
Amazon AWS provides support and configuration examples for many network device manufacturers. In case of problems establishing the link, Modyo will support by raising a support ticket to AWS.
:::

:::tip AWS VPC Peering
For links to client infrastructures deployed within AWS, VPC Peering can be used, which provides a secure and convenient link between two different VPCs, without requiring the configuration of VPN links.
:::