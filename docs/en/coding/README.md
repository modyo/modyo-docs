---
search: false
---

# Development Standard

## Intent
The main purpose of the development standard is to ensure that all code has been designed, written and deployed following cross-cutting conventions that facilitate collaboration between developers, allowing them to interact in different projects without having to decipher particular styles and practices on each occasion.

The standard is about uniformity and consistency, not about which practice is better than another. The standard should serve as a supporting guide for the joint code review process. The standard must also be clear and avoid confusion, the idea is not to leave the rules to the free interpretation of each one, but on the contrary, the idea is to be aligned in common practices.

### Does the standard only apply to working with Ruby or Java?
Not for nothing! The standard applies to all the code we produce, be it backend, frontend, product, service, middleware, automations, firmware, etc. (no, we don't do firmware yet, but it would apply the same). All the software we produce as a team must respect these guides.

Throughout this standard, you will find general rules and other particular rules, depending on how they are applied and where it is justified to make a differentiation.

### How can I contribute?
The standard is periodically reviewed. Adjustments and changes are always welcome, and when made, they are sought to be adopted quickly and transversely. That is why these changes must be applied methodically, in specific periods that ensure the focus and appropriate participation of all stakeholders.

The idea is to encourage healthy debate, seek consensus and learn from the experience of the most experienced developers, in order to propose justifiable improvements that add value to different work teams. The dogmatic fights like “Tangananica, Tanganana” are out of the discussion.

## General Principles
- The best architectures are those that allow change. It is better a bad software with a good architecture than good software with a poor one. Why? Because good architectures can always be arranged. (Uncle Bob, Clean Architecture)
- Avoid duplicating functionality that is already available in a library
- A good copy & paste is sometimes better than a bad refactoring
- KISS: “Keep It Stupid Simple” (or “Keep It Simple, Stupid!”). We avoid overengineering where there is no need. Pragmatism.
- Be humble, don't feel a prodigy of the code
- Divide your big tasks into smaller tasks
- Keep your methods and classes small, and with one responsibility. If you have many conditions in one method, divide it into smaller methods. Not only will this make the code easier to read, but also easier to debugging
- First solve the problem, then you code it and not backwards
- Don't be afraid to erase your code. Refactoring and recoding are two very important things


### Do not allow faults to be silent
Don't write code that guesses the future. Avoid the “just in case in the future someone asks...” Avoid coupling codes between different modules. Avoid cross importing Unstable things depend on stable things. Not upside down! If we depend on something unstable (“commons” library in development) the whole project will become unstable As detailed as a standard is made, you'll always see yourself implementing complex things that aren't covered here. Learn patterns and design archetypes, most of the problems someone in the past solved them. Learn how to combine specific patterns with globals used in a cross-cutting way Indispensable references:


### Clean Code
### Clean Architecture
### The Pragmatic Programmer

### Java, JavaScript, VueJS, ReactJS, Ruby, NodeJS*

### Coding Style

### Directory Structure/Project

Name Conventions How variables, methods, classes, and interfaces are named. Which notation will be used.

### Indentation
How the code will be tabulated. Example: Use of tabs or 4 spaces.

### Code Layout
Style of use for brackets and line breaks. Location of models, drivers, interfaces, documentation, testing, etc. Size of methods, class size.

### Exception Handling
Declare where error or exception codes are expected and why.

### Logs Management
Declare that it should go and not, must be correlated with how logs are added and inspected.

### Comments
What is documented, in which places, at the beginning or inline, with what notation.

### Exposure
What level of exposure are the methods working with. They should always have as little degree of exposure as possible, etc. Internal methods declared private.


### Code Repository
Structure of branches

### Rules for mixing code

### Test Coverage Enforcement


## Architecture
### Frameworks
Accepted versions of the framework, templates

### Web & APIs
Use UTF8 only Use HTTPS only in production Use HTTP2. Learn what it involves.

Spring Boot


NodeJS


Javascript/VueJS Avoid latencies caused by the blocking Javascript

HTML

CSS

Liquid


Build


Testing Do not haggis testing private methods Use intermediary assertions throughout the test. This will make it possible to identify the points of failure faster. Perform unit and integration tests Ensure to check coverage measurements, they must always be greater than 90%.

Persistence Objectual

Relational

Working with Files If you open it, you close it. If you don't close it, make sure someone does it for you.



Integration SOAP

Rest

External Database


Configuration When property files are used, by default, by environment. Environment variables or command-line initializers, etc. Object Orientation Avoid global variables and long parameter lists Limit the dependencies of an object (entities on which an object depends) Prefer composition rather than heredity Small classes with a unique and well-defined purpose Say it, don't ask. https://thoughtbot.com/blog/tell-dont-ask Security Secret Management

Management of environment variables



Deployment Dockerfile

Virtual Machine Parametry

Continuing Integration

Artifact Repositories

Observability Implementation of metrics



