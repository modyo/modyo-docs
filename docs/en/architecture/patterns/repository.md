---
search: true
---

# Repository Pattern

The repository pattern is a software design that encapsulates storage, retrieval, and search operations within a persistent object repository, clearly separating data layer logic from the business layer.

A repository can be conceptualized as an in-memory store of objects loaded from the database.

The repository pattern serves three primary purposes:

- **Separate application logic from database logic**: This simplifies code writing and maintenance by reducing the need for database manipulation logic within the application.
- **Facilitate testing**: It enables the exchange of the real repository with a fictitious implementation for testing purposes, without affecting the actual database.
- **Provide a consistent interface for data access**: Regardless of data location or database operation implementation, the application consistently interacts with a repository through a uniform interface.

A disadvantage of the repository pattern is that it can introduce additional code complexity. However, the benefits of separation of concerns, improved testing, and consistent data access often outweigh this drawback.

It's important to note that while the repository pattern can be highly beneficial, it may not be the optimal choice for every situation. As with all design patterns, it is essential to carefully consider the specific needs and characteristics of your application before deciding to implement it.

### Implementation of the repository pattern with Modyo

The repository pattern can be applied in Modyo to both micro frontends and microservices through the implementation of intermediate repositories through [Modyo Connect](/en/connect). These repositories generate versioned components available in an artifact registration system, which can be invoked as needed in different contexts.

To achieve this, Modyo Connect leverages [GitHub Enterprise](https://github.com) technology, providing access to three key components for this pattern:
- A repository for storing and versioning the library, utilizing [GitHub Repositories](https://github.com/features).
- A workflow automation system, powered by [GitHub Actions](https://github.com/features/actions).
- An artifact publication system for distribution, managed by [GitHub Registry](https://github.com/features/packages).

The last component is particularly important, as it enables other projects to access the libraries that comprise the pattern, facilitating reusable code under a controlled versioning scheme.

:::tip Semantic Versioning
To centrally manage intermediate libraries, it is necessary to establish a criterion for labeling versions. For this purpose, Modyo recommends the use of [semantic versioning](https://semver.org/).
:::
