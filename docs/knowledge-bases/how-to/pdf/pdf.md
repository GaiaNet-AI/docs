---
sidebar_position: 11
---

# Knowledge base from a PDF file

In this section, we will discuss how to create a vector collection snapshot from a PDF file. First, we will parse the unstructured PDF file to a structured markdown file. Then, we will follow the steps from [Knowledge base from a markdown file](/docs/knowledge-bases/how-to/markdown/markdown.md) to create embedding for your PDF files.

## Tools to convert a PDF file to a markdown file

### Tool #1: LlamaParse

LlamaParse is a tool to parse files for optimal RAG. You will need a LlamaCloud key from https://cloud.llamaindex.ai.

First, install the dependencies. we are assuming that you already have Node.JS 20+ installed.

```
git clone https://github.com/alabulei1/llamaparse-integration.git
cd llamaparse-integration
npm install llamaindex
npm install dotenv
```

Then, edit the `.env` file to set up the PDF file path and LlamaCloud Key. In this case, you don't need to care about the LLM-related settings.

After that, run the following command line to parse your pdf into a markdown file.

```
npx tsx transMd.ts
```

The output markdown file will be located in this folder named `output.md` by default. You can change the path in the `.env `file.


### Tool #2: GPTPDF

GPTPDF is an open-source tool using GPT-4o to parse PDF into markdown. You will need an OpenAI key here.

First, install the gptpdf software.

```
pip install gptpdf
```

Then, enter the Python environment.

```
python
```

Next, use the following command to parse your pdf.

```
from gptpdf import parse_pdf
api_key = 'Your OpenAI API Key'
content, image_paths = parse_pdf(Your_Pdf_Path, api_key=api_key)
print(content)
```

The output markdown files called `output.md` will be located in your root directory.

## Create embeddings from the markdown files

Please follow the tutorial [Knowledge base from a markdown file](/docs/knowledge-bases/how-to/markdown/markdown.md) to convert your markdown file to a snapshot of embeddings that can be imported into a GaiaNet node.
