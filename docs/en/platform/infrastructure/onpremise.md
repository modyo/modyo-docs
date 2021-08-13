---
search: true
---

# Enterprise On Premise

## Architecture
The Modyo platform and all the components of its technological stack on which it depends can be configured in different availability scenarios.

The following scenarios correspond to the Modyo deployment architectures recommended for the On Premise mode. Depending on the type of infrastructure the customer has, one might be more recommended one over the other.

### High Availability Deployment
High Availability Deployment considers two physical locations (datacenters) in which the system is configured in active-active or active-passive mode, with a replication scheme in data persistence but unclusterized (requires manual or automatic failover between master instances and their replicas).

This model provides high availability in a scenario primarily intended for primary reading consumption of projects developed on Modyo and allows a high degree of scalability for read operations by being able to simultaneously use database replicas.

With this form of deployment it should be considered that failover operations are in a sense, that is, once the system is performed it must be reconfigured manually.


### Mission Critical Deployment
Mission Critical Deployment considers three or more physical locations (datacenters in odd numbers) where the system is configured in active-active mode, with a clusterization scheme of the data persistence layer.

This model allows high availability in scenarios where both readings and writes are considered critical. This scheme offers a high degree of scalability for read and write operations.

By maintaining an odd number of physical locations, the cluster is protected from split brain conditions where it is not possible to detect which node failed.

With this form of deployment, failover operations should be considered automatic and once the nodes return to the cluster they are automatically adopted and placed online.

Additionally this type of configuration will depend on the configuration of monitoring and communication routing proxies, such as ProxySQL and HAProxy.


## Components
Modyo requires several components to work which can be together on the same server or be separated into different clusters, depending on the scale and high availability scenario required.

In the case of the cloud most of these components are configured with PaaS services. In the case of On Premise configurations these components will be configured and operated by the customer.

Modyo offers its customers on Premise an extended support contract that covers all the components on which the platform relies.

### Basic Components
The following correspond to the basic components that any Modyo deployment should have:

 <table> 
 <tr> 
 <td style="width:25%;"> 
 <b> Proxy Cache Server </b> 
 </td> 
 <td> 
 Implemented with Varnish or Nginx the Proxy Cache Server allows you to speed up the delivery of static pages and resources by keeping a copy of them in the server's memory and preventing the request from going down to the application server.
 </td> 
 </tr> 
 <tr> 
 <td> 
 <b> Web Server </b> 
 </td> 
 <td> 
 Implemented with Apache or Nginx, the Web Server will be responsible for processing all incoming requests to route them to the platform or to static file storage systems. The Web Server also performs advanced cache operations (Varnish or Nginx) and load balancing if required.
 </td> 
 </tr> 
 <tr> 
 <td> 
 <b> Modyo App Server </b> 
 </td> 
 <td> 
 The Modyo App Server is responsible for the application of Modyo, both for the front end of sites and the back end of administration.
 </td> 
 </tr> 
 <tr> 
 <td> 
 <b> Modyo Worker Process </b> 
 </td> 
 <td> 
 The Modyo Worker is responsible for taking and processing glued messages in the background.
 </td> 
 </tr> 
 <tr> 
 <td> 
 <b> NoSQL Cluster </b> 
 </td> 
 <td> 
 Implemented with Redis Server which is a very powerful and versatile key value database. Modyo's deployment architecture is used to store objects in memory to be reused without having to re-process them, which in case of high-concurrency elements, allows to alleviate the overall processing load.
 In high-demand scenarios, different Redis clusters for message gluing and cache can be implemented.
 </td> 
 </tr> 
 <tr> 
 <td> 
 <b> Index Cluster </b> 
 </td> 
 <td> 
 Implemented with Elasticsearch which is used for full indexing of documents and layout pages that will be "searchable" or "georeferencable", Elastic Search also supports user dashboards and targets that are processed in real time.
 </td> 
 </tr> 
 <tr> 
 <td> 
 <b> Database Cluster </b> 
 </td> 
 <td> 
 Deployed with MySQL Server (or some compatible engine such as MariaDB or Percona XtraDB) the database is a critical storage component of all the information that the platform manages, including user profile information and site structure. The information stored here must be carefully backed up. For mission-critical configurations it is recommended to consider using the Percona XtraDB Cluster.
 </td> 
 </tr> 
 <tr> 
 <td> 
 <b> Shared File System/Object Storage </b> 
 </td> 
 <td> 
 Designed primarily to operate with Amazon S3, In On Premise environments it is commonly deployed on a shared filesystem that is accessible by application servers and worker. Ensure, if the storage is internal, that it is available to all application servers, and that concurrent read/write from any of them is possible. Similarly, backups should be considered, based on current policies.
 </td> 
 </tr> 
 </table> 


### Additional Components
Additionally, a secure and scalable installation will require the following additional components which must be provided by the customer:

 <table> 
 <tr> 
 <td style="width:25%;"> 
 <b> Load Balancer </b> 
 </td> 
 <td> 
 Usually implemented on Amazon ELB in the case of the cloud and on F5, Radware, or Barracuda for On Premise the load balancer will be responsible for directing traffic to Web servers that report healthy to it. In turn, traffic from Web servers to the platform must also be balanced to ensure that servers with any degradation or problem are discarded.
 </td> 
 </tr> 
 <tr> 
 <td> 
 <b> Applicative Firewall </b> 
 </td> 
 <td> 
 While Modyo is continuously reviewed to eliminate any possibility of code injection or remote commands, a secure installation will require additional protection from an applicative firewall. For the cloud Modyo operates with Amazon WAF as standard and CloudFlare optionally. In the case of the On Premise mode it will depend on the customer.
 </td> 
 </tr> 
 <tr> 
 <td> 
 <b> Monitoring Systems </b> 
 </td> 
 <td> 
 All Modyo installation must be monitored appropriately. For the platform case, a direct connection to the NewRelic APM is offered. For components (Nginx, MySQL, Redis, Elasticsearch) there is great support in the most common monitoring platforms, such as Nagios, Munin, Zabbix, Dynatrace, among others.
 </td> 
 </tr> 
 <tr> 
 <td> 
 <b> Control Server </b> 
 </td> 
 <td> 
 Some ways of installing Modyo (binary package) will benefit from having a control server from which you can launch the control scripts of the Modyo cluster with basic maintenance and upgrades. Modyo provides scripts for the Ansible configuration control tool (Red Hat).
 </td> 
 </tr> 
 </table> 


## Hardware Requirements
The Modyo Enterprise On Premise Platform is designed to be compatible with the most modern versions of Java Virtual Machine (JVM). While the JVM is available on a wide range of operating systems, the recommended configuration is in Linux environments. Other operating system configurations should be reviewed in conjunction with the Modyo support team.

Depending on the level of availability you want to configure, one or more servers may be required for each of the previously discussed roles.

Hardware
Memory and CPU
For each server in the architecture, the minimum recommended requirements are:
8 CPU cores of 2 Ghz or higher
12 GB of RAM or higher
For high user concurrency environments it is recommended to have at least 4 cores per application server.
Storage
The following routes are required to have enough space, and with a specified minimum available to Modyo, to perform operations such as binary loading, temporary copies, application deployment, and job data usage.

Path
Minimum size
Details
/home/user
5G
Assigned user home (/root if applicable) where temporary file upload and decompression operations are performed.
/tmp
5G
Temporary loading operations are performed remotely, in deployment processes.
/var
30G

200G
Space on application servers for Modyo.

Space on indexing servers and database.
/var/log
10G
In case you have separate partition for logs.


Software
Depending on the configured server role, the following software requirements must be properly configured:
CentOS/Red Hat 7.2 or higher
Java JDK 1.8 (on application servers, workers and indexing)
Database compatible with MySQL 5.5 or higher (5.7 recommended)
Elastic Search 2.3
Redis Server 3.2
EPEL Repository Enabled (RedHat/CentOS)
Logging and Repositories Enabled (RedHat/CentOS)
Installation Requirements
The Modyo platform is distributed in two formats: Package containing binaries with control scripts for execution and a Docker compatible Container Image.
Binary Package
For Modyo as a binary package, it must be deployed on 64-bit Linux servers compatible with CentOS /Red Hat 7.2, which may be physical or virtual, specified later in this document.

### Docker Containers
In the case of Modyo as a container, it is configured on a Linux Debian base machine that is compatible with Docker. Docker deployment of the platform only contemplates the Modyo platform and still requires the configuration of the additional elements of the infrastructure.


Both versions require that the components on which they depend, mentioned in the previous section, be configured separately by the customer according to their scalability and availability needs.

The rest of this guide assumes primarily one installation per binary package.

## Basic Configurations
It is recommended that certain variables be included in the server environment settings where the platform is installed.

/etc/profile.d/modyo.sh configuration example:
```sh
export MAGICK_MEMORY_LIMIT=512MB
export MODYO_HOME=/opt/modyo/current
export JRUBY_HOME=$MODYO_HOME/jruby
export PATH=$MODYO_HOME/bin:$JRUBY_HOME/bin:$PATH
export JRUBY_OPTS="-J-server -J-Xss1m -J-Xms3072m -J-Xmx3072m -J-XX:ReservedCodeCacheSize=128m -J-XX:+CMSClassUnloadingEnabled -J-XX:+UseConcMarkSweepGC"
export RAILS_ENV=production
```

The application server and worker processes are designed to be scaled horizontally including more instances which are configured as a cluster within which the use of available resources is synchronized.


### User Creation for Modyo
The modyo user will be responsible for the execution of the platform's processes. Platform initialization scripts require this user to be created and has sufficient permissions to lift the runtime environment.

```sh
adduser --disabled-password --gecos "" modyo
```

### Apache Configuration
Apache 2 configuration is done by means of a virtual host file that defines the parameters and locations where it has been installed.

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



To start or stop Apache2 it is recommended to use the apache2ctl start|stop|restart command

### Upstart Configuration

**App Server:** App Server upstart scripts are responsible for running the platform as an operating system service and ensuring that the platform is started in the system boot sequence.

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

To start or stop the Modyo App Server service with Upstart configuration, use the following command:
service modyo-app start|stop|status|restart (Ubuntu)
initctl start|stop|status|restart modyo-app (Red Hat)

**Worker Process:** Worker Process upstart scripts are responsible for running the platform's background processes as an operating system service and ensuring that the platform starts in the system boot sequence.

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

To start or stop the Modyo Worker Process service with Upstart configuration, use the following command:
service modyo-worker start|stop|status|restart (Ubuntu)
initctl start|stop|status|restart modyo-worker (Red Hat)

### Monitoring Configurations

We recommend monitoring the following metrics on servers, regardless of their role in the configuration:
* Free hard disk space
* Free memory available
* CPU load in 5, 10 and 15 minutes

In addition, for application and index servers it is recommended that you use some Java virtual machine profiler to maintain control over started processes.


### Rotated Logs

To maximize uptime, it is recommended to make a log rotated policy that does not require a process restart, as is the case with the Linux logrotate tool and its copytruncate option.

**Logrotate:** The following configuration is recommended for logging rotates with logrotate:

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


### Load Balancer

**Monitoring URL:** It is recommended to use the platform monitoring URL to configure within the load balancer a policy that discards or includes a particular application server. To do this, the following URL is used:

```sh
curl MODYO_URL/status
{"status": "ok"}
```

The platform response must be with an HTTP 200 OK code.

**SSL Certificates:** If you want to configure access to the platform using an SSL certificate, it is recommended that the platform be installed on the load balancer and that traffic to the application servers be done without encryption. This prevents the processing of complex encryption algorithms on application servers by delegating this task to the load balancer. In many cases load balancers have specialized components for this task.


The SSL certificate is configured in the balancer.



## Environment Variables
The following list of environment variables correspond to the different parameters that can be configured in Modyo.

Modyo recommends setting these parameters in the /etc/profile.d/modyo.sh file


<style> 
table {display: table;}
</style> 

| Changeable | Description | Values | Default | Required |
|----------|-------------|---------|---------|-----------|
|BUNDLE_GEMFILE|Sets the path to the Gemfile|absolute route|(rails.root) /Gemfile|NO|
|EXECJS_RUNTIME|Set execjs runtime|disabled \| node||NO|
|MODYO_AUTH <br> _TIMEOUT|HttpClient timeout|Number of seconds|10|NO|
|MODYO_AWS <br> _KEY|AWS key|Valid String||IF aws|
|MODYO_AWS <br> _S3_BUCKET|S3 bucket URI|Valid URI||IF aws|
|MODYO_AWS <br> _SECRET|AWS secret|Valid String||IF aws|
|MODYO_BACKUPS <br> _LIMIT|Number of backup-type versions stored on the platform|0 (unlimited) - Positive number|20|NOT|
|MODYO_BANCARD <br> _BASE_URL|Stable the bancard URI|String type URI||NOT|
|MODYO_CREDOMATIC <br> _BASE_URL|Stable the credomatic URI|String type URI||NOT|
|MODYO_CREDOMATIC <br> _CALLBACK_URL|Sets the callback URI for Credomatic response|String type URI||NOT|
|MODYO_ELASTICSEARCH<br>_HOSTS|Comma separated list of elasticsearch servers URI|URIs (e.g.: http://elasticsearch.modyo.me:9200)||IF|
|MODYO_GOOGLE <br> _TAG_MANAGER_ID|Enable and specify the google tag manager identifier|Valid String||NOT|
|MODYO_HTML <br> _ALLOWED_ATTRS|Allowed attributes (of tags) to use in froala. Overwrite froala defaults|Comma Separated Attribute List|View froala default in docs|NOT|
|MODYO_HTML <br> _ALLOWED_TAGS|Tags allowed to use in froala. Overwrite froala defaults|Comma separated list of html tags|Watch froala conf|NOT|
|MODYO_KHIPU <br> _CALLBACK_URL|Set callback URI for Khipu response|String type URI||NOT|
|MODYO_LOCK <br> _TIMEOUT|Set the maximum time before unlinking the user from a locked edit resource, so that it is free to be reassigned|Number of seconds|7200|NOT|
|MODYO_LOG_LEVEL|Level of reported incidents in the platform log|Info\| warning\| error\| fatal\| debug|debug|NOT|
|MODYO_LOG<br>_OUTPUT|Specifies whether the log is to a file or to standard output|stdout\| file file|stdout|NOT|
|MODYO_MAILER <br> _DELIVERY_METHOD|Protocol for delivery|smtp\| sendmail\| file\| test|smtp|NOT|
|MODYO_MAILER <br> _FILE_LOCATION|location of the mailer file|Absolute route|tmp/mails|NOT|
|MODYO_MAILER <br> _PERFORM_DELIVERIES|Perform deliveries|true\| false|true|NOT|
|MODYO_MAILER <br> _RAISE_DELIVERY_ERRORS|Defines whether to propagate errors|true\| false|false|NOT|
|MODYO_MAILER <br> _SENDMAIL_ARGUMENTS|arguments for sendmail app|sendmail arguments|-i|NOT|
|MODYO_MAILER <br> _SENDMAIL_LOCATION|location of sendmail app|Absolute route|/usr/sbin/sendmail|NOT|
|MODYO_MAILER <br> _SMTP_ADDRESS|Address of the smtp service|Service URI|smtp.sendgrid.net|NOT|
|MODYO_MAILER <br> _SMTP_AUTHENTICATION|Smtp Service Authentication Type|Valid String|plain|NOT|
|MODYO_MAILER <br> _SMTP_OPENSSL_VERIFY_MODE|TLS Certificate Verification Mode|none\| fart||SI tls certificate|
|MODYO_MAILER <br> _SMTP_PASSWORD|Password of the smtp service. MODYO_SENDGRID_PASSWORD is used as fallback|Valid String||IF smtp|
|MODYO_MAILER <br> _SMTP_PORT|Port of the smtp service|Port number|587|NOT|
|MODYO_MAILER <br> _SMTP_STARTTLS_AUTO|Enables starttls|true\| false|false|NOT|
|MODYO_MAILER <br> _SMTP_USER_NAME|User name of the smtp service. MODYO_SENDGRID_USERNAME is used as fallback|Valid String||IF smtp|
|MODYO_MULTI <br> _ACCOUNT_ENABLED|Enable multi-account mode|true\| false|false|NOT|
|MODYO_MULTI <br> _ACCOUNT_LIST|List of account hostnames|Comma Separated List of Hosts||IF multi-account list|
|MODYO_MULTI <br> _ACCOUNT_MODE|How multi-account operates|list\| subdomain||YES multi-account|
|MODYO_MYSQL <br> _ADAPTER|Adapter to use for database connection|mysql2\| jdbcmysql|mysql2|NOT|
|MODYO_MYSQL <br> _DATABASE|Name of the database|Valid String||IF|
|MODYO_MYSQL_HOST|Database URI|Valid URI||IF|
|MODYO_MYSQL <br> _PASSWORD|Database password|Valid String||IF|
|MODYO_MYSQL_POOL|Database Connection Pool Size|Number of connections|100|NOT|
|MODYO_MYSQL <br> _TIMEOUT|Maximum timeout for a query to the database in ms|Time in milliseconds|5000|NOT|
|MODYO_MYSQL <br> _USERNAME|Database User|Valid String||IF|
|MODYO_NEWRELIC <br> _APP_NAME|Application name in NewRelic|Valid String||IF newrelic|
|MODYO_NEWRELIC <br> _CA_BUNDLE_PATH||||NOT|
|MODYO_NEWRELIC <br> _ENABLED|Enable reporting to NewRelic|true\| false|false|NOT|
|MODYO_NEWRELIC<br>_KEY|NewRelic Connection Key|Valid String||IF newrelic|
|MODYO_ONECLICK <br> _BASE_URL|Set the base URI for OneClick|String type URI||NOT|
|MODYO_ONECLICK <br> _PUBLIC_CERTIFICATE|Set the public certificate for OneClick|String type certificate||NOT|
|MODYO_ORDER <br> _CONFIRMATION <br> _OPEN_TIMEOUT|Time to wait for confirmation of an order|Number of seconds|2|NOT|
|MODYO_ORDER <br> _CONFIRMATION <br> _READ_TIMEOUT|Timeout for reading the confirmation of an order|Number of seconds|5|NOT|
|MODYO_ORDER <br> _CONFIRMATION <br> _RETRIES|Number of attempts to confirm an order|Number of Attempts|5|NOT|
|MODYO_ORDER <br> _CONFIRMATION <br> _RETRIES_TIMEOUT|Timeout between retries for confirmation of an order|Number of seconds|5|NOT|
|MODYO_ORDER <br>\ _IMAGE_CODE_ <br> SECRET|Secret to qr and barcode generation|String|48c7954272|NOT|
|MODYO_PANEL <br> _DEFAULT_SUBSCRIPTION <br> _PERIOD|Default subscription time when creating new plans|Number of days||NOT|
|MODYO_PANEL <br> _DEFAULT_TRIAL_PERIOD|Default test mode time when creating new plans|Number of days||NOT|
|MODYO_PANEL <br> _PASSWORD|User password for the platform panel|Valid String as password||IF|
|MODYO_PANEL <br> _USER|User for the platform panel|Valid String as a User||IF|
|MODYO_PAPERCLIP <br> _COMMAND_PATH|Indicates the path where ImageMagick is installed|Absolute route|/usr/bin/|NOT|
|MODYO_PAPERCLIP <br> _FOG_CREDENTIALS|It's how it communicates with the storage service, S3, Azure, Google or on-premises|Hash with provider and credentials|local provider|NOT|
|MODYO_PAPERCLIP <br> _FOG_DIRECTORY|Indicates where assets will be saved. If local, it is an empty string, if it is an s3, it is the url of the bucket, url of the bucket if Google|Valid String||NOT|
|MODYO_PAPERCLIP<br>_FOG_HOST|CDN URL (ex CDN_URL)|CDN URI||IF|
|MODYO_PAPERCLIP <br> _PATH|Indicates how the path will be split where the files already processed will be saved.|Valid String|uploads/:uuid/:style/ <br>:basename. :extension|NOT|
|MODYO_PAPERCLIP <br> _PRESERVE_FILES_ON_DESTROY|Indicates whether files should be preserved when destroying the container instance|true\| false|true|NOT|
|MODYO_PAPERCLIP <br> _STORAGE|Set the library that will be associated with the provider. In our case it is always FOG|fog|fog|NOT|
|MODYO_PAYME <br> _WALLET_BASE_URL|Set the base URI for PayMe|String type URI||NOT|
|MODYO_PAYUAPI <br> _BASE_URL|Set the base URI for PayuAPI|String type URI||NOT|
|MODYO_PAYUAPI <br> _CALLBACK_URL|Set callback URI for PayuAPI response|String type URI||NOT|
|MODYO_PLATFORM <br> _DOMAIN|Platform domain name|platform domain (e.g. modyo.cloud)||IF|
|MODYO_PLATFORM<br>_EMAIL|Mailname as sender on mail shipments|String valid as email||IF|
|MODYO_PLATFORM <br> _EMAIL_DOMAIN|Domain for auto-generated emails with oauth2 integration|String with valid domain name||IF|
|MODYO_PLATFORM <br> _MAX_ALLOWED_REVIEWS|Maximum number of revisions allowed in the team review|Positive quantity|7|NOT|
|MODYO_PLATFORM <br> _MAX_CUSTOM_FIELDS|Sets the maximum number of user custom fields that can be created in an account|Number of custom fields allowed|20|NOT|
|MODYO_PLATFORM <br> _MAX_SITE_SEARCH <br> _RESULTS|Maximum number of results in the site search|Positive quantity|100|NOT|
|MODYO_PLATFORM <br> _MIN_ACCEPTED_AGE|Set the minimum age for registration users on the platform|Number of years|13|NOT|
|MODYO_PLATFORM_NAME|Name of the platform|Valid String||IF|
|MODYO_PLATFORM <br> _NAMESPACE|Platform ID to create the namespaces of the services used: redis, elasticsearch, SQS and Sidekiq|String representing a namespace (e.g. modyo-cloud)||IF|
|MODYO_PLATFORM_PORT|Port used by the platform|: + Port number|undefined (:80)|NOT|
|MODYO_PLATFORM <br> _TARGET_EXPIRES_IN|Expiration time in minutes of the cache used for targets|Number of minutes|15|NOT|
|MODYO_PLATFORM_ <br> USE_CUSTOM_HOST <br> _ON_NON_PRODUCTION|Allows the use of custom hosts in non-productive environments|true\| false|false|NOT|
|MODYO_PLATFORM <br> _WIDGETS <br> _APPLICATION_NAME|Used to identify when a request comes from a modyo-cli style app, the user agent of the request is compared against this value|Application name|MODYO-CLI|NOT|
|MODYO_PUMA <br> _MAX_THREADS|Maximum number of threads used by puma|Number of threads|16|NOT|
|MODYO_PUMA <br> _MIN_THREADS|Minimum number of threads used by puma|Number of threads|16|NOT|
|MODYO_PUMA <br> _PROCESSES|Sets the number of puma workers|Number of processes|2|NOT|
|MODYO_PUMA <br> _WORKER_TIMEOUT|Maximum execution time of a puma worker|Number of seconds|60|NOT|
|MODYO_QUEUE <br> _PROVIDER|Type of work queue to use by the application|sidekiq\| shoryuken|sidekiq|NOT|
|MODYO_RAILS <br> _SERVE_STATIC_FILES|Allows Rails to serve files in /public/, including precompiled resources|true\| false|false|NOT|
|MODYO_REDIS <br> _CACHE_SERVERS|Comma separated list of the Cache Servers URI|URIs (e.g. redis: //redis.modyo.me:6379)||IF|
|MODYO_REDIS <br> _PASSWORD|Password for connecting to redis|Valid String||NOT|
|MODYO_REDIS <br> _SIDEKIQ_SERVER|URI of the redis server to be used with sidekiq|URI (e.g. redis: //redis.modyo.me:6379)||IF|
|MODYO_RUN <br> _IT_ANYWAY|Database Destructive Rake Task Protection Bypass|1 if you want to perform a destructive task||NOT|
|MODYO_SEC <br> _USE_SSL|Enable SSL on the platform|true\| false|true|NOT|
|MODYO_SEC <br> _USE_SSL_HSTS|Enable HSTS header on the platform|true\| false|false|NOT|
|MODYO_SEC <br> _USE_SSL_ON_LOGOUT|Enables use of SSL in the logout|true\| false|true|NOT|
|MODYO_SEC <br> _X_FRAME_OPTIONS|Set the X-Frame-Options header|DENY\| SAMEORIGIN\| ALLOW-FROM uri|SAMEORIGIN|NOT|
|MODYO_SECRET_TOKEN|Secret used by the application to encrypt sensitive data (cookies)|String at least 30 characters (random)||IF|
|MODYO_SENDGRID <br> _CALLBACK_KEY|Set a key to validate notifications from Sendgrid|Minimum string 30 random characters||IF sendgrid|
|MODYO_SENDGRID <br> _PASSWORD|Sendgrid User Password|Valid String||IF sendgrid|
|MODYO_SENDGRID<br>_USERNAME|Sendgrid Username|Valid String||IF sendgrid|
|MODYO_SESSION <br> _EXPIRE_AFTER|Set the time at which the session will expire|unit value (units: second, seconds, minute, minutes, hour, hours, day, days, week, weeks, month, months)|1.week|NOT|
|MODYO_SESSION_KEY|Key used to name the session cookie|Valid String (e.g.: _modyo_cloud)||IF|
|MODYO_SESSION_STORE|Sets how to persist the session|cookie\| cache|cookie|NOT|
|MODYO_SESSION <br> _TRACKING_PERIOD|The period in minutes when session tracking is recorded. The value 0 corresponds to untracked|Number of minutes|5|NOT|
|MODYO_TIGOMONEY <br> _BASE_URL|Set the base URI for TigoMoney|String type URI||NO|
|MODYO_TRIAL <br> _ACCOUNT_NEEDS <br> _AUTHORIZATION|Enables trial authorization|true \| false|false|NO|
|MODYO_WEBPAY <br> _BASE_URL|Set the base URI for WebPay|String type URI||NO|
|MODYO_WEBPAY <br> _CALLBACK_URL|Set the callback URI for WebPay response|String type URI||NO|
|MODYO_WEBPAY <br> _LOGGING|Enables logging for WebPay responses|true \| false|true|NO|
|MODYO_WEBPAY <br> _PUBLIC_CERTIFICATE|Set the public certificate for WebPay|String type certificate||NO|
|MODYO_WEBPAY <br> _REDIRECT <br> _CONFIRMATION_URL|Set the commit URI|String type URI||NO|
|MODYO_WEBPAY <br> _REDIRECT_URL|Set the redirect URI for WebPay|String type URI||NO|
|NODE_ENV|Set the Node runtime environment|test \| development \| production|development|NO|
|RACK_ENV|Establishes the Rack runtime|test \| development \| production|development|NOT|
|RAILS_ENV|Set the Rails runtime environment|test\| development \| production \| certification \| staging|development|NOT|
|RAILS_SERVE <br> _STATIC_FILES|Allows Rails to serve files in /public/, including precompiled resources|true \| false||NO|
|SECRET_KEY_BASE|Set the secret_key_base for the application|String of more than 30 random characters||YES|
|TEST_ENV_NUMBER|Number of processes used to run tests in parallel, is handled internally by the parallel test gem|Process number||NO|



## JVM Parameters

The Modyo Enterprise On Premise version is developed in the JRuby programming language which runs on the Java virtual machine in its Open JDK 1.8 version.

The following Java VM configurations correspond to values that have been successfully tested in production in the Cloud versions of Modyo, for high availability and concurrency.

**Heap Space:** Opt to use 3/4 of the available RAM, not exceeding 4GB.

**Garbage Collection:** You choose to use a concurrent collector to minimize pauses in the application during execution.

**NewRelic Agent:** If you have NewRelic integration enabled, an additional parameter must be added indicating the location of the library where the agent is located.


Configuration example (server with 8GB RAM and NewRelic): installed in /opt/newrelic
```sh
-J-server -J-Xms4096m -J-Xmx4096m -J-XX:+CMSClassUnloadingEnabled -J-XX:+UseConcMarkSweepGC -J-XX:ReservedCodeCacheSize=128m
```



## Common Problems
### Problem: Server is not responding on the IP or URL where it was configured
First, network settings (such as Internet access, proxy settings, VPN, etc...) should be reviewed to rule out any connectivity issues.
If the problem is not that the next thing is to check on the application servers, checking that in all of them the Java process is working.

### Problem: Server responds, but very slowly
This may be due to both network problems and load status on servers. Many times the perception of speed varies between users, so it is advisable to request additional information.

It is advisable to review:
- Sufficient connection pool for configured threads
- Enough memory heap for the application
- Java virtual machine GC collector shouldn't run all the time

### Problem: Monitoring reports RAM is at limit
The platform is configured with a reserved memory space in its main processes (Application and Worker) so these limits should be considered when deciding the size they will have. In addition, it should be considered that the server requires space to process the on-demand commands that the platform executes (image processing, file differentiated).

If RAM is constantly operating to the limit the recommendation is to extend or restrict the Heap size assigned to processes in Java.

### Problem: Monitoring reports CPU is at limit
This may be due to a variety of reasons, such as processing large images or videos or processes other than the platform that are running by removing resources from it. Detecting this is relatively simple from application servers by reviewing processes by CPU with the top command. If the problem is in the Java process it may be because the GC collector is working permanently. In this case it is advisable to restart the Java process and extend the memory heap if the problem persists.

### Problem: No mails are sent
It is recommended to review the availability of the configured SMTP server by performing a TESTING with TELNET. If Modyo hybrid cloud services are in use, you should contact Modyo support.

### Issue: Unable to publish generate new versions of the site or when you export content
There are some complex processes that need to be executed in the background. Modyo relies on the Redis server to act as a message queue and its worker processes to consume them. In case of such problems it is recommended to review the status of these services.
Problem: No images are processed, only the original size is uploaded
Original files are always selected by default if there is a problem with image processing. If it is detected that the platform is not generating the scaled sizes, it should be checked that on all application servers the imagemagick library is correctly installed and available from the command line.
