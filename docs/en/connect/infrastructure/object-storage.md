---
search: true
---

# Object Repository

The object repository provides secure and scalable file storage in the cloud, accessible via web protocols. Modyo Connect implements the object repository using [AWS S3](https://aws.amazon.com/s3).

Access permissions, associated with each file or general permissions for the repository, are specified using the AWS S3 service API. The client is responsible for assigning these permissions.

:::tip AWS S3 API Access
Access to the repository is done through the AWS S3 service API. There are multiple client libraries and file transfer applications compatible with the protocol. If the repository is used within microservices deployed in Modyo Connect, the AWS S3 API keys will be managed as internal use secrets.
:::

## Activation Steps

To request the creation of an object repository in Modyo Connect, a ticket must be submitted to the [Modyo Support Center](https://support.modyo.com) specifying the following information:
- Repository name.
- Storage type (simple or versioned).
- Access policy (private or public).
- Lifecycle policies (automatic deletion after a period of time, permanent, etc.).

:::tip Access acceleration
Access to files stored in the AWS S3 object repository can be regionally accelerated through the [content delivery network](content-delivery-network.html) of Modyo Connect.
:::