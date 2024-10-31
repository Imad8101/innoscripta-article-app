# Vite React App

This is a React app built with Vite and designed to be run within a Docker container. Follow these steps to build and start the project.

## Prerequisites

Make sure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/Imad8101/innoscripta-article-app.git
cd your-repo
```

# complete steps to dockerize your Vite React application:

## Create the below three files in your project root:

- Dockerfile
- nginx.conf
- .dockerignore

Make sure your vite.config.js has the correct host setting

## Build the image

docker build -t vite-react-app .

## Run the container

docker run -p 8080:80 vite-react-app

After these steps, your app will be available at http://localhost:8080.
