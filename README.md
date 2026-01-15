# Instagram Page - CI/CD Pipeline with Jenkins and Docker

This repository contains a sample Instagram Page project with an automated CI/CD pipeline configured using Jenkins and Docker.


## Project Overview

The project demonstrates how to set up a Jenkins pipeline to automate the build, test, and deployment of a web application using Docker containers.


## Features

- Automated build and deployment on every code commit
- Uses Jenkins pipeline (defined in `Jenkinsfile`)
- Dockerized application for consistent environment and easy deployment
- Stops previous Docker container and runs a fresh one on each deployment
- Exposes the app on port 3000 (default React app port)


## Jenkins Pipeline (`Jenkinsfile`)

The Jenkins pipeline performs the following steps:

1. **Checkout**: Clones the repository code.
2. **Install Dependencies**: Runs `npm install` to install all dependencies.
3. **Build**: Builds the React app using `npm run build`.
4. **Docker Build & Deploy**:
   - Builds a Docker image for the app.
   - Stops and removes any existing container named `instagram-app`.
   - Runs the new Docker container, exposing it on port 3000.


## Dockerfile

The Dockerfile builds a Docker image for the React app:

- Starts from the official Node.js 18 image.
- Installs dependencies.
- Builds the app.
- Uses `serve` to serve the production build on port 3000.


## How to Use

1. **Set up Jenkins**:
   - Install Jenkins and Docker on your build server.
   - Create a new pipeline job.
   - Configure the pipeline with:
     - Repository URL: `https://github.com/prem9900/instagramPage.git`
     - Branch Specifier: `*/instagram-page`
     - Script Path: `Jenkinsfile`

2. **Run Pipeline**:
   - Trigger the pipeline manually or configure webhooks to trigger on git commits.
   - Jenkins will clone the repo, build the app, create a Docker image, and run it.

3. **Access Application**:
   - Open your server’s IP on port `3000` in a browser to see the running app.


## Prerequisites

- Jenkins installed with permissions to run Docker commands.
- Docker installed and running on the Jenkins server.
- Node.js and npm installed locally if you want to run or test the app outside Docker.


## Troubleshooting

- Make sure Jenkins user has permission to run Docker commands.
- Check Jenkins logs for errors during build or deploy stages.
- Verify that port 3000 is free on the server before starting the container.




