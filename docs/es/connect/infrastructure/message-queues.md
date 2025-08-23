---
search: true
---

# Colas de Mensajería

Las colas de mensajes son una forma de comunicación asíncrona servicio-a-servicio utilizada en arquitecturas de microservicios. Los mensajes se almacenan en la cola hasta que son procesados y eliminados. Cada mensaje se procesa una sola vez por un único consumidor. Las colas de mensajes permiten desacoplar procesos, llevando las operaciones complejas a un segundo plano.

Modyo Connect implementa colas de mensajería utilizando [AWS Simple Queue Service (SQS)](https://aws.amazon.com/sqs), una cola de mensajería completamente gestionada que soporta microservicios y aplicaciones distribuidas. AWS SQS permite trabajar con dos tipos de colas: tradicionales y FIFO (First In, First Out).

## Pasos de Activación
Para solicitar la creación de una cola de mensajería en AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Nombre de la cola.
- Tipo: tradicional o FIFO.