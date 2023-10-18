# GitHub Commit History Viewer
Welcome to the GitHub Commit History Viewer! Explore Git commit history effortlessly with this GitHub Commit Viewer. See project changes and commit details in a user-friendly interface.
## Try the app
[Demo](https://github-commit-history-viewer-218fkzhht-fenriuz.vercel.app/)
## Instructions to run the project
### Setup
Setup `.env` file:

1.  Start by copying the variables from the `sample.env` file provided in the project's root directory.
    
2.  Create a new file named `.env` in the same directory as the `sample.env` file.
    
3.  Paste the copied variables into the newly created `.env` file. Then, edit the values as needed to match your development environment.

Install  [Docker](https://www.docker.com/) or [Node](https://nodejs.org/) V.18 to continue with the next steps

### Using Docker (recommended)
The command runs both applications (Frontend App and API) 

    $ docker compose up

### Using node
First install the node modules

    $ npm install

Nx has different commands to run only one app or run both apps (Frontend App and API) together.

#### Run both apps
to run both projects with the same command use this

    $ npx nx run-many --target=serve --all 

#### Run separately

Run only API

    $ npx nx serve github-commit-history-viewer-api
Run only Frontend APP

    $ npx nx serve github-commit-history-viewer-app
### Test the apps locally
After run the projects, open these links
Frontend APP: http://localhost:4200/
Backend API: http://localhost:3000/
### Nx
This project was made with [Nx](https://nx.dev)
#### What is Nx?
Nx is a modern development tool that offer a unified workspace where you can efficiently organize and develop both the frontend and backend components of your application. Nx simplifies the management of dependencies, testing, and project structure, making it an ideal choice for complex projects where scalability and maintainability are critical. It provides features like code generation, advanced linting, and optimized build and test processes, ensuring a smooth development experience.

#### Why Nx for This Project?
With Nx I can share the types between Backend and Frontend, reducing code repetition and an easy way to update my types in both apps at the same time.
Nx's ability to enforce best practices in code isolation and modularization simplifies future feature additions and codebase maintenance.

For this project I create only one library for types, but following best practices I should have more libraries, but for the purposes of this project (in case you haven't worked with Nx before) I tried to keep everything about the apps inside their respective folder