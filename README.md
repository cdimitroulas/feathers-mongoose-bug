# feathers-mongoose-bug

> Repo to recreate a bug that can happen in feathers-mongoose

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Make sure you have mongodb running locally (the host url is set to mongodb:://localhost:27017/feathers_mongoose_bug)
3. Install your dependencies

    ```
    cd path/to/feathers-mongoose-bug; npm install
    ```

4. Start your app

    ```
    npm start
    ```

5. Send a request using Postman to http://localhost:3050/skills with raw JSON and the following body
    ```
    []
    ```
