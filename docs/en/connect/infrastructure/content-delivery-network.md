---
search: true
---

# Content Delivery Network

The content delivery network (CDN) provides globally distributed content access points in strategically located data centers. This reduces latencies and download speeds, improving the overall user experience.

Modyo uses [AWS CloudFront](https://aws.amazon.com/cloudfront) as a global content delivery network. CloudFront configurations allow defining caching rules at the object level and processing functions to overwrite headers in service calls and responses.

## Activation Steps

To request the creation of a global content distribution in Modyo Connect, a ticket must be submitted to the [Modyo Support Center](https://support.modyo.com) specifying the following information:
- Average size of objects in the repository.
- Projected monthly TB to consume.
- Main locations from which most of the traffic is expected.
- Rules or criteria for object caching.
- Indicate whether pre- or post-processing functions for invocations are required.