---
search: true
---

# Enterprise On Premise

## Arquitectura
La plataforma Modyo y todos los componentes de su stack tecnológico del cual depende puede ser configurado en diferentes escenarios de disponibilidad.

Los siguientes escenarios corresponden a las arquitecturas de despliegue de Modyo recomendadas para la modalidad On Premise. Dependiendo del tipo de infraestructura que posea el cliente, uno podría ser más recomendable uno por sobre el otro.

### Despliegue de Alta Disponibilidad
El Despliegue de Alta Disponibilidad considera dos ubicaciones físicas (datacenters) en las cuales el sistema se configura en modalidad activo-activo o activo-pasivo, con un esquema de replicación en la persistencia de datos pero sin clusterizar (requiere de failover manual o automático entre las instancias maestras y sus réplicas).

Este modelo permite ofrecer una alta disponibilidad en un escenario principalmente destinado a un consumo primario de lectura de los proyectos desarrollados sobre Modyo y permite un alto grado de escalabilidad para operaciones de lectura al poder usar simultáneamente las réplicas de la base de datos.


#### Despliegue de Alta Disponibilidad


Con esta forma de despliegue se debe considerar que las operaciones de failover son en un sentido, es decir, que una vez realizadas el sistema debe re configurarse manualmente.


#### Despliegue de Misión Crítica
El Despliegue de Misión Crítica considera tres o más ubicaciones físicas (datacenters en número impar) en las que el sistema se configura en modalidad activo-activo, con un esquema de clusterización de la capa de persistencia de datos.

Este modelo permite ofrecer una alta disponibilidad en escenarios en donde tanto las lecturas como las escrituras sean consideradas críticas. Este esquema ofrece un alto grado de escalabilidad para operaciones de lectura y escritura.

Al mantener un número impar de ubicaciones físicas, el cluster se protege de condiciones de “split brain” en la que no se logra detectar cuál es el nodo que falló.



Despliegue de Misión Crítica


Con esta forma de despliegue se debe considerar que las operaciones de failover son automáticas y una vez que los nodos vuelven al cluster son automáticamente adoptados y puestos en línea.

Adicionalmente este tipo de configuración dependerá de la configuración de proxys de monitoreo y ruteo de comunicación, cómo ProxySQL y HAProxy.





## Componentes
Modyo requiere de varios componentes para funcionar los cuales pueden estar juntos en un mismo servidor o estar separado en clusters diferentes, según sea el escenario de escalabilidad y alta disponibilidad requerido.

En el caso de la nube la mayoría de estos componentes son configurados con servicios PaaS. En el caso de las configuraciones On Premise estos componentes serán configurados y operados por el cliente.



Componentes de Modyo en Alto Nivel


Modyo ofrece a sus clientes en modalidad On Premise un contrato de soporte extendido que abarca a todos los componentes de los cuales depende la plataforma.

### Componentes Básicos
Los siguientes corresponden a los componentes básicos que todo despliegue de Modyo debe tener:

<table>
<tr>
   <td>
      <b>Proxy Caché Server</b>
   </td>
   <td>
   Implementado con Varnish o Nginx el Proxy Caché Server permite acelerar la entrega de las páginas y recursos estáticos manteniendo una copia de éstas en la memoria del servidor y evitando que la request baje al servidor de aplicaciones.
   </td>
</tr>
<tr>
   <td>
      <b>Web Server</b>
   </td>
   <td>
   Implementado con Apache o Nginx el Web Server será el responsable en procesar todas las request entrantes para direccionarlas hacia la plataforma o hacia los sistemas de almacenamiento de archivos estáticos. El Web Server realiza además operaciones avanzadas de caché (Varnish o Nginx) y balanceo de carga en caso de ser requerido.
   </td>
</tr>
<tr>
   <td>
      <b>Modyo App Server</b>
   </td>
   <td>
   El Modyo App Server el responsable de la aplicación de Modyo, tanto para el front end de sitios como el back end de administración.
   </td>
</tr>
<tr>
   <td>
      <b>Modyo Worker Process</b>
   </td>
   <td>
   El Modyo Worker es el responsable de tomar y procesar los mensajes encolados en segundo plano.
   </td>
</tr>
<tr>
   <td>
      <b>NoSQL Cluster</b>
   </td>
   <td>
   Implementado con Redis Server el cual es una base de datos del tipo clave valor muy potente y versátil. En la arquitectura de despliegue de Modyo es utilizado para almacenar objetos en memoria para ser reusados sin tener que re-procesarlos, lo que en caso de tratarse de elementos con alta concurrencia, permite alivianar la carga general de procesamiento.

   En escenarios de alta demanda, diferentes clusters de Redis para encolamiento de mensajes y caché pueden ser implementados.
   </td>
</tr>
<tr>
   <td>
      <b>Index Cluster</b>
   </td>
   <td>
   Implementado con Elasticsearch el cual es utilizado para la indexación completa de los documentos y layout pages que serán "buscables" o "georeferenciables", Elastic Search también brinda soporte a los dashboards y targets de usuarios que son procesados en tiempo real.
   </td>
</tr>
<tr>
   <td>
      <b>Database Cluster</b>
   </td>
   <td>
   Implementado con MySQL Server (o algún motor compatible como MariaDB o Percona XtraDB) la base de datos es un componente fundamental de almacenamiento de toda la información que gestiona la plataforma, incluida la información de perfiles de usuario y la estructura de los sitios. La información aquí almacenada debe ser cuidadosamente respaldada. En el caso de las configuraciones de misión crítica se recomienda considerar utilizar el Percona XtraDB Cluster.
   </td>
</tr>
<tr>
   <td>
      <b>Shared File System / Object Storage</b>
   </td>
   <td>
   Diseñado primariamente para operar con Amazon S3, en ambientes On Premise es habitualmente implementado sobre un filesystem compartido al cual tienen acceso los servidores de aplicación y worker. Se debe garantizar, en caso que el almacenamiento sea interno, que esté disponible para todos los servidores de aplicación, y que sea posible la lectura/escritura concurrente desde cualquiera de ellos. De igual manera se deberá considerar copias de seguridad, en base a políticas vigentes.
   </td>
</tr>
</table>


### Componentes Adicionales
Adicionalmente, una instalación segura y escalable requerirá de los siguientes componentes adicionales los cuales deberán ser provistos por el cliente:

#### Balanceador de Carga
Habitualmente implementado sobre el Amazon ELB en el caso de la nube y en F5, Radware, o Barracuda para el caso On Premise el balanceador de carga será el responsable de dirigir el tráfico hacia los servidores Web que se reporten saludables a él. A su vez, el tráfico desde los servidores Web hacia la plataforma también se deberá balancear para asegurar que los servidores que posean alguna degradación o problema sean descartados.

#### Firewall Aplicativo
Si bien Modyo es continuamente revisado para eliminar cualquier posibilidad de inyección de código o comandos remotos, una instalación segura requerirá de la protección adicional de un firewall aplicativo. En el caso de la nube Modyo opera con el Amazon WAF de forma estándar y CloudFlare de forma opcional. En el caso de la modalidad On Premise dependerá del cliente.

#### Sistemas Monitoreo
Toda instalación de Modyo deberá ser monitoreada de forma apropiada. Para el caso de la plataforma, se ofrece una conexión directa con el APM de NewRelic. Para el caso de los componentes (Nginx, MySQL, Redis, Elasticsearch) existe un gran soporte en las plataformas de monitoreo más comunes, como Nagios, Munin, Zabbix, Dynatrace, entre otros.

#### Servidor de Control
Algunas formas de instalación de Modyo (paquete binario) se beneficiarán de contar con un servidor de control desde el cual se puedan lanzar los scripts de control del cluster de  Modyo con las tareas básicas de mantenimiento y actualizaciones. Modyo provee de scripts para la herramienta de control de configuración Ansible (Red Hat).


## Hardware Requerido
La Plataforma Modyo Enterprise On Premise está diseñada para ser compatible con las versiones más modernas de la Java Virtual Machine (JVM). Si bien la JVM está disponible en una amplia gama de sistemas operativos, la configuración recomendada es en entornos Linux. Otras configuraciones de sistemas operativos deben ser revisadas en conjunto con el equipo de soporte de Modyo.

Dependiendo del nivel de disponibilidad que se desee configurar, uno o más servidores pueden ser requeridos para cada uno de los roles previamente discutidos.

Hardware
Memoria y CPU
Para cada uno de los servidores de la arquitectura, los requerimientos mínimos recomendados son:
8 CPU cores de 2 Ghz o superior
12 GB de RAM o superior
Para entornos de alta concurrencia de usuarios se recomienda contar con al menos 4 cores por cada servidor de aplicación.
Almacenamiento
Se requiere que las siguientes rutas tengan espacio suficiente, y con un mínimo indicado disponible para Modyo, para realizar operaciones como carga de binarios, copias temporales, deployment de aplicación y uso de datos de trabajo.

Ruta
Tamaño mínimo
Detalles
/home/user
5G
Home de usuario asignado (/root si corresponde) donde se realizan operaciones de carga y descompresión temporal de archivos.
/tmp
5G
Se realizan operaciones de carga temporal remotamente, en procesos de deployment.
/var
30G

200G
Espacio en los servidores de aplicación para Modyo.

Espacio en servidores de indexación y base de datos.
/var/log
10G
En caso de tener partición aparte para logs.


Software
Según el rol del servidor configurado, los siguientes requerimientos de software deben ser adecuadamente configurados:
CentOS / Red Hat 7.2 o superior
Java JDK 1.8 (en los servidores de aplicación, workers e indexación)
Base de Datos compatible con MySQL 5.5 o superior (5.7 recomendado)
Elastic Search 2.3
Redis Server 3.2
Repositorio EPEL habilitados (RedHat/CentOS)
Registro y repositorios habilitados (RedHat/CentOS)
Requerimientos de la Instalación
La plataforma Modyo es distribuida en dos formatos: Paquete que contiene los binarios con los scripts de control para su ejecución y una Imagen de Contenedor compatible con Docker.
Paquete Binario
Para el caso de Modyo como paquete binario, éste debe ser desplegado en servidores Linux de 64 bits compatibles con CentOS / Red Hat 7.2, los cuales podrán ser físicos o virtuales, especificados más adelante en este documento.

### Contenedores Docker
En el caso de Modyo como contenedor, éste es configurado sobre una máquina base basada en Linux Debian que es compatible con Docker. El despliegue con Docker de la plataforma sólo contempla a la plataforma Modyo y aún requiere de la configuración de los elementos adicionales de la infraestructura.


Ambas versiones requieren que los componentes de los cuales dependen, mencionados en la sección anterior, sean configurados de forma separada por el cliente según sus necesidades de escalabilidad y disponibilidad.

El resto de esta guía asume primariamente una instalación por paquete binario.

## Configuraciones Básicas
Se recomienda que las ciertas variables sean incluídas en las configuraciones de entorno del servidor donde se instale la plataforma.

Ejemplo de configuración de /etc/profile.d/modyo.sh:
```sh
export MAGICK_MEMORY_LIMIT=512MB
export MODYO_HOME=/opt/modyo/current
export JRUBY_HOME=$MODYO_HOME/jruby
export PATH=$MODYO_HOME/bin:$JRUBY_HOME/bin:$PATH
export JRUBY_OPTS=”-J-server -J-Xss1m -J-Xms3072m -J-Xmx3072m -J-XX:ReservedCodeCacheSize=128m -J-XX:+CMSClassUnloadingEnabled -J-XX:+UseConcMarkSweepGC”
export RAILS_ENV=production
```

El servidor de aplicaciones y los procesos de worker están pensados para ser escalados horizontalmente incluyendo más instancias las cuales se configuran en forma de cluster dentro del cual se sincroniza el uso de los recursos disponibles.


### Creación del Usuario para Modyo
El usuario modyo será el responsable de la ejecución de los procesos de la plataforma. Los scripts de inicialización de la plataforma necesitan que este usuario esté creado y posea permisos suficientes para levantar el entorno de ejecución.

```sh
adduser --disabled-password --gecos "" modyo
```

### Configuración Apache
La configuración de Apache 2 se realiza por medio de un archivo de virtual host que define los parámetros y ubicaciones en donde ésta ha sido instalada.

```sh
<VirtualHost *:80>
   DocumentRoot "MODYO_HOME/modyo/public"

   <Location />
      AddOutputFilterByType     DEFLATE text/plain
      AddOutputFilterByType     DEFLATE text/xml
      AddOutputFilterByType     DEFLATE application/xhtml+xml
      AddOutputFilterByType     DEFLATE text/css
      AddOutputFilterByType     DEFLATE application/xml
      AddOutputFilterByType     DEFLATE image/svg+xml
      AddOutputFilterByType     DEFLATE application/rss+xml
      AddOutputFilterByType     DEFLATE application/atom_xml
      AddOutputFilterByType     DEFLATE application/javascript
      AddOutputFilterByType     DEFLATE application/x-javascript
      AddOutputFilterByType     DEFLATE text/html
      BrowserMatch      ^Mozilla/4 gzip-only-text/html
      BrowserMatch      ^Mozilla/4\.0[678] no-gzip
   </Location>

   <Directory MODYO_HOME/modyo/public>
      AllowOverride     all
      Options   -MultiViews -Indexes
   </Directory>

   ProxyPreserveHost    On
   ProxyRequests        Off

   ProxyPass    /assets !

   ProxyPass            / http://localhost:4000/
   ProxyPassReverse     / http://localhost:4000/

</VirtualHost>

NameVirtualHost *:80
```



Para iniciar o detener Apache2 se recomienda utilizar el comando apache2ctl start|stop|restart

Configuración Upstart para el App Server
Los scripts de upstart del App Server son los encargados de ejecutar la plataforma como un servicio del sistema operativo y asegurar que ésta se inicie en la secuencia de arranque del sistema.

```sh
# /etc/init/modyo-app.conf
description "This is an upstart job file for Modyo"
pre-start script
bash << "EOF"
mkdir -p /var/log/modyo
chown -R modyo:modyo /var/log/modyo
EOF
end script
start on runlevel [2345]
stop on starting rc RUNLEVEL=[016]
respawn
limit nofile 4096 4096
script
bash << "EOF"
su - modyo
sh $MODYO_HOME/bin/modyo-app.sh >> /var/log/modyo/modyo.log 2>&1
EOF
end script
```

Para iniciar o detener el servicio de Modyo App Server con la configuración de Upstart se utiliza el siguiente comando:
service modyo-app start|stop|status|restart (Ubuntu)
initctl start|stop|status|restart modyo-app (Red Hat)

Configuración Upstart para el Worker Process
Los scripts de upstart del Worker Process son los encargados de ejecutar los procesos en segundo plano de la plataforma como un servicio del sistema operativo y asegurar que ésta se inicie en la secuencia de arranque del sistema.

```sh
# /etc/init/modyo-worker.conf
description "This is an upstart job file for Modyo Worker"
pre-start script
bash << "EOF"
mkdir -p /var/log/modyo
chown -R modyo /var/log/modyo
EOF
end script
start on runlevel [2345]
stop on starting rc RUNLEVEL=[016]
respawn
limit nofile 4096 4096
script
bash << "EOF"
su - modyo
sh ${MDOYO_HOME}/bin/modyo-worker.sh >> /var/log/modyo/modyo-worker.log 2>&1
EOF
end script
```

Para iniciar o detener el servicio de Modyo Worker Process con la configuración de Upstart se utiliza el siguiente comando:
service modyo-worker start|stop|status|restart (Ubuntu)
initctl start|stop|status|restart modyo-worker (Red Hat)

Configuraciones Adicionales
Monitoreo
Se recomienda el monitoreo de las siguientes métricas en los servidores, independiente de su rol en la configuración:
Espacio libre en el disco duro
Memoria libre disponible
Carga de CPU en 5, 10 y 15 minutos

Además, en el caso de los servidores de aplicaciones e índices se recomienda el uso de algún profiler de máquina virtual Java para mantener control sobre los procesos iniciados.

Si alguna de estas métricas se encuentra fuera de los rangos considerados normales se deben tomar acciones, como las que se explican en el Apéndice C del presente documento.


Componente
Métricas Relevantes
Valores Normales
Varnish




Apache




MySQL
Latencia de replicación


Redis
Hit rate del caché







Rotado de Logs
Para maximizar el tiempo de operación se recomienda efectuar una política de rotado de logs que no requiera del reinicio de los procesos, como es el caso de la herramienta logrotate de Linux y su opción copytruncate.

Logrotate: La siguiente configuración se recomienda para el rotado de logs con logrotate:

```sh
/var/log/modyo/log/*.log {
    size=50M
    missingok
    rotate 10
    compress
    delaycompress
    notifempty
    copytruncate
}
```


Balanceador de Carga
URL de Monitoreo
Se recomienda utilizar la URL de monitoreo de la plataforma para configurar dentro del balanceador de carga una política que descarte o incluya a un servidor de aplicaciones en particular. Para ello se utiliza la siguiente URL:

```sh
curl MODYO_URL/status
{"status": "ok"}
```

La respuesta de la plataforma debe ser con un código HTTP 200 OK.

Certificados SSL
Si desea configurar el acceso a la plataforma mediante un certificado SSL se recomienda que éste quede instalado en el balanceador de carga y que el tráfico hacia los servidores de aplicaciones se realice sin encriptación. Esto evita el procesamiento de algoritmos complejos de encriptación en los servidores de aplicaciones delegando esta tarea al balanceador de carga. En muchos casos los balanceadores de carga poseen componentes especializados para esta labor.


El certificado SSL se encuentra configurado en el balanceador.



Variables de Entorno
El siguiente listado de variables de entorno corresponden a los diferentes parámetros que en Modyo pueden ser configurados.

Modyo recomienda configurar estos parámetros en el archivo /etc/profile.d/modyo.sh


Parámetro
Valores
Valor por Defecto
Descripción
MULTI_ACCOUNT
true, false
true





























## Parámetros de la JVM

La versión Modyo Enterprise On Premise está desarrollada en el lenguaje de programación JRuby el cual se ejecuta sobre la máquina virtual de Java en su versión Open JDK 1.8.

Las siguientes configuraciones de la máquina virtual de Java corresponden a valores que han sido probados con éxito en producción en las versiones Cloud de Modyo, para alta disponibilidad y concurrencia.

Heap Space: Se opta por utilizar 3/4 de la memoria RAM disponible, no superando los 4GB.
Garbage Collection: Se opta por utilizar un recolector concurrente para minimizar las pausas en la aplicación durante la ejecución.
NewRelic Agent: En caso de tener habilitada la integración con NewRelic, un parámetro adicional debe agregarse indicando la ubicación de la librería en la cual se encuentra el agente.


Ejemplo de configuración (servidor con 8GB RAM y NewRelic): instalado en /opt/newrelic
```sh
-J-server -J-Xms4096m -J-Xmx4096m -J-XX:+CMSClassUnloadingEnabled -J-XX:+UseConcMarkSweepGC -J-XX:ReservedCodeCacheSize=128m
```



## Problemas Comunes
### Problema: El Servidor no responde en la IP o URL donde se configuró
Primero se deben revisar las configuraciones de red (como el acceso a Internet, configuración de proxy, VPN, etc...) para descartar cualquier problema de conectividad.
Si el problema no es ese lo siguiente es revisar en los servidores de aplicaciones, chequeando que en todos ellos esté el proceso Java funcionando.

### Problema: El Servidor responde, pero de forma muy lenta
Esto puede deberse a problemas tanto de red como estado de carga en los servidores. Muchas veces la percepción de velocidad varía entre los usuarios, por lo que es recomendable solicitar información adicional.

Es recomendable revisar:
- Pool de conexiones suficiente para los threads configurados
- Heap de memoria suficiente para la aplicación
- Recolector GC de la máquina virtual de Java no debería correr todo el tiempo

### Problema: El monitoreo reporta que la RAM está al límite
La plataforma se configura con un espacio de memoria reservado en sus procesos principales (Aplicación y Worker) por lo que estos límites deben ser considerados al momento de decidir el tamaño que éstos tendrán. Además se debe considerar que el servidor requiere de espacio para procesar los comandos bajo demanda que la plataforma ejecuta (procesamiento de imágenes, diferenciado de archivos).

Si la memoria RAM está constantemente operando al límite la recomendación es ampliar o restringir el tamaño de Heap asignado a los procesos en Java.

### Problema: El monitoreo reporta que la CPU está al límite
Esto puede deberse a diversos motivos, como el procesamiento de imágenes o videos de tamaño grande o procesos diferentes a la plataforma que se estén ejecutando quitando recursos de ella. Detectar ésto es relativamente sencillo desde los servidores de aplicación revisando los procesos por CPU con el comando top. Si el problema está en el proceso Java puede deberse a que el recolector GC esté funcionando permanentemente. En este caso es recomendable reiniciar el proceso Java y ampliar el Heap de memoria si el problema persiste.

### Problema: No se envían correos
Se recomienda revisar la disponibilidad del servidor de SMTP configurado, realizando una prueba con TELNET. Si están en uso los servicios de nube híbrida de Modyo se debe contactar al soporte de Modyo.

### Problema: No se pueden publicar generar nuevas versiones del sitio o al exportar contenido
Existen algunos procesos complejos que deben ser ejecutados en segundo plano. Para ello Modyo depende del servidor de Redis para actuar como cola de mensajes y sus procesos worker para consumirlos. En caso de presentar este tipo de problemas se recomienda revisar el estado de estos servicios.
Problema: No se procesan imágenes, solo se sube el tamaño original
Los archivos originales son siempre seleccionados por defecto en caso de existir un problema con el procesamiento de las imágenes. Si se detecta que la plataforma no está generando los tamaños escalados debe revisarse que en todos los servidores de aplicaciones la librería imagemagick esté correctamente instalada y disponible desde la línea de comandos.
