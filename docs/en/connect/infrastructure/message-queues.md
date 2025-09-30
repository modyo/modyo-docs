---
search: true
---

# Message Queues

Message queues are a form of asynchronous service-to-service communication used in microservices architectures. Messages are stored in the queue until they are processed and deleted. Each message is processed only once by a single consumer. Message queues allow decoupling processes, moving complex operations to the background.

Modyo Connect implements message queuing using [AWS Simple Queue Service (SQS)](https://aws.amazon.com/sqs), a fully managed message queuing service that supports microservices and distributed applications. AWS SQS allows working with two types of queues: standard and FIFO (First In, First Out).

## Activation Steps
To request the creation of a message queue in AWS, you must create a requirement ticket at the [Modyo Support Center](https://support.modyo.com) indicating:
- Queue name.
- Type: standard or FIFO.