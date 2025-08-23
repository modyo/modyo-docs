---
search: true
---

# Continuous Integration

Continuous integration automates common processes in the software development cycle, such as code inspection, dependency review, artifact packaging, and deployments. For this, Modyo leverages the continuous integration systems of GitHub Enterprise and Amazon.
All activities related to the development cycle (inspections, reviews, generation of intermediary artifacts) and [micro frontend](/en/architecture/patterns/micro-frontend.html) automations (e.g., deployment to the Modyo platform using the Modyo CLI) are performed in GitHub Actions.

Activities related to the generation of container-based artifacts and their deployments to AWS ECS are performed using AWS CodePipeline.


:::warning Important
AWS CodePipeline-based integrations will be migrated to GitHub Actions during the first half of 2026.
:::

## Steps to Activate
Create a ticket in the [Modyo Support Center](https://support.modyo.com) to activate Continuous Integration on a [repository](code-repository.html), stating:
- Code repository on which to run the automation.
- Type of automation to implement.
- Specific instructions for the implementation of the automation (e.g., compilation script, special parameters).