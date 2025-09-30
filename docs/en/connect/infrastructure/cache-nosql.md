---
search: true
---

# Cache and NoSQL

NoSQL databases provide additional benefits for implementing caching or indexing systems, allowing efficient access and querying of large volumes of information. Unlike relational databases, NoSQL technologies offer specific solutions for each use case.

Modyo Connect offers two NoSQL solutions: [AWS ElastiCache](https://aws.amazon.com/elasticache) in its Redis version, designed for storing and quickly accessing data or results of complex operations (cache); and [AWS OpenSearch Service](https://aws.amazon.com/opensearch-service), designed for storing high volumes of data, providing search indexes on structured and semi-structured data (e.g., logs, user activity records).

Both services are implemented following a high-availability scheme over multiple zones within an AWS region. In both cases, it is assumed that the stored information is volatile, so it is the client's responsibility to ensure that the records also exist in persistent storage (object repository or relational database).

## Activation Steps
To request the creation of one of these components in AWS, a requirement ticket must be created in the [Modyo Support Center](https://support.modyo.com) stating:
- Type of solution required (cache, indexing).
- Brief description of the use case to be implemented.
- Instance size of [AWS ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html) or [AWS OpenSearch](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html).