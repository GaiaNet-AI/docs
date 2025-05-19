---
sidebar_position: 4
---

# Notion Gaia Assistant

👋 This is a Chrome extension that brings the power of Gaia AI nodes right into your Notion pages. Think of it as your personal AI assistant that sits quietly in the corner of your Notion workspace, ready to help whenever you need it.

![image](https://github.com/user-attachments/assets/5b60a516-46e2-4a22-a54f-f66bad3fbeaa)
![image](https://github.com/user-attachments/assets/c3e63a49-85dd-4186-9d88-1ce7a53a89c3)
![image](https://github.com/user-attachments/assets/7e55ef86-6c4e-49cd-a043-b360d6fc8bf8)
![image](https://github.com/user-attachments/assets/2e77def1-2a39-4729-a005-9c82cba9ef32)
![image](https://github.com/user-attachments/assets/ae1d2161-07fc-4613-8edc-91a984adb834)


:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/gaia-notion-chrome-extension).

:::


### For Node Builders
If you build and run nodes of Gaia, then this is a fantastic way to showcase your work! Your node can now directly help people with their Notion documents. It's almost like giving your AI a job as a personal assistant in Notion. Because the extension works with any OpenAI-compatible endpoint, your node can plug right in.

### For Notion Users
Imagine having a smart assistant that can:
- Summarize your long Notion pages with one click
- Suggest improvements to your documents
- Help you research related topics
- Answer specific questions about your page content

And the best part? You can choose which Gaia node to connect to. Maybe you want one that's great at academic writing, or another that's fantastic at creative suggestions - it's totally up to you!

## Getting Started

1. Install the extension from Chrome Web Store (coming soon!)
2. Click the extension icon in your browser
3. Add your preferred Gaia node URL - it should look something like `https://YOUR_NODE_ID.gaia.domains/v1`
4. Go to any Notion page
5. Locate the tiny floating button at the bottom right - that's your new AI assistant!

## Features

- 🎯 **Page Summaries**: Get quick summaries of any Notion page
- 💡 **Smart Suggestions**: Get ideas on how to improve your content
- 🔍 **Research Helper**: Discover related topics to explore
- 💬 **Ask Questions**: Chat with the AI about anything on your page
- 🎨 **Clean Interface**: Everything fits nicely into Notion's design

## Setting Up Your Own Node

If you're running a Gaia node and want to use it with this extension:
1. Make sure your node is publicly accessible
2. Copy your node's URL (the `/v1` endpoint)
3. Paste it into the extension's settings
4. That's it! Your node is now powering the Notion assistant

## Prerequisites

You'll need:
- Google Chrome browser
- A code editor (like Visual Studio Code)
- Basic familiarity with Chrome's developer mode

## Steps to Install

1. **Get the Code**
  ```
  # Clone this repository
  git clone https://github.com/harishkotra/gaia-notion-chrome-extension
  cd gaia-notion-chrome-extension
  ```

2. Open Chrome Extensions Page
- Open Google Chrome
- Type `chrome://extensions` in the address bar
- Or navigate through: Menu (⋮) > More Tools > Extensions

3. Enable Developer Mode
- Look for the "Developer mode" toggle in the top-right corner
- Switch it on - you'll see new options appear at the top

4. Load the Extension
- Click the "Load unpacked" button that appears after enabling Developer mode
- Navigate to the folder where you cloned this repository
- Select the folder and click "Open"
- You should see the extension appear in your list of installed extensions!

### Testing the Extension

1. Check Installation
- Look for the extension icon in Chrome's toolbar
- If you don't see it, click the puzzle piece icon to find it in the extensions menu

2. Set Up a Gaia Node
- Click the extension icon
- Add your Gaia node URL in the settings
- The URL should end with `/v1` (like `https://YOUR_NODE_ID.gaia.domains/v1`)

3. Try It Out
- Go to any Notion page
- You should see a small floating button in the bottom-right corner
- Click it to start using the assistant!


:::info

The complete source code and detailed instructions for setting up and running this example can be found in the [Gaia Cookbook repository](https://github.com/GaiaNet-AI/gaia-cookbook/tree/main/js/gaia-notion-chrome-extension).

:::
