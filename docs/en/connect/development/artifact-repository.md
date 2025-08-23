---
search: true
---

# Artifact Repository

Artifact repositories provide a secure and accessible way to store software packages. They enable packages to be versioned and backed up, and serve as a single source for their distribution.

For intermediary libraries, used in the modularization of Java and JavaScript code, dependencies are consumed directly from the artifact repository.

Modyo implements artifact repositories within its GitHub Enterprise and in the client's Amazon AWS account. For intermediary repositories (e.g., Java or JavaScript libraries), GitHub Registry is used. For container repositories deployed in the Amazon cloud, AWS Elastic Container Registry is used.


## Steps to Activate
Create a requirement ticket in the [Modyo Support Center](https://support.modyo.com) stating:
- Name of the artifact repository.
- Type of artifact repository: NPM or Maven library.
- Purpose of the artifact repository.