---
sidebar_position: 3
---

# Gaia Chatbot Widget

## Overview

This gaia chatbot widget is a lightweight, customizable solution for embedding an AI-powered chat interface into any web page. It provides an interactive way for users to engage with your AI assistant, enhancing user experience and providing instant support or information.

![image](https://github.com/user-attachments/assets/f4b8ef6f-1ba0-4671-8f50-af7b7235cb2a)
![image](https://github.com/user-attachments/assets/5aff9649-43d8-4d85-ab42-72ae9229ff70)
![image](https://github.com/user-attachments/assets/80fad06f-c95b-492e-bcf7-130a9f09a06d)
![image](https://github.com/user-attachments/assets/e47d21ff-df33-4b13-b4f1-491041a71972)

:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/embeddadble-chatbot-ui).

:::

## Features

- Easy to embed in any HTML page
- Customizable appearance to match your website's design
- Supports markdown and code formatting in responses
- Responsive design for desktop and mobile devices
- Configurable chatbot behavior and appearance

## Installation

1. Include the chatbot script in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/harishkotra/embeddadble-chatbot-ui@refs/heads/main/chatbot-widget.js"></script>
```

2. Add the configuration object to your page:

```html
<script>
    window.CHATBOT_CONFIG = {
        apiKey: "YOUR_API_KEY",
        apiUrl: "https://YOUR_NODE_ID.gaia.domains/v1/chat/completions",
        botTitle: "AI Assistant",
        welcomeMessage: "Hello! How can I assist you today?",
        placeholderText: "Type your message here...",
        brandColor: "#000000",
        chatHeaderBackground: "#ffffff",
        chatHeaderTextColor: "#000000",
        chatBubbleBackgroundUser: "#000000",
        chatBubbleTextColorUser: "#ffffff",
        chatBubbleBackgroundBot: "#f2f2f2",
        chatBubbleTextColorBot: "#000000",
        systemMessage: "You are a helpful assistant.",
        maxResponseTokens: 1000,
        temperatureValue: 0.7,
        suggestedQuestions: [
            "What services do you offer?",
            "How can I contact support?",
            "Tell me about your company"
        ]
    };
</script>
```

3. The chatbot widget will automatically initialize and appear on your page.

## Configuration Options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `apiKey` | String | Your API key for authentication | Required |
| `apiUrl` | String | The endpoint URL for the chat completions API | Required |
| `botTitle` | String | The title displayed in the chat header | "AI Assistant" |
| `welcomeMessage` | String | The initial message displayed by the bot | "Hello! How can I assist you today?" |
| `placeholderText` | String | Placeholder text for the input field | "Type your message here..." |
| `brandColor` | String | Primary color for the chatbot (HEX) | "#000000" |
| `chatHeaderBackground` | String | Background color of the chat header (HEX) | "#ffffff" |
| `chatHeaderTextColor` | String | Text color of the chat header (HEX) | "#000000" |
| `chatBubbleBackgroundUser` | String | Background color of user message bubbles (HEX) | "#000000" |
| `chatBubbleTextColorUser` | String | Text color of user message bubbles (HEX) | "#ffffff" |
| `chatBubbleBackgroundBot` | String | Background color of bot message bubbles (HEX) | "#f2f2f2" |
| `chatBubbleTextColorBot` | String | Text color of bot message bubbles (HEX) | "#000000" |
| `systemMessage` | String | Initial system message to set the bot's behavior | "You are a helpful assistant." |
| `maxResponseTokens` | Number | Maximum number of tokens in the bot's response | 1000 |
| `temperatureValue` | Number | Randomness of the bot's responses (0-1) | 0.7 |
| `suggestedQuestions` | Array | List of suggested questions to display | [] |


## Browser Compatibility

This widget is compatible with modern browsers including Chrome, Firefox, Safari, and Edge. Internet Explorer is not supported.


:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/embeddadble-chatbot-ui).

:::