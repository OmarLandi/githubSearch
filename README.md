# GitHubSearch

Proyect to search Users and Repositories on GitHub.

## To start de project

1. Copy .env file:

  ```bash
  $ cp .env.edit .env
  ```

  Geneate token in GitHub:
  https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

2. Start de project:
  ```bash
  $ npm start
  ```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


----------------------------------
## Tree structure

  - common -> Group elements to reuse
  - common/assets  -> Resources like font, images or other static files
  - common/components  -> Basic component without project logic
  - common/constants  -> Static and constants element
  - common/conteiners  -> Advance componet with project logic
  - config  -> Configurations files
  - pages -> All pages relationship with routes
  - redux -> Redux store
  - services -> Api Services conection
  - utils -> Global functions.
