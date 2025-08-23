---
search: true
---

# Monitoring

Monitoring is crucial to ensure the efficiency and continuity of cloud applications. Accessing reliable information about system performance allows for better decision-making regarding critical points that require attention.

Modyo Connect includes real-time monitoring capabilities of the state of your infrastructure and applications, generating aggregated metrics in dashboards to determine the overall health of the service.

Modyo Connect is a managed service; most metrics are handled internally by our operations teams. As part of the service, only alerts related to your particular applications (e.g., problems with external services or internal application errors) are escalated to the client.

## Monitoring Components

#### [Application Metrics](application-metrics.html)
"White box" monitoring that instruments agents to report the internal behavior of applications. Provides detailed information about response times, error rates, and performance traces using NewRelic APM.

#### [Infrastructure Metrics](infrastructure-metrics.html)
Complete monitoring of cloud dependencies configured for the service using AWS CloudWatch. The most relevant metrics are centralized in NewRelic for correlation with application metrics.

#### [Log Registry](log-registry.html)
Sequential recording of system events and actions using AWS CloudWatch Logs. Provides evidence of system behavior with a unified view of all components.

## Key Features

- **Real-time monitoring**: Constantly updated metrics
- **Centralized dashboards**: 360° view of application status
- **Intelligent alerts**: Notifications only for critical application events
- **Complete traceability**: From request to response

## Key Metrics Monitored

- Average response times and percentiles
- Application error rate
- [Apdex](https://en.wikipedia.org/wiki/Apdex) (Application Performance Index)
- Status of external services and APIs
- Slow traces and bottlenecks
- Infrastructure resource utilization

## Access and Management

Monitoring access is managed according to component type:
- **NewRelic**: "Basic" type access restricted to specific dashboards
- **AWS CloudWatch**: Access through service accounts
- **Logs**: Centralization and export available as needed

## Important Considerations

:::warning Client Responsibility
- Obfuscate sensitive information in logs
- Properly configure monitoring agents in microservices
- Regularly review generated metrics and alerts
:::

## Quick Start

1. Activate [application monitoring](application-metrics.html) in your microservices
2. Verify access to [infrastructure metrics](infrastructure-metrics.html)
3. Configure [log](log-registry.html) retention according to your needs
4. Request access to dashboards through the [Support Center](https://support.modyo.com)