---
sidebar_position: 9
---

# Natural Language Weather App

This simple web application allows you to check the current weather or forecast for a location using natural language queries (e.g., "Forecast for Tokyo", "Is it raining in Seattle?").

It leverages the **Gaia Language Model** (via an OpenAI compatible endpoint) to understand your request and the **Nubila Weather API** to fetch the actual weather data.

![image](https://github.com/user-attachments/assets/ec83b1fc-5749-43de-ba9d-093bd315d54e)

![image](https://github.com/user-attachments/assets/246d6358-1d48-4c70-a7ed-1c051ea767b4)

:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/gaia-nubila).

:::

## Features

*   Get current weather or forecasts using plain English.
*   Uses Gaia LLM to interpret the location and desired information (current/forecast) from your query.
*   Fetches detailed weather data from the Nubila API.
*   Displays the LLM's interpretation (location, coordinates, request type).
*   **Illustrates** the concept of an LLM "tool call" by showing which function and arguments the LLM conceptually decided to use.
*   Provides clickable example prompts for quick use.
*   Simple, clean UI built with vanilla JavaScript, Node.js, and CSS.

## How it Works

1.  **User Query:** You enter a query like "What's the weather like in Berlin?" into the web interface.
2.  **Backend Request:** The query is sent from your browser to the Node.js backend server.
3.  **LLM Analysis (Gaia):** The backend sends your query to the Gaia API. Gaia analyzes it to:
    *   Identify the location (e.g., "Berlin").
    *   Determine approximate geographical coordinates (latitude and longitude).
    *   Understand if you want the 'current' weather or a 'forecast'.
4.  **API Call (Nubila):** The backend uses the coordinates and the request type ('current' or 'forecast') identified by Gaia to make a request to the appropriate Nubila Weather API endpoint.
5.  **Weather Data:** The Nubila API responds with the requested weather data.
6.  **Frontend Display:** The backend sends both Gaia's analysis and Nubila's weather data back to your browser. The frontend then displays:
    *   How Gaia interpreted your request.
    *   A simulation of the "tool call" Gaia would make.
    *   The formatted current weather or forecast details.

## Prerequisites

*   **Node.js and npm:** Download and install from [nodejs.org](https://nodejs.org/).
*   **Nubila API Key:** You need an API key from Nubila Weather API. [Sign up](https://nubila.ai/) or [log in](https://nubila.ai/) here to obtain one.

## Setup & Installation

1.  **Clone the repository (or download the files):**
    ```bash
    git clone <repository-url>
    cd <repository-folder-name>
    ```
    (Replace `<repository-url>` and `<repository-folder-name>` accordingly)

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    This installs Express, node-fetch, dotenv, and cors.

## Configuration

1.  **Create `.env` file:** In the root directory of the project, create a file named `.env`.

2.  **Add API Key and Settings:** Open the `.env` file and add the following lines, replacing `YOUR_NUBILA_API_KEY_HERE` with your actual Nubila API key:
    ```dotenv
    NUBILA_API_KEY=YOUR_NUBILA_API_KEY_HERE
    GAIA_API_ENDPOINT=https://llama70b.gaia.domains/v1/chat/completions
    GAIA_API_KEY=your-gaia-api-key
    PORT=3000
    ```
    *   `NUBILA_API_KEY`: Your secret key for the Nubila API.
    *   `GAIA_API_ENDPOINT`: The endpoint for the Gaia LLM.
    *   `GAIA_API_KEY`: Get your Gaia API key by following this tutorial: https://docs.gaianet.ai/getting-started/authentication
    *   `PORT`: The port the local server will run on (default is 3000).

3.  **Important:** The `.env` file contains sensitive information (your API key). Ensure it is listed in your `.gitignore` file (it should be by default if you cloned) so you don't accidentally commit it to version control.

## Running the Application

1.  **Start the server:**
    ```bash
    node server.js
    ```

2.  **Open the app:** Open your web browser and navigate to:
    `http://localhost:3000` (or `http://localhost:YOUR_PORT` if you changed the `PORT` in `.env`).

3.  Enter your weather query or click one of the suggestion buttons!

## Technology Stack

*   **Backend:** Node.js, Express.js
*   **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3
*   **APIs:**
    *   Gaia API (via OpenAI compatible endpoint) for Natural Language Understanding
    *   [Nubila Weather API](https://nubila.ai/) for weather data

:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/gaia-nubila).

:::