# d2d-cure


  
## Developer Guidelines

### 1. Creating a new Branch
To ensure you are consistently creating a new branch with the latest version of the dev branch, execute the following commands:
- Copy the entire dev branch from the GitHub repository to a new local branch
```git branch local-branch origin/dev```
- Switch to the newly created local branch
```git checkout local-branch```
Now, you can proceed to work on your task on this branch. 

- Additionally, it's advisable to run the following command each time you create a new branch:
```npm install```
This ensures that your local environment is up to date with the dependencies required for your project.

### 2. Naming the branch
Ensure frequent commits (Suggestion - after finishing for the day or every hour).

- As a rule, adhere to kebab case when naming branches, using the **[TICKET NUMBER]-descriptive-title** format. For instance, if the Jira task is "D2D-8," the branch should be named as [8]-descriptive-title.

### 3. Creating Pull requests
Use the provided pull request template to follow standard procedures when approaching pull requests.
    
    ## **Jira Issue ticket number and link**
    
    ## **Type of change**
    
    Please delete options that are not relevant.
    
    - [ ] Bug fix (non-breaking change which fixes an issue)
    - [ ] New feature (non-breaking change that adds functionality)
    - [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
    - [ ] This change requires a documentation update
    
    ## **Detailed Description**
    Enter the purpose here
    
    ## **Attach any relevant Screenshots of Before -> After**
    Attach here
    
    ## **Checklist before requesting a review**- [ ] I have performed a self-review of my code
    - [ ] I have commented my code, particularly in hard-to-understand areas
    - [ ] My changes generate no new warnings
    - [ ] I have added tests that prove my fix is effective or that my feature works
    - [ ] I need to delete the branch once I get the PR approved if a feature is done
    - [ ] I will include relevant pictures to better understand the PR
    
    
- Include three main components in every pull request:
    - **Ticket** - link to the Jira ticket for reference
    - **Purpose** - outline the goals the PR achieves and how
    - **Screenshots** - Images of the changes or screenshots of the code editor for structural changes

### 4. Approving Pull Requests
- When possible, all developers should approve.
    - Read the code and offer suggestions.
    - Don't overly stress about addressing comments unless they're crucial or time permits.
- Once all developers have approved, the author of the PR will be asked to merge it.
- **Delete all merged branches.**
    - This simplifies the review of merged PRs for unaddressed changes later on.
