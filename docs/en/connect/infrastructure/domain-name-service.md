---
search: true
---

# Domain Name Service (DNS)

The domain name system (DNS) is the "phone book" of the Internet. It allows people to access online information through domain names (e.g., google.com, twitter.com). Web browsers interact through IP addresses; DNS translates domain names to IPs so that browsers can load Internet resources.

Modyo Connect allows the use of its cloud DNS service for clients who require primary or secondary domain management. DNS records are configured in [AWS Route53](https://aws.amazon.com/route53).

## Activation Steps
To request the management of a DNS zone for a domain from AWS, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com) stating:
- Root domain to manage.
- Records to incorporate (can be a TXT exported from another DNS).

:::warning Propagation times
Once the DNS zone and records have been configured, the AWS Route53 addresses must be configured in the domain registrar. After this configuration, propagation begins, which could take several hours or even days before the domain is available on the Internet.
:::