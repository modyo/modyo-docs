---
search: true
---

# Modyo Platform

Modyo Platform es la base tecnológica sobre la cual operan las aplicaciones de Modyo como Channels, Content o Customers y en ella encontramos todo lo necesario para poder realizar las configuraciones transversales más relevantes.

<img src="/assets/img/platform/header.jpg" style="margin: 40px auto; width: 300px; display: block;">

Modyo Platform presenta la interfaz principal de Modyo desde la cual se tienen acceso a todas las secciones relevantes.

### Funcionalidades principales

- [Revisión en Equipo](/platform/core/team-review.html)
- [Integraciones](/platform/core/integration.html)
- [Usuarios y roles de administración](/platform/core/roles.html)
- [Seguridad](/platform/core/security.html)
- [API de administración](/platform/core/api.html)


# Documentación oficial versión 8.2

Si buscas documentación relacionada con la versión 8.2, puedes descargar [este archivo PDF](/assets/pdf/Modyo82Docs.pdf).

# Variables de entorno

<style>
table {display: table;}
</style>

| Variable | Descripción | Valores | Default | Requerido |
|----------|-------------|---------|---------|-----------|
|BUNDLE_GEMFILE|Establece la ruta al archivo Gemfile|ruta absoluta|(Rails.root)/Gemfile|NO|
|EXECJS_RUNTIME|Establece el runtime de execjs|disabled \| node||NO|
|MODYO_AUTH<br>_TIMEOUT|HTTPClient timeout|Cantidad de segundos|10|NO|
|MODYO_AWS<br>_KEY|AWS key|String válido||SI aws|
|MODYO_AWS<br>_S3_BUCKET|URI del bucket S3|URI válida||SI aws|
|MODYO_AWS<br>_SECRET|AWS secret|String válido||SI aws|
|MODYO_BACKUPS<br>_LIMIT|Cantidad de versiones de tipo backup que se almacenan en la plataforma|0 (ilimitado) - Numero positivo|20|NO|
|MODYO_BANCARD<br>_BASE_URL|Estable la URI de bancard|String tipo URI||NO|
|MODYO_CREDOMATIC<br>_BASE_URL|Estable la URI de credomatic|String tipo URI||NO|
|MODYO_CREDOMATIC<br>_CALLBACK_URL|Establece la URI de callback para la respuesta de Credomatic|String tipo URI||NO|
|MODYO_ELASTICSEARCH<br>_HOSTS|Lista separada por coma de la URI de los servidores de elasticsearch|URIs (ej: http://elasticsearch.modyo.me:9200)||SI|
|MODYO_GOOGLE<br>_TAG_MANAGER_ID|Habilita y especifica el identificador de google tag manager|String válido||NO|
|MODYO_HTML<br>_ALLOWED_ATTRS|Atributos permitidos (de tags) para usar en froala. Sobreescribe los valores por defecto de froala|Lista de atributos separados por coma|Ver froala default en docs|NO|
|MODYO_HTML<br>_ALLOWED_TAGS|Tags permitidos para usar en froala. Sobreescribe los valores por defecto de froala|Lista separada por coma de tags html|Ver froala conf|NO|
|MODYO_KHIPU<br>_CALLBACK_URL|Establece la URI de callback para la respuesta de Khipu|String tipo URI||NO|
|MODYO_LOCK<br>_TIMEOUT|Establece el tiempo máximo antes de desvincular al usuario de un recurso en edición bloqueado, para que esté libre de ser reasignado|Número de segundos|7200|NO|
|MODYO_LOG_LEVEL|Nivel de incidencias reportadas en el registro log de la plataforma|Info \| warning \| error \| fatal \| debug|debug|NO|
|MODYO_LOG<br>_OUTPUT|Especifica si el registro es a un archivo o a la salida estándar|stdout \| file|stdout|NO|
|MODYO_MAILER<br>_DELIVERY_METHOD|Protocolo para el delivery|smtp \| sendmail \| file \| test|smtp|NO|
|MODYO_MAILER<br>_FILE_LOCATION|ubicación del archivo mailer|Ruta absoluta|tmp/mails|NO|
|MODYO_MAILER<br>_PERFORM_DELIVERIES|Realizar deliveries|true \| false|true|NO|
|MODYO_MAILER<br>_RAISE_DELIVERY_ERRORS|Define si propaga los errores|true \| false|false|NO|
|MODYO_MAILER<br>_SENDMAIL_ARGUMENTS|argumentos para sendmail app|argumentos de sendmail|-i|NO|
|MODYO_MAILER<br>_SENDMAIL_LOCATION|ubicación de sendmail app|Ruta absoluta|/usr/sbin/sendmail|NO|
|MODYO_MAILER<br>_SMTP_ADDRESS|Dirección del servicio smtp|URI del servicio|smtp.sendgrid.net|NO|
|MODYO_MAILER<br>_SMTP_AUTHENTICATION|Tipo de autenticación del servicio smtp|String válido|plain|NO|
|MODYO_MAILER<br>_SMTP_OPENSSL_VERIFY_MODE|Modo de verificación del certificado TLS|none \| peer||SI certificado tls|
|MODYO_MAILER<br>_SMTP_PASSWORD|Password del servicio de smtp. Se usa MODYO_SENDGRID_PASSWORD como fallback|String válido||SI smtp|
|MODYO_MAILER<br>_SMTP_PORT|Puerto del servicio smtp|Numero de puerto|587|NO|
|MODYO_MAILER<br>_SMTP_STARTTLS_AUTO|Habilita starttls|true \| false|false|NO|
|MODYO_MAILER<br>_SMTP_USER_NAME|Nombre de Usuario del servicio smtp. Se usa MODYO_SENDGRID_USERNAME como fallback|String válido||SI smtp|
|MODYO_MULTI<br>_ACCOUNT_ENABLED|Habilita el modo multi-account|true \| false|false|NO|
|MODYO_MULTI<br>_ACCOUNT_LIST|Lista de los nombre de host de los account|Lista de hosts separados por coma||SI multi-account list|
|MODYO_MULTI<br>_ACCOUNT_MODE|Modo en que opera el multi-account|list \| subdomain||SI multi-account|
|MODYO_MYSQL<br>_ADAPTER|Adaptador a utilizar para la conexión a base de datos|mysql2 \| jdbcmysql|mysql2|NO|
|MODYO_MYSQL<br>_DATABASE|Nombre de la base de datos|String válido||SI|
|MODYO_MYSQL_HOST|URI de la base de datos|URI válida||SI|
|MODYO_MYSQL<br>_PASSWORD|Password de la base de datos|String válido||SI|
|MODYO_MYSQL_POOL|Tamaño del pool de conexiones a la base de datos|Cantidad de conexiones|100|NO|
|MODYO_MYSQL<br>_TIMEOUT|Tiempo máximo de espera por una consulta a la base de datos en ms|Tiempo en milisegundos|5000|NO|
|MODYO_MYSQL<br>_USERNAME|Usuario de la base de datos|String válido||SI|
|MODYO_NEWRELIC<br>_APP_NAME|Nombre de la aplicación en NewRelic|String válido||SI newrelic|
|MODYO_NEWRELIC<br>_CA_BUNDLE_PATH||||NO|
|MODYO_NEWRELIC<br>_ENABLED|Habilita el reporte a NewRelic|true \| false|false|NO|
|MODYO_NEWRELIC<br>_KEY|Key de conexión a NewRelic|String válido||SI newrelic|
|MODYO_ONECLICK<br>_BASE_URL|Establece la URI base para OneClick|String tipo URI||NO|
|MODYO_ONECLICK<br>_PUBLIC_CERTIFICATE|Establece el certificado publico para OneClick|String tipo certificado||NO|
|MODYO_ORDER<br>_CONFIRMATION<br>_OPEN_TIMEOUT|Tiempo de espera por la confirmación de una orden|Cantidad de segundos|2|NO|
|MODYO_ORDER<br>_CONFIRMATION<br>_READ_TIMEOUT|Tiempo de espera por la lectura de la confirmación de una orden|Cantidad de segundos|5|NO|
|MODYO_ORDER<br>_CONFIRMATION<br>_RETRIES|Número de intentos por la confirmación de una orden|Número de intentos|5|NO|
|MODYO_ORDER<br>_CONFIRMATION<br>_RETRIES_TIMEOUT|Tiempo de espera entre reintentos para la confirmación de una orden|Cantidad de segundos|5|NO|
|MODYO_ORDER<br>\_IMAGE_CODE_<br>SECRET|Secreto para la generación de códigos qr y de barras|String|48c7954272|NO|
|MODYO_PANEL<br>_DEFAULT_SUBSCRIPTION<br>_PERIOD|Tiempo por defecto de subscripción al crear nuevos planes|Cantidad de días||NO|
|MODYO_PANEL<br>_DEFAULT_TRIAL_PERIOD|Tiempo por defecto de modo de pruebas al crear nuevos planes|Cantidad de días||NO|
|MODYO_PANEL<br>_PASSWORD|Password del usuario para el panel de la plataforma|String válido como password||SI|
|MODYO_PANEL<br>_USER|Usuario para el panel de la plataforma|String válido como usuario||SI|
|MODYO_PAPERCLIP<br>_COMMAND_PATH|Indica el path donde se encuentra instalado ImageMagick|Ruta absoluta|/usr/bin/|NO|
|MODYO_PAPERCLIP<br>_FOG_CREDENTIALS|Es como se comunica con el servicio de storage, S3, Azure, Google o local|Hash con el provider y las credenciales|provider local|NO|
|MODYO_PAPERCLIP<br>_FOG_DIRECTORY|Indica donde se guardarán los assets. Si es local, es un empty string, si es un s3, es la url del bucket, url del bucket si Google|String válido||NO|
|MODYO_PAPERCLIP<br>_FOG_HOST|URL de la CDN (ex CDN_URL)|URI de la CDN||SI|
|MODYO_PAPERCLIP<br>_PATH|Indica cómo se dividirá el path donde se guardarán los archivos ya procesados.|String válido|uploads/:uuid/:style/<br>:basename.:extension|NO|
|MODYO_PAPERCLIP<br>_PRESERVE_FILES_ON_DESTROY|Indica si los archivos se deben conservar al destruir la instancia contenedora|true \| false|true|NO|
|MODYO_PAPERCLIP<br>_STORAGE|Establece la librería con que se comnunicará con el provider. En nuestro caso siempre es FOG|fog|fog|NO|
|MODYO_PAYME<br>_WALLET_BASE_URL|Establece la URI base para PayMe|String tipo URI||NO|
|MODYO_PAYUAPI<br>_BASE_URL|Establece la URI base para PayuApi|String tipo URI||NO|
|MODYO_PAYUAPI<br>_CALLBACK_URL|Establece la URI de callback para la respuesta de PayuApi|String tipo URI||NO|
|MODYO_PLATFORM<br>_DOMAIN|Nombre del dominio de la plataforma|dominio de la plataforma (ej: modyo.cloud)||SI|
|MODYO_PLATFORM<br>_EMAIL|Nombre de correo como remitente en los envíos de correo|String válido como correo electrónico||SI|
|MODYO_PLATFORM<br>_EMAIL_DOMAIN|Dominio para correos autogenerados con la integración de oauth2|String con nombre de dominio válido||SI|
|MODYO_PLATFORM<br>_MAX_ALLOWED_REVIEWS|Cantidad máxima de revisiones permitidas en el team review|Cantidad positiva|7|NO|
|MODYO_PLATFORM<br>_MAX_CUSTOM_FIELDS|Establece la cantidad máxima de user custom fields que pueden ser creados en una cuenta|Cantidad de custom fields permitidos|20|NO|
|MODYO_PLATFORM<br>_MAX_SITE_SEARCH<br>_RESULTS|Cantidad máxima de resultados en la búsqueda del sitio|Cantidad positiva|100|NO|
|MODYO_PLATFORM<br>_MIN_ACCEPTED_AGE|Establece el mínimo de edad para el registro usuarios en la plataforma|Número de años|13|NO|
|MODYO_PLATFORM_NAME|Nombre de la plataforma|String válido||SI|
|MODYO_PLATFORM<br>_NAMESPACE|Identificador de la plataforma para crear los namespaces de los servicios utilizados: redis, elasticsearch,  SQS y Sidekiq|String representando un namespace (ej: modyo-cloud)||SI|
|MODYO_PLATFORM_PORT|Puerto utilizado por la plataforma|: + Numero del puerto|no definido (:80)|NO|
|MODYO_PLATFORM<br>_TARGET_EXPIRES_IN|Tiempo de expiración en minutos del cache utilizado para los targets|Cantidad de minutos|15|NO|
|MODYO_PLATFORM_<br>USE_CUSTOM_HOST<br>_ON_NON_PRODUCTION|Permite el uso de custom hosts en ambientes no productivos|true \| false|false|NO|
|MODYO_PLATFORM<br>_WIDGETS<br>_APPLICATION_NAME|Usado para identificar cuando un request viene desde una app al estilo de modyo-cli, se compara el user agent del request contra este valor|Aplication name|MODYO-CLI|NO|
|MODYO_PUMA<br>_MAX_THREADS|Cantidad máxima de threads usados por puma|Cantidad de threads|16|NO|
|MODYO_PUMA<br>_MIN_THREADS|Cantidad mínima de threads usados por puma|Cantidad de threads|16|NO|
|MODYO_PUMA<br>_PROCESSES|Establece la cantidad de workers de puma|Cantidad de procesos|2|NO|
|MODYO_PUMA<br>_WORKER_TIMEOUT|Tiempo máximo de ejecución de un worker de puma|Cantidad de segundos|60|NO|
|MODYO_QUEUE<br>_PROVIDER|Tipo de cola de trabajo a utilizar por la aplicación|sidekiq \| shoryuken|sidekiq|NO|
|MODYO_RAILS<br>_SERVE_STATIC_FILES|Permite a Rails servir archivos en / public /, incluidos los recursos precompilados|true \| false|false|NO|
|MODYO_REDIS<br>_CACHE_SERVERS|Lista separada por coma de la URI de los servidores de cache|URIs (ej: redis://redis.modyo.me:6379)||SI|
|MODYO_REDIS<br>_PASSWORD|Password para la conexión con redis|String válido||NO|
|MODYO_REDIS<br>_SIDEKIQ_SERVER|URI del servidor redis para ser usado con sidekiq|URI (ej: redis://redis.modyo.me:6379)||SI|
|MODYO_RUN<br>_IT_ANYWAY|Bypass de la protección de tareas rake destructivas de la base de datos|1 si se quiere realizar una tarea destructiva||NO|
|MODYO_SEC<br>_USE_SSL|Habilita SSL en la plataforma|true \| false|true|NO|
|MODYO_SEC<br>_USE_SSL_HSTS|Habilita el header HSTS en la plataforma|true \| false|false|NO|
|MODYO_SEC<br>_USE_SSL_ON_LOGOUT|Habilita uso de SSL en el logout|true \| false|true|NO|
|MODYO_SEC<br>_X_FRAME_OPTIONS|Establece el header X-Frame-Options|DENY \| SAMEORIGIN \| ALLOW-FROM uri|SAMEORIGIN|NO|
|MODYO_SECRET_TOKEN|Secreto utilizado por la aplicación para cifrar datos sensibles (cookies)|String al menos 30 caracteres (random)||SI|
|MODYO_SENDGRID<br>_CALLBACK_KEY|Establece una key para validar las notificaciones desde Sendgrid|String mínimo 30 caracteres random||SI sendgrid|
|MODYO_SENDGRID<br>_PASSWORD|Pasword de usuario de Sendgrid|String válido||SI sendgrid|
|MODYO_SENDGRID<br>_USERNAME|Nombre de usuario de Sendgrid|String válido||SI sendgrid|
|MODYO_SESSION<br>_EXPIRE_AFTER|Establece el tiempo en que expirará la sesión|valor.unidad (unidades: second, seconds, minute, minutes, hour, hours, day, days, week, weeks, month, months)|1.week|NO|
|MODYO_SESSION_KEY|Key utilizada para nombrar la cookie de sesión|String valido (ej: _modyo_cloud)||SI|
|MODYO_SESSION_STORE|Establece la forma de persistir la sesión|cookie \| cache|cookie|NO|
|MODYO_SESSION<br>_TRACKING_PERIOD|Periodo en minutos en que se registra el seguimiento de la sesión. El valor 0 corresponde a sin seguimiento|Cantidad de minutos|5|NO|
|MODYO_TIGOMONEY<br>_BASE_URL|Establece la URI base para TigoMoney|String tipo URI||NO|
|MODYO_TRIAL<br>_ACCOUNT_NEEDS<br>_AUTHORIZATION|Habilita la autorización del periodo de prueba|true \| false|false|NO|
|MODYO_WEBPAY<br>_BASE_URL|Establece la URI base para WebPay|String tipo URI||NO|
|MODYO_WEBPAY<br>_CALLBACK_URL|Establece la URI de callback para la respuesta de WebPay|String tipo URI||NO|
|MODYO_WEBPAY<br>_LOGGING|Habilita la generación de logs de las respuestas de WebPay|true \| false|true|NO|
|MODYO_WEBPAY<br>_PUBLIC_CERTIFICATE|Establece el certificado publico para WebPay|String tipo certificado||NO|
|MODYO_WEBPAY<br>_REDIRECT<br>_CONFIRMATION_URL|Establece la URI de confirmación|String tipo URI||NO|
|MODYO_WEBPAY<br>_REDIRECT_URL|Establece la URI de redirección para WebPay|String tipo URI||NO|
|NODE_ENV|Establece el entorno de ejecución de Node|test \| development \| production|development|NO|
|RACK_ENV|Establece el entorno de ejecución de Rack|test \| development \| production|development|NO|
|RAILS_ENV|Establece el entorno de ejecución de Rails|test \| development \| production \| certification \| staging|development|NO|
|RAILS_SERVE<br>_STATIC_FILES|Permite a Rails servir archivos en / public /, incluidos los recursos precompilados|true \| false||NO|
|SECRET_KEY_BASE|Establece el secret_key_base para la aplicación|String de mas de 30 caracteres random||SI|
|TEST_ENV_NUMBER|Cantidad de procesos utilizados para correr tests en paralelo, es manejado internamente por la gema parallel test|Número de proceso||NO|