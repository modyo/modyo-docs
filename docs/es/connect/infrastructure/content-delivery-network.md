---
search: true
---

# Red de Distribución de Contenidos

La red de distribución de contenidos (CDN) proporciona puntos de acceso al contenido distribuidos globalmente en centros de datos estratégicamente ubicados. Esto disminuye las latencias y la velocidad de descarga, mejorando la experiencia general del usuario.

Modyo utiliza [AWS CloudFront](https://aws.amazon.com/cloudfront) como red global de distribución de contenidos. Las configuraciones de CloudFront permiten definir reglas de caché a nivel de objetos y procesar funciones para sobrescribir cabeceras en las llamadas y respuestas del servicio.

## Pasos de Activación

Para solicitar la creación de una distribución global de contenidos en Modyo Connect, se debe crear un ticket en el [Centro de Soporte de Modyo](https://support.modyo.com) especificando la siguiente información:
- Tamaño promedio de objetos en el repositorio.
- TB mensuales proyectados a consumir.
- Ubicaciones principales desde donde se espera recibir la mayor parte del tráfico.
- Reglas o criterios para el caché de objetos.
- Indicar si se requieren funciones de pre o post-procesamiento de invocaciones.