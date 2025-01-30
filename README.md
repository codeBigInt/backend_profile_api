# Backend Stage 0 Task - Public API to Retrieve Basic Information

## Project Description
This is a simple backend API developed as part of the HNG12 internship Stage 0 task. The API serves the following information  when a fetch request is made to `/fetch-data` in JSON format:

- **My registered email address** (used for HNG12 Slack workspace).
- **The current date and time** in ISO 8601 format (UTC).
- **The GitHub URL** of the project's codebase.

The goal of this API is to demonstrate the ability to build a simple REST API with the required functionalities.

## API Specification

### Endpoints

- **GET** `/`

### Response Format (200 OK) for GET: /fetch-data
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

### Fields:
- **email**: Your registered email address used for the HNG12 Slack workspace.
- **current_datetime**: The current date and time in ISO 8601 format (UTC).
- **github_url**: The URL to the GitHub repository containing this project.

### Example Response
```json
{
  "email": "john.doe@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/johndoe/hng12-backend-api"
}
```

## Features
- **GET Request**: The API supports a `GET` request to a `/` to fetch the required information.
- **CORS Support**: The API handles Cross-Origin Resource Sharing (CORS) appropriately to allow access from any origin.
- **ISO 8601 Datetime Format**: The `current_datetime` field is dynamically generated and returned in ISO 8601 format (UTC).

## Technologies Used
- **Programming Language**: JavaScript (Node.js)
- **Framework**: Express.js (for API routing)
- **Deployment**: The API is hosted on a publicly accessible endpoint via Vercel.
  
## Setup Instructions

### Prerequisites:
Ensure you have the following installed:
- [Node.js](https://nodejs.org) (version 14 or above)
- [npm](https://www.npmjs.com/)

### Clone the Repository
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/codeBigInt/backend_profile_api.git
    ```
2. Navigate to the project folder:
    ```bash
    cd your-repo
    ```

### Install Dependencies
3. Install the required dependencies:
    ```bash
    npm install
    ```

### Run the API Locally
4. Start the API server:
    ```bash
    npm start
    ```
5. The server will be running locally at `http://localhost:3000`. You can test it by sending a `GET` request to `http://localhost:3000/`.

### Deployment
To deploy the API, follow the instructions for your chosen hosting platform (e.g., Heroku, Vercel). Once deployed, the API will be publicly accessible at the provided URL.

## Example Usage

### Request:
```bash
curl -X GET https://your-deployed-api-url.com/
```

### Response:
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## Code Quality
- The project follows best practices for code organization and structure.
- The code is modular, well-commented, and easy to extend.
  
## Backlink
For more information on backend development, you can visit the following page based on your chosen stack:
- [Node.js Developers](https://hng.tech/hire/nodejs-developers)


