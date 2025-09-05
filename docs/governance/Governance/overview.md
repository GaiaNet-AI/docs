---
sidebar_position: 1
---

# 1. Overview

This section outlines the framework for governing GaiaNet by holders of the GAIA Token (each, a “**Tokenholder**”, and collectively, the “**Gaia DAO**”). Some of the rules and procedures laid out here will be enforced directly onchain, and some will not. This section also includes some "recommended guidelines'' which are non-binding but strongly recommended as governance best practices.

## Definitions:
* **GIP**: Gaia Improvement Proposal
* **DAO Treasury**: All GAIA tokens held in a smart contract governed directly by the Gaia DAO via on-chain voting mechanisms.
* **Votable Tokens**: All GAIA tokens in existence, excluding any tokens held by The Gaia Foundation and any unclaimed airdrops
* **Gaia DAO**: The community-driven steward of Gaia which is responsible for governing the ecosystem, establishing token strategy, procuring service providers and other contributors, and managing the Gaia Treasury.
* **Gaia Foundation**: An entity established to set Gaia’s high-level vision & strategic goals, enter legal agreements, and ensure compliance.
* **Gaia Labs**: The development company of Gaia, which builds and maintains protocol infrastructure, provides integration support, and helps oversee ecosystem programs.
* **DAO Core Mission:** The DAO’s Core Mission is to **increase developer adoption** and **foster the expansion of the AI token economy.**
* **DAO Core Mandates**: To accomplish the DAO Core Mission, its core mandates are to **govern the ecosystem**, **establish token strategy (e.g. DEX selection)**, **procure service providers and other contributors**, and **manage the Gaia Treasury** and drive various community-driven initiatives with said treasury.
* **Governor**: Provides the main access control logic of the governance system. Its primary job is to process proposals and their associated votes in order to determine whether they succeed or fail.
* **Timelock**: Receives instructions from the governor for successful proposals. Provides a time delay on proposals to give time for stakeholders to respond, should it be needed, then executes the instruction.
* **Security Council**: A trusted multisig that has admin privileges, such as intervening as a last resort in the case of emergency proposal vetoes.
