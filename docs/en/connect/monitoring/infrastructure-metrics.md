---
search: true
---

# Infrastructure Metrics

Infrastructure metrics monitoring includes all details about the cloud dependencies configured for the service.


Modyo Connect implements infrastructure monitoring using [AWS CloudWatch](https://aws.amazon.com/cloudwatch).


## Steps to Activate

AWS CloudWatch monitoring is active by default across all infrastructure managed by Modyo Connect. It is accessed through the service accounts.


:::tip Monitoring with NewRelic
The most relevant infrastructure monitoring metrics are sent to NewRelic via [AWS CloudWatch Metric Streams](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html), for centralization and cross-referencing with application metrics.
:::