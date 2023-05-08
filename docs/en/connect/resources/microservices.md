---
search: true
---

# Microservices Development

## Development
Modyo Connect can be used to develop Microservices, which are deployed within Microservices, in addition to requiring repositories and automations, they will require an execution environment with containers and an API Gateway, which will act as a security barrier and gateway for the functionality present in them .

::: tip Code Repository
The initial code and structure of the project in the developer's local environment must be backed up in a [code repository](.. /components/development.md#code-repository) provided by the service.
:::

- Project structure recommendations (Yeoman, template)
- Using Modyo Commons
- Swagger for publishing on API Gateway
- Recommendations for logging and monitoring
- Recommendation for data persistence
    - Locks
    - Performance
    - Indices
    - Migrations
- Recommendations for invoking external services
- Recommendation for the use of glues
- Recommendation for using scheduled tasks (Quartz)
- Recommendations for workflow and state machines
- Using the Modyo Administrative API

## Good Practices
- Best practice recommendations for project structure
- Code style recommendations

## Performance
- Database usage: connection pool, indexes, locks
- Blocking requests, timeouts



