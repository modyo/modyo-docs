---
search: true
---

# Repository

The repository pattern is a software design pattern that provides a way to encapsulate storage, retrieval, and search operations in a persistent object repository, allowing for a clear separation between the logic of the data layer and the business layer. A repository can be viewed as a store of in-memory objects that are loaded from the database.

The repository pattern has three main purposes:

- **Separate application logic from database logic:** This allows application code to be written and maintained more efficiently, as it doesn't need to contain much logic for database manipulation.
- **Allow easier testing:** By using the repository pattern, you can swap the real repository with a fictitious implementation for testing without affecting the real database.
- **Provide a consistent interface for data access:** Regardless of where the data is stored or how database operations are implemented, the application always interacts with a repository through a consistent interface.

A potential disadvantage of the repository pattern is that it can add an additional layer of complexity to your code. However, in many cases, the benefits of separation of concerns, improved testing, and consistency in data access can outweigh this cost.

It's important to note that while the repository pattern can be very useful, it's not necessarily the best choice for every situation. As with all design patterns, it's important to carefully consider your needs and the features of your application before deciding to use it.

### How do you implement the repository pattern with Modyo?

The repository pattern in Modyo can be applied to both micro frontends and microservices. This is done by implementing intermediate repositories through [Modyo Connect] (/es/connect). From these repositories, you can generate versioned components that are available in an artifact registration system. From there, they can be invoked as needed in different contexts.

To do this, Modyo Connect uses [GitHub Enterprise] technology (https://github.com), on which you have access to three fundamental components to activate this pattern:
- Repository where the library is stored and versioned, with [GitHub Repositories](https://github.com/features)
- Workflow automation system, with [GitHub Actions](https://github.com/features/actions)
- System for publishing artifacts for distribution, with [GitHub Registry](https://github.com/features/packages)

The last one is particularly important, since from it the other projects will have access to the libraries that make up the pattern, being able to obtain reusable code under a versioning scheme that allows improvements to be obtained in the most controlled way possible.

:::tip Semantic Versioning
Managing intermediate libraries in a central way will require the application of some criteria to label the versions that will be generated. Modyo recommends the use of [semantic versioning](https://semver.org/).
::: 
