---
search: true
---

# Repository Pattern

The Repository pattern is a software design that encapsulates the storage, retrieval, and search of objects in a persistent repository. This allows for a clear separation between the logic of the data layer and the business layer.

A repository can be understood as a store of in-memory objects that are loaded from the database.

The Repository pattern has three main purposes:

- **Separate application logic from database logic**: Facilitates writing and maintaining code by reducing the need for logic for database manipulation.
- **Facilitate testing**: Allows for the exchange of the real repository for a fictitious implementation for testing, without affecting the database.
- **Provide a coherent interface for data access**: The application interacts with the repository through a coherent interface, regardless of the location of the data or the implementation of the database operations.

A disadvantage of the Repository pattern is that it can add complexity to the code. However, the benefits of separation of concerns, improvement in testing, and consistency in data access usually outweigh this disadvantage.

It is important to note that, although the Repository pattern is very useful, it is not the best choice for all situations. As with all design patterns, it is essential to carefully consider the needs and characteristics of the application before deciding to use it.

### Implementation of the repository pattern with Modyo

The Repository pattern can be applied in Modyo to both micro frontends and microservices through the implementation of intermediate repositories through [Modyo Connect](/en/connect). These repositories generate versioned components available in an artifact registration system, which can be invoked as required in different contexts.

To do this, Modyo Connect uses [GitHub Enterprise](https://github.com) technology, which provides access to three key components for this pattern:
- Repository to store and version the library, with [GitHub Repositories](https://github.com/features).
- Workflow automation system, with [GitHub Actions](https://github.com/features/actions).
- Artifact publication system for distribution, with [GitHub Registry](https://github.com/features/packages).

The last component is especially important, as it allows other projects to access the libraries that make up the pattern, obtaining reusable code under a controlled versioning scheme.

:::tip Semantic Versioning
To centrally manage intermediate libraries, it is necessary to establish a criterion for labeling the versions. For this, Modyo recommends the use of [semantic versioning](https://semver.org/).
:::