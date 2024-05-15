---
sidebar_position: 1
---

# Finetune LLMs

You could finetune an open-source LLM to

* teach it to follow conversations
* teach it to respect and follow instructions
* make it refuse to answer certain questions
* give it a specific "speaking" style
* make it response in certain formats (e.g., JSON)
* give it focus on a specific domain area
* teach it certain knowledge

To do that, you need to create a set of question and answer pairs to show the model the prompt and the expected response.
Then, you can use a finetuning tool to perform the training and make the model respond the expected answer for
each question.
