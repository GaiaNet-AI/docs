---
sidebar_position: 2
---

# llama.cpp

The popular llama.cpp tool comes with a `finetune` utility. It works well on CPUs! This finetune guide is reproduced with 
permission from Tony Yuan's [Finetune an open-source LLM for the chemistry subject](https://github.com/YuanTony/chemistry-assistant/tree/main/fine-tune-model) project.

## Build the finetune utility from llama.cpp

The `finetune` utility in llama.cpp can work with quantitized GGUF files on CPUs, and hence dramatically reducing the hardware requirements and expenses for finetuning LLMs.

Checkout and download the llama.cpp source code.

```
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
```

Build the llama.cpp binary.

```
mkdir build
cd build
cmake ..
cmake --build . --config Release
```

If you have Nvidia GPU and CUDA toolkit installed, you should build llama.cpp with CUDA support.

```
mkdir build
cd build
cmake .. -DLLAMA_CUBLAS=ON -DCMAKE_CUDA_COMPILER=/usr/local/cuda/bin/nvcc
cmake --build . --config Release
```

## Get the base model

We are going to use Meta's Llama2 chat 13B model as the base model. Note that we are using a Q5 quantitized GGUF model file directly to save computing resources. You can use any of the Llama2 compatible GGUF models on Hugging Face.

```
cd .. # change to the llama.cpp directory
cd models/
curl -LO https://huggingface.co/gaianet/Llama-2-13B-Chat-GGUF/resolve/main/llama-2-13b-chat.Q5_K_M.gguf
```

## Create a question and answer set for fine-tuning

Next we came up with 1700+ pairs of QAs for the chemistry subject. It is like the following in a [CSV file](https://raw.githubusercontent.com/YuanTony/chemistry-assistant/main/fine-tune-model/train.csv).

Question | Answer
----- | -------
What is unique about hydrogen? | It's the most abundant element in the universe, making up over 75% of all matter.
What is the main component of Jupiter? | Hydrogen is the main component of Jupiter and the other gas giant planets.
Can hydrogen be used as fuel? | Yes, hydrogen is used as rocket fuel. It can also power fuel cells to generate electricity.
What is mercury's atomic number? | The atomic number of mercury is 80
What is Mercury? | Mercury is a silver colored metal that is liquid at room temperature. It has an atomic number of 80 on the periodic table. It is toxic to humans.

> We used GPT-4 to help me come up many of these QAs.

Then, we wrote a [Python script](https://raw.githubusercontent.com/YuanTony/chemistry-assistant/main/fine-tune-model/convert.py) to convert each row in the CSV file into a sample QA in the Llama2 chat template format. Notice that each QA pair starts with `<SFT>` as an indicator for the finetune program to start a sample. The result [train.txt](https://raw.githubusercontent.com/YuanTony/chemistry-assistant/main/fine-tune-model/train.txt) file can now be used in fine-tuning.

Put the [train.txt](https://raw.githubusercontent.com/YuanTony/chemistry-assistant/main/fine-tune-model/train.txt) file in the `llama.cpp/models` directory with the GGUF base model.

## Finetune!

Use the following command to start the fine-tuning process on your CPUs. I am putting it in the background so that it can run continuous now.
It could several days or even a couple of weeks depending on how many CPUs you have.

```
nohup ../build/bin/finetune --model-base llama-2-13b-chat.Q5_K_M.gguf --lora-out lora.bin --train-data train.txt --sample-start '<SFT>' --adam-iter 1024 &
```

You can check the process every a few hours in the `nohup.out` file. It will report `loss` for each iteration. You can stop the process when the `loss` goes consistently under `0.1`.

**Note 1** If you have multiple CPUs (or CPU cores), you can speed up the finetuning process by adding a `-t` parameter to the above command to use more threads. For example, if you have 60 CPU cores, you could do `-t 60` to use all of them.

**Note 2** If your finetuning process is interrupted, you can restart it from `checkpoint-250.gguf`. The next file it outputs is `checkpoint-260.gguf`.

```
nohup ../build/bin/finetune --model-base llama-2-13b-chat.Q5_K_M.gguf --checkpoint-in checkpoint-250.gguf --lora-out lora.bin --train-data train.txt --sample-start '<SFT>' --adam-iter 1024 &
```

## Merge

The fine-tuning process updates several layers of the LLM's neural network. Those updated layers are saved in a file called `lora.bin` and you can now merge them back to the base LLM to create the new fine-tuned LLM.

```
../build/bin/export-lora --model-base llama-2-13b-chat.Q5_K_M.gguf --lora lora.bin --model-out chemistry-assistant-13b-q5_k_m.gguf
```

The result is this file.

```
curl -LO https://huggingface.co/juntaoyuan/chemistry-assistant-13b/resolve/main/chemistry-assistant-13b-q5_k_m.gguf
```

**Note 3** If you want to use a checkpoint to generate a `lora.bin` file, use the following command. This is needed when you believe the final `lora.bin` is an overfit.

```
../build/bin/finetune --model-base llama-2-13b-chat.Q5_K_M.gguf --checkpoint-in checkpoint-250.gguf --only-write-lora --lora-out lora.bin
```

