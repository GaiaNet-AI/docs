---
sidebar_position: 5
---

# Knowledge base from a URL

In this section, we will discuss how to create a vector collection snapshot from a Web URL. First, we will parse url to a structured markdown file. Then, we will follow the steps from [Knowledge base from a markdown file](markdown.md) to create embedding for your URL.

## Parse the URL content to a markdown file

Firecrawl can crawl and convert any website into LLM-ready markdown or structured data. It also supports crawling a URL and all accessible subpages.

> To use Firecrawl, you need to sign up on [Firecrawl](https://firecrawl.dev/) and get an API key.

First, install the dependencies. We are assuming that you already have Node.JS 20+ installed.

```
git clone https://github.com/JYC0413/firecrawl-integration.git
cd firecrawl-integration
npm install
```

Then, export the API key in the terminal.

```
export FIRECRAWL_KEY="your_api_key_here"
```

next, we can use the following command line to run the service.

```
node crawlWebToMd.js
```

After the application is running successfully, you will see the prompt appear on the Terminal.

![](fiecrawl-01.png)

You can type your URL in the terminal right now. Here we have two choices.

* Multiple pages: input your link with `/` at the end, the program will crawl and convert the page and its subpages to one single markdown file. This way will cost lots of API token usage.
* One single page:  input your link without `/` at the end. the program will crawl and convert the current page to one single markdown file.

The output markdown file will be located in this folder named `output.md`. 

## Create embeddings from the markdown files

Please follow the tutorial [Knowledge base from a markdown file](markdown.md) to convert your markdown file to a snapshot of embeddings that can be imported into a GaiaNet node.
