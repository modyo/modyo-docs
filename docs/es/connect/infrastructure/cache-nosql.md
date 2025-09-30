---
search: true
---

# Cache y NoSQL

Las bases de datos NoSQL proporcionan beneficios adicionales para implementar sistemas de caché o indexación, permitiendo acceder y consultar eficientemente grandes volúmenes de información. A diferencia de las bases de datos relacionales, las tecnologías NoSQL ofrecen soluciones específicas para cada caso de uso.

Modyo Connect ofrece dos soluciones NoSQL: [AWS ElastiCache](https://aws.amazon.com/elasticache) en su versión Redis, diseñada para almacenamiento y acceso rápido a datos o resultados de operaciones complejas (caché); y [AWS OpenSearch Service](https://aws.amazon.com/opensearch-service), diseñada para el almacenamiento de altos volúmenes de datos, proporcionando índices de búsqueda sobre datos estructurados y semiestructurados (ej. logs, registros de actividad de usuarios).

Ambos servicios se implementan siguiendo un esquema de alta disponibilidad sobre múltiples zonas dentro de una región de AWS. En ambos casos, se asume que la información almacenada es volátil, por lo que es responsabilidad del cliente asegurar que los registros existan también en un almacenamiento persistente (repositorio de objetos o base de datos relacional).

## Pasos de Activación
Para solicitar la creación de uno de estos componentes en AWS, se debe crear un ticket de requerimiento en el [Centro de Soporte de Modyo](https://support.modyo.com) indicando:
- Tipo de solución requerida (caché, indexación).
- Breve descripción del caso de uso a implementar.
- Tamaño de instancia de [AWS ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html) o [AWS OpenSearch](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html).