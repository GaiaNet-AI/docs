---
sidebar_position: 8
---

# StoryWeaver AI

StoryWeaver AI is your creative co-pilot, helping you transform fledgling ideas into fully-formed stories. Generate unique characters, sculpt immersive worlds, and weave compelling plots with our intelligent storycrafting assistant. Built with Next.js, Tailwind CSS, shadcn/ui, and powered by Gaia's LLM API.

![image](https://github.com/user-attachments/assets/7a32a9ad-9e5a-496e-a2e0-e8676995feac)

:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/story-weaver).

:::

## Features

*   **Idea to Story:** Input your core story idea, genre, desired length, and optional details like protagonist, conflict, world vibe, and tone.
*   **AI-Powered Generation:** Leverages a Large Language Model (via Gaia's OpenAI-compatible API) to craft unique stories.
*   **Markdown Support:** Displays generated stories with rich text formatting.
*   **Download as Image:** Save your favorite stories as PNG images.
*   **Social Sharing:** Quickly share links to your app (users can attach their downloaded story image) on X (Twitter), LinkedIn, and Facebook.
*   **Sleek UI:** Modern and responsive interface built with shadcn/ui and Tailwind CSS.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Form Management:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
*   **LLM Integration:** `openai` npm package configured for [Gaia's API](https://docs.gaianet.ai)
*   **Markdown Rendering:** `react-markdown`
*   **HTML to Image:** `dom-to-image-more`
*   **Icons:** `lucide-react`

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18.x or later recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
*   A Gaia API Key ([Get one here](https://docs.gaianet.ai/getting-started/authentication))

### Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/harishkotra/story-weaver-ai.git
    cd story-weaver-ai
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root of the project. This file is ignored by Git and is used for local environment configuration.
    ```bash
    cp .env.example .env.local
    ```
    Now, open `.env.local` and add your API key:

    ```env
    # .env.local

    # Required: Your API Key for the Gaia LLM service (or other OpenAI-compatible API)
    GAIA_API_KEY="your_actual_gaia_api_key_here"

    # Optional: If Gaia changes their endpoint or you use a different compatible service
    # Default is 'https://llama70b.gaia.domains/v1' if not set
    GAIA_API_ENDPOINT="https://your-custom-openai-compatible-endpoint/v1"
    GAIA_API_MODEL="llama70b"
    ```
    **Important:** Replace `"your_actual_gaia_api_key_here"` with your real API key. ([Get one here](https://docs.gaianet.ai/getting-started/authentication))

4.  **Initialize shadcn/ui (if you need to add more components):**
    While the project is set up, if you intend to add more shadcn/ui components later, you might need to run init (though it should be configured already):
    ```bash
    npx shadcn@latest init
    ```
    Follow the prompts, accepting the defaults or aligning with existing project configuration (`src/app/globals.css`, `tailwind.config.ts`, aliases `@/components` and `@/lib/utils`).

### Running the Application Locally

1.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  **Open your browser:**
    Navigate to `http://localhost:3000`.

You should now see the StoryWeaver AI application running!


:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/story-weaver).

:::