# Task

Create the application which communicates with the server in real-time using WebSocket protocol.
The server sends to the client a random number every 2 seconds.
The app should have at least one screen with chart. The chart should display received data in real-time dynamically.

##### Requirements:

1. Please use react hooks.
2. Please use [redux](https://redux.js.org/) to manage your application state.
3. Create a public repository on GitHub and push your project there.
4. Write a `README` file and describe how to run your project.

Additional:

- You're free to choose the way to manage your app state
- You're free to use any chart library you want
- You're free to use any styling and UI Kit you want.
- :star: (Optional) - Make your app responsive for different screen sizes
- :star: (Optional) - Cover your code with unit tests

## Setup

1. Clone the repository
2. You need [Node.js](https://nodejs.org/en/) to be installed on your machine
3. Install dependencies with `npm i` / `yarn`

## Run locally

1. Run `npm run dev`
2. Now the server is listening on port `8080`
3. Listen to the message from the server
4. The payload format is `{date: number, value: number}`
