---
search: true
---

# Application Firewall (WAF)

A Web Application Firewall (WAF) protects the web application server from multiple attacks. Its function is to ensure server security by analyzing HTTP/HTTPS request packets and traffic patterns.

Modyo Connect allows configuring the [AWS WAF](https://aws.amazon.com/waf) service, which has filters for the most common web attacks (OWASP Top 10), such as SQL injections or scripts. In addition, it offers the ability to define custom rules to allow or deny access to routes by IP and rate limits.

## Log Records
AWS WAF log records are managed by AWS CloudWatch Logs and can be exported to external systems using AWS S3 repositories.

## Activation Steps
The AWS application firewall is enabled by default. The client can request the inclusion of specific rules (e.g., blocking routes to certain IP ranges or adjusting the rate limit for incoming connections) by submitting a ticket to the [Modyo Support Center](https://support.modyo.com).