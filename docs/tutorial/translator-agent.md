---
sidebar_position: 1
---

# Agentic translation on GaiaNet

Prof. Andrew Ng's [agentic translation](https://www.linkedin.com/posts/andrewyng_github-andrewyngtranslation-agent-activity-7206347897938866176-5tDJ/) is a great demonstration on how to cooridnate multiple LLM "agents" to work on a single task. It allows multiple smaller LLMs (like Llama-3 or Gemma-2) to work gether and produce better results than a single large LLM (like ChatGPT).

[GaiaNet](https://www.gaianet.ai/), with 2000+ nodes running all kind of finetuned LLms and knowledge bases, provides a huge opportunity for agentic apps to choose and use their own LLM backends.

## Introduction to the LLM Translation Agent

This LLM Translation Agent is designed to facilitate accurate and efficient translation across multiple languages. It employs open source LLMs (Large Language Models) to provide high-quality translations. You can use your own fine-tuned models or any LLMs on Hugging Face like Meta's Llama 3. 

> For detailed commands on starting and running this agent, please visit [GitHub - Second State/translation-agent](https://github.com/second-state/translation-agent/blob/use_llamaedge/step-by-step-use-LocalAI.md).

To get started, clone the Translation Agent.

```
git clone https://github.com/second-state/translation-agent.git
    
cd translation-agent
git checkout use_llamaedge
```

Next, we will install a local GaiaNet node, which provides the backend API services required by the agent. You can, of course, use [GaiaNet nodes from the community](https://docs.gaianet.ai/user-guide/nodes) if you do not want to start your own.

```
curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash
```

You will also need the following configurations and prerequisites to run the agent app. If you are using a public GaiaNet node instead of your local node, replace the `http://localhost:8080` with `https://node_id.us.gaianet.network`.

```
export OPENAI_BASE_URL="http://localhost:8080/v1"
export PYTHONPATH=${PWD}/src
export OPENAI_API_KEY="GAIANET"

pip install python-dotenv
pip install openai tiktoken icecream langchain_text_splitters
```

## Demo 1: Running Translation Agents with Llama-3-8B

First, let's run the translation agent with Meta AI's popular Llama-3 model. We select the smallest Llama-3 model (the 8b model) for this demo. The translation task is from Chinese to English. Our [source text](https://hackmd.io/tdLiVR3TSc-8eVg_E-j9QA?view#Source-text) is in Chinese, a brief intro to the ancient Chinese royal palace, the Forbidden City.

### Step 1.1: Run a Llama-3-8B GaiaNet node

Configure and download the model. Since the size of the model is 5.73 GB. It can take a while to download.

```
gaianet init --config https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/llama-3-8b-instruct/config.json
```

Next, use the following command to start the GaiaNet node.

```
gaianet start
```

### Step 1.2 Run the Translation Agent on top of Llama-3-8B

Find the `examples/example_script.py` file in your cloned agent repo and review its code. It tells the agent where to find your document and how to translate it. Change the model name to the one you are using, here we’re using `Meta-Llama-3-8B-Instruct-Q5_K_M` model; also change the source and target languages you want (here we put `Chinese` as the source language and `English` as the target language). 
  
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
            model="Meta-Llama-3-8B-Instruct-Q5_K_M",
    )
    
    print(f"Translation:\n\n{translation}")
```

Then, you can find a `examples/sample-texts` folder in your cloned repo. Put your file you want to translate in this folder and get its path. Here because we named our source text `forbiddencity.txt`, the relative path to the document would be `sample-texts/forbiddencity.txt`. 

Run the below commands to have your text file translated into English.
   
```bash
cd examples
python example_script.py
```

Wait for several minutes and you will have [a fully translated version](https://hackmd.io/tdLiVR3TSc-8eVg_E-j9QA?view#English-Translation-by-Llama-3-8B) appear on your terminal screen.

## Demo 2: Running Translation Agents with Gemma-2-9B

The benefit of running the Translation Agent with GaiaNet is the ability for users to choose and embed different LLMs for different agentic tasks. To demonstrate this point, we will now change the translation agent LLM from Llama-3-8b to Google's Gemma-2-9b, which is of similar size but scores higher on many language-related benchmarks.

The translation task is the same as before. Our [source text](https://hackmd.io/tdLiVR3TSc-8eVg_E-j9QA?view#Source-text) is in Chinese, a brief intro to the ancient Chinese royal palace, the Forbidden City. The translation target is English.

### Step 2.1 Run a Gemma-2-9B GaiaNet node

Configure and download the model. Since the size of the model is 6.40G, it could take a while to download.

```    
gaianet init --config https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/gemma-2-9b-it/config.json
```    

Next, use the following command to start the GaiaNet node.

```
gaianet start
```
    
### Step 2.2 Run the Translation Agent to run on top of Gemma-2-9B

Find the `examples/example_script.py` file in your cloned agent repo and review its code. It tells the agent where to find your document and how to translate it. Change the model name to the one you are using, here we’re using `gemma-2-9b-it-Q5_K_M` model; also change the source and target languages you want (here we put `Chinese` as the source language and `English` as the target language). 

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
            model="gemma-2-9b-it-Q5_K_M",
    )
    
    print(f"Translation:\n\n{translation}")
```

Then, you can find a `examples/sample-texts` folder in your cloned repo. Put your file you want to translate in this folder and get its path. Here because we named our source text `forbiddencity.txt`, the relative path to the document would be `sample-texts/forbiddencity.txt`. 

Run the below commands to have your text file translated into English.

```
cd examples    
python example_script.py
```
    
You can find the translated result in English [here](https://hackmd.io/tdLiVR3TSc-8eVg_E-j9QA?view#English-Translation-by-Gemma-2-9B).

## Demo 3: Running Translation Agents with Phi-3-Medium long context model

The Llama-3 and Gemma-2 models are great LLMs, but they have relatively small context windows. The agent requires all text to fit into the LLM context window, and that limits the size of articles they can translate. To fix this problem, we could select an open source LLM with a large context window. For this demo, we choose Microsoft's Phi-3-medium-128k model, which has a massive 128k (over 100 thousand words or the length of several books) context window.

We run [a lengthy Chinese article on Forbidden City's collaboration with the Varsaille Palace](https://hackmd.io/vuFYZTVsQZyKmkeQ3ThZQw?view#Source-text) through our Translation Agent powered by a Phi-3-medium-128k model we start locally.

### Step 3.1: Run a Phi-3-medium-128k GaiaNet node

Configure and download the model. 

```    
gaianet init --config https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/phi-3-medium-instruct-128k/config_full.json
```

Next, use the following command to start the GaiaNet node with a 128k context window.

```
gaianet start
```

### Step 3.2 Clone and run the Translation Agent on top of Phi-3-medium-128k

Find the `examples/example_script.py` file in your cloned agent repo and review its code. It tells the agent where to find your document and how to translate it. Change the model name to the one you are using, here we’re using `Phi-3-medium-128k-instruct-Q5_K_M` model; also change the source and target languages you want (here we put `Chinese` as the source language and `English` as the target language). 

```
import os  
import translation_agent as ta  
    
if __name__ == "__main__":
    source_lang, target_lang, country = "Chinese", "English", "Britain"
    
    relative_path = "sample-texts/long_article.txt"
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
            model="Phi-3-medium-128k-instruct-Q5_K_M",
    )
    
    print(f"Translation:\n\n{translation}")
```

Then, you can find a `examples/sample-texts` folder in your cloned repo. Put your file you want to translate in this folder and get its path. Here because we named our source text `long_article.txt`, the relative path to the document would be `sample-texts/long_article.txt`.

```
cd examples
python example_script.py
```

[The translated results were impressive,](https://hackmd.io/vuFYZTVsQZyKmkeQ3ThZQw?view#Source-text) with the translation capturing the nuances and context of the original text with high fidelity.

## Evaluation of Translation Quality

The three models, Llama-3-8B, Gemma-2-9B, and Phi-3-medium, have exhibited varying levels of performance in translating complex historical and cultural content from Chinese to English.

Llama-3-8B provides a translation that effectively captures the factual content but shows occasional stiffness in language, possibly indicating a direct translation approach that doesn't fully adapt idiomatic expressions. It does not keep section title and the format of the original text and left certain part untranslated.

In contrast, The translation by Gemma-2-9B is quite accurate and retains the original meaning of the short intro article of Forbidden city. Gemma-2-9B's translation exhibits a smooth and natural English flow, suggesting a sophisticated understanding of both the source language and the target language’s grammatical structures. The choice of words and sentence structures in Gemma-2-9B's output demonstrates a high degree of linguistic finesse, suggesting it might be well-suited for translating formal and historically nuanced texts.

The Phi-3-medium-128k model can translate book-length text from Chinese to English. It demonstrates robust capabilities in handling large volumes of complex content, suggesting advanced memory handling and contextual awareness. The quality of translation remains consistent even with increased text length, indicating Phi's utility in projects requiring extensive, detailed translations. But you can see it makes certain mistakes like mistaken "Wenhua Hall" as "also known as Forbidden City" in the first paragraph.

Overall, each model has its strengths, with Gemma-2-9B standing out for linguistic finesse and Phi-3-medium-128k for handling lengthy texts. 

## Conclusion

[GaiaNet](https://github.com/GaiaNet-AI) provides an easy way to select and use different open-source LLMs in your agentic applications to fully take advantage of their finetuned capabilities for specific tasks.

Once you have a local GaiaNet node up and running, you could share it with others and make $$$ by joining the [GaiaNet network](https://www.gaianet.ai/)!
