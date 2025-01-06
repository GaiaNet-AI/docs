---
sidebar_position: 103
---

# Translation Agent + Gaia

The Translation Agent originally built by Prof. Andrew Ng, designed to facilitate accurate and efficient translation across multiple languages. It employs open source LLMs (Large Language Models) to provide high-quality translations. You can use any Gaia node as the LLM backend. 

>For commands on starting and running this agent, refer to [GitHub - Second State/translation-agent](https://github.com/second-state/translation-agent/blob/use_llamaedge/step-by-step-use-LocalAI.md).


You can run the Translation Agent on top of a public Gaia Node as a backend and then translate the content in your target language. If you’d like to learn more about the Translation Agent and how open source LLMs perform, check out the article [Agentic translation on Gaia](https://docs.gaianet.ai/tutorial/translator-agent).

## Prepare the environment

Here, we will use the public Gaia node with gemma-2-27b model.  `https://gemma.us.gaianet.network/`. 


>As an alternative, you can also start a Gaia node locally on your device. Refer to [this guide](https://github.com/GaiaNet-AI/node-configs/tree/main/gemma-2-27b-it).


To get started, clone the Translation Agent that supports open source LLMs.

```
git clone https://github.com/second-state/translation-agent.git
    
cd translation-agent
git checkout use_llamaedge
```

Set environment variables and install necessary Python packages if needed. Replace the OPENAI_BASE_URL with `https://gemma.us.gaianet.network/`

```
export OPENAI_BASE_URL="https://gemma.us.gaianet.network/v1"
export PYTHONPATH=${PWD}/src
export OPENAI_API_KEY="GAIANET"

pip install python-dotenv
pip install openai tiktoken icecream langchain_text_splitters
```

## Prepare your translation task

Find the `examples/sample-texts` folder in your cloned repo. Put the file you want to translate in this folder and get its path. Here because we named our [source text](https://hackmd.io/tdLiVR3TSc-8eVg_E-j9QA?view#Source-text-Intro-of-Forbidden-City) in Chinese `forbiddencity.txt` since it is an introduction on this Chinese royal palace, then note down its document path, `sample-texts/forbiddencity.txt`. This will be the `relative path` in our `example_script.py` file.

Find the `examples/example_script.py` file in your cloned agent repo and review its code. It tells the agent where to find your document and how to translate it. Change the relative path to the above. Change the model name to the one you are using; here, we're using the `gemma` model; also change the source and target languages you want (here we put `Chinese` as the source language and `English` as the target language).

```
import os  
import translation_agent as ta  
    
if __name__ == "__main__":
    source_lang, target_lang, country = "Chinese", "English", "Britain"
    
    relative_path = "sample-texts/forbiddencity.txt"
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    full_path = os.path.join(script_dir, relative_path)
    
    with open(full_path, encoding="utf-8") as file:
        source_text = file.read()
    
    print(f"Source text:\n\n{source_text}\n------------\n")
    
    translation = ta.translate(
            source_lang=source_lang,
            target_lang=target_lang,
            source_text=source_text,
            country=country,
            model="gemma",
    )
    
    print(f"Translation:\n\n{translation}")
```

## Translate

Run the python translation script as follows. 

```
cd examples    
python example_script.py
```


Wait a few minutes and [the English translation](https://hackmd.io/tdLiVR3TSc-8eVg_E-j9QA?view#English-Translation-by-gemma-2-27b) will appear on your terminal screen. 
