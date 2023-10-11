---
search: true
---

# Repository

The repository pattern is a software design that encapsulates storage, retrieval, and search in a persistent repository of objects. This allows you to clearly separate the logic of the data layer from the business layer.

A repository can be understood as a store of in-memory objects that are loaded from the database.

The repository pattern has three main purposes:

- **Separate application logic from database logic:** This makes it easier to write and maintain application code by reducing the need for logic for database manipulation.
- **Facilitate testing:** By allowing the exchange of the real repository with a fictitious implementation for testing without affecting the real database.
- **Provide a consistent interface for data access:** Regardless of the location of the data or the implementation of database operations, the application always interacts with a repository through a consistent interface.

A disadvantage of the repository pattern is that it can add additional complexity to the code, however, often, the benefits of separation of concerns, improved testing, and consistency in accessing data outweigh this disadvantage.

It's important to note that while the repository pattern can be very useful, it's not the best choice for every situation. As with all design patterns, it's essential to carefully consider the needs and features of your application before deciding to use it.

### Implementing the repository pattern with Modyo

The repository pattern can be applied in Modyo to both micro frontends and microservices by implementing intermediate repositories through [Modyo Connect] (/en/connect). These repositories generate versioned components available in an artifact registration system and can be invoked as required in different contexts.

To do this, Modyo Connect uses [GitHub Enterprise] technology (https://github.com), which provides access to three key components to activate this pattern:
- Repository where the library is stored and versioned, with [GitHub Repositories] (https://github.com/features)
- Workflow automation system, with [GitHub Actions] (https://github.com/features/actions)
- System for publishing artifacts for distribution, with [GitHub Registry] (https://github.com/features/packages)

The last component is especially important, since it allows other projects to access the libraries that make up the pattern, obtaining reusable code under a controlled versioning scheme.

:::type Semantic Versioning
To centrally manage intermediate libraries, it is necessary to establish criteria for labeling the versions to be generated. For this purpose, Modyo recommends the use of [semantic versioning] (https://semver.org/).
:::
