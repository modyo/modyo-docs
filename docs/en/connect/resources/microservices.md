---
search: true
---

# Microservices Development

:::warning Page under implementation
This page is currently under implementation. Some sections may be empty or incomplete and the content may change.
:::

## Development
Modyo Connect can be used for the development of Microservices, which are deployed within Microservices, in addition to requiring repositories and automations, will require an execution environment with containers and an API Gateway, which will act as a security barrier and gateway for the functionality present in them.

::: tip Code Repository
The initial code and structure of the project in the developer's local environment must be backed up in a [code repository](../components/development.md#code-repository) provided by the service.
:::




## Known Problems
- Recommendations for project structure (Yeoman, template)
- Use of Modyo Commons
- Swagger for publication in API Gateway
- Logging and monitoring recommendations
- Recommendation for data persistence
    - Locks
    - Performance
    - Indexes
    - Migrations
- Recommendations for the invocation of external services
- Recommendation for the use of glues
- Recommendation for the use of scheduled tasks (Quartz)
- Recommendations for workflow and state machines
- Using the Modyo Administrative API


## Best Practices
- Best practice recommendations for project structure
- Code style recommendations

## Performance
- Use of databases: connection pool, indexes, locks
- Blocking of requests, timeouts

## Observability

