---
search: true
---

# Private Site
By private site we mean sites that require user authentication and that, unlike [public sites] (/es/architecture/patterns/public-site), act like a true Web application. A private site must offer relevant functionality to the user and keep track of what the user does on it, so that logging in through credentials or a possible installation on the device with [PWA] (/es/architecture/patterns/pwa) makes sense to him.

Some common examples of private sites could be:
- Digital banking application
- Financial platforms
- Digital wallet
- Digital onboarding
- E-commerce
- Online Health Platforms
- Reservation and appointment systems
- Corporate intranets

:: :tip Hybrid sites
Private sites are traditionally separated from public sites, in different systems that often don't even share anything in common. However, there are cases in which it is more appropriate to implement a combination of the two, with so-called [hybrid sites] (/es/architecture/patterns/hybrid-site).
:::

<!-- Hack to avoid this title to be displayed in the TOC element -->
 <h3> <a href="#¿como-implementar-sitios-privados-con-modyo" class="header-anchor"> # </a> How to implement private sites with Modyo? </h3> 

The implementation of private sites on Modyo is one of the most complete use cases that can be worked on the platform, which includes the toolbox for solving common tasks such as authenticating users using internal credentials or delegated to external identity systems, consuming APIs with user information from external systems, advanced Javascript components, [micro frontends] (/es/architecture/patterns/micro-frontend), [microservices] (/es/architecture/patterns/microservice), messaging, notifications, segmentation of pages and content according to the profile, among many others.

Below are the different features of Modyo that are important to understand when implementing private site initiatives.

[[toc]]

:: :tip Similarities with Public Sites
In working with private sites, we can find similarities that are shared with [public sites] (/en/architecture/patterns/public-site). The purpose of this guide is not to repeat them all, but rather to complement them in cases where the implementation is different.
:::


### User Management

#### User events

#### Forms

#### Messaging and notifications

#### Using page and content segmentation

### Structure and Modularity
#### Micro frontends and Microservices
The amount of functionality to be implemented within an application will depend on the business problem to be solved, which is why it is especially important to use techniques such as [Domain Driven Design (DDD)] (/es/architecture/patterns/ddd) in order to determine the best structure and separation of high-level modules such as pages and micro frontends.

#### Using Javascript Frameworks

#### Using Web Components



### Content and source code governance

#### Using previous environments
MFEs are synchronized between one environment and another
Development with physical environments
Physical environments are used
MFEs are not synchronized between one environment and another, so they must be deployed separately for each environment


#### Using Stages
In the case of the development of transactional sites with Micro Frontends in Modyo, the recommendation to use stages can be addressed as follows:

Development with virtual environments
Stages are used to represent different environments.

#### Using Design Systems


### Progressive Web Application (PWA)

