---
sidebar_position: 102
---

# CodeGPT

CodeGPT is a pair-programming partner for developers. It offers AI chat assistance, auto-completion, code explanation, error-checking, and much more. You can find the CodeGPT extension in VScode and Jetbrains. You can easily configure it to use Gaia nodes as LLM backends.

## Prerequisites

You will need a Gaia node ready to provide LLM services through a public URL. You can

* [run your own node](../../node-guide/quick-start.md)
* [use a public node](../nodes.md)

In this tutorial, we will use the public CodeStral nodes to power the CodeGPT plugin.

| Model type | API base URL | Model name |
|-----|--------|-----|
| Chat | https://codestral.us.gaianet.network/v1/v1/ | codestral |


> For some reason, CodeGPT requires the API endpoint to include an extra `v1/` at the end.

## Install CodeGPT

Download [the CodeGPT for VScode](https://marketplace.visualstudio.com/items?itemName=DanielSanMedium.dscodegpt&ssr=false#overview) and [Jetbrains](https://plugins.jetbrains.com/plugin/21056-codegpt). 

Once you install it successfully, you can find the plugin on the right sidebar. You don't need to sign up for an account here.

![](codegpt-01.png)

## Configure CodeGPT

Click the CODEGPT on the right sidebar and enter the settings page for CodeGPT. 

1. Go through the **Select Your AI** and choose the **Custom** PROVIDER. Copy and paste `codestral` into the MODEL field.

![](codegpt-02.png)

3. Click the Connect button to configure the model base url and API key. Again, note the extra `v1\` at the end of the URL. 

| Attribute | Value | 
|-----|--------|
| API endponit URL | https://codestral.us.gaianet.network/v1/v1/ |
| API Key | gaia |

![](codegpt-03.png)

Save the above settings.

## Use the plugin

You can summon the coding assistant using slash commands defined in the plugin. You can ask the coding assistant to fix bugs, explain codes, write documentation, refactor the docs, and create unit test cases for the specific code.

![](codegpt-04.png)


