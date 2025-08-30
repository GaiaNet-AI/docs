---
sidebar_position: 1
---

# How to chunk and segment your knowledge base

First, copy unformatted text into a txt file. Then follow the two rules to chunk your content, i.e. putting similar content together.

- Each title and related content are a chunk. There are no blank lines in one chunk.
- Use a blank line to recognize different chunks.

After that, save it as a txt file.

For example, below is your source.

![The input knowledge in a text file](/img/docs/web_tool_input.png)

After formatting, it will look like the following.

```
What is a blockchain?
A blockchain is a distributed, cryptographically-secure database structure that allows network participants to establish a trusted and immutable record of transactional data without the need for intermediaries. A blockchain can execute a variety of functions beyond transaction settlement, such as smart contracts. Smart contracts are digital agreements that are embedded in code and can have limitless formats and conditions. Blockchains have proven themselves as superior solutions for securely coordinating data, but they are capable of much more, including tokenization, incentive design, attack-resistance, and reducing counterparty risk. The very first blockchain was the Bitcoin blockchain, which was itself a culmination of over a century of advancements in cryptography and database technology.

What is blockchain software?
Blockchain software is like any other software. The first of its kind was Bitcoin, which was released as open source software, making it available to anyone to use or change. There are a wide variety of efforts across the blockchain ecosystem to improve upon Bitcoin's original software. Ethereum has its own open source blockchain software. Some blockchain software is proprietary and not available to the public.
```

Once you have the chunked knowledge base in either `.txt` or `.md` formats, you can follow our tutorials to convert into a Qdrant vector database snapshot:

- [Text to embeddings](../text/text.md)
- [Markdown to embeddings](../markdown/markdown.md)