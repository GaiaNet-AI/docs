---
sidebar_position: 6
---

# Governance Procedures
GaiaNet Improvement Proposals (“**GIPs**") are the primary mechanism for enacting changes to GaiaNet and the GaiaNet DAO’s governance procedures. GIPs serve as a means of fostering community discourse and collective decision-making within the GaiaNet DAO. 

## Step 1: Ideation
Ideas for GaiaNet improvements, new features, integrations, and governance changes are initially discussed on the GaiaNet Governance Forum (link). The author(s) are encouraged to engage in active dialogue with the community to refine their ideas and gauge early feedback. Well-developed ideas with strong community support should proceed to the proposal drafting stage.

## Step 2: Proposal Drafting
GaiaNet Improvement Proposals (GIPs) include all proposals submitted through the GaiaNet Governor contract. The Governor contract is a smart contract deployed on Ethereum, and GIPs are used to propose upgrades to GaiaNet. 
For the GIP template, see [this page].

## Step 3: Proposal Discussion
Once proposals have been posted to the forum, they should initially stay open for community discussion for a recommended period (the “Discussion Period”) of **seven (7)** days. While proposal authors can submit a GIP directly without prior forum discussion, it is recommended that tokenholders consider voting against such proposals to enforce a more democratic Discussion Period. 

Once the Discussion Period has concluded they will post an update on the governance forum, indicating that the proposal is now eligible for submission. This post will serve as a signal to the proposal author and the wider community that the GIP can proceed to the next stage of the governance process.

## Step 4: Signal Voting
As a supplement during the “Discussion Period” and prior to onchain GIP submission, proposal authors are encouraged to conduct offchain signal voting to gauge community sentiment and gather preliminary feedback. This non-binding voting process allows for early insights into the proposal’s potential acceptance and may highlight potential areas for improvement.
Offchain signal voting aims to provide a lightweight method for community members to express their opinions and preferences regarding ideas, proposals, or new initiatives within the Gaia Ecosystem. It may be facilitated through platforms designated by the Foundation, including the GaiaNet Snapshot Portal.

Proposal authors should outline the specifics of the vote, including options, duration, and how the results will influence the proposal’s progression. Clear communication regarding the non-binding nature of these votes is crucial. A strong positive response is an encouraging indicator for proceeding to the "Onchain GIP Submission'' stage. Conversely, if the signal vote reveals substantial opposition or concerns, authors should consider revisiting and revising their proposal in consultation with the community before moving forward.

## Step 5: Onchain GIP Submission
Proposals should be submitted for onchain voting once the Discussion Period is complete. The GaiaNet DAO currently has a threshold of 0.2% (or 2 million) GAIA as a requirement for proposal submission. Any Delegate who meets this proposal threshold may submit their proposal for onchain voting. If a Delegate does not meet the minimum token threshold for submitting proposals, they may work with someone who does to submit the proposal on their behalf or ask the DAO for GAIA delegations. Delegate profiles can be viewed at [link].

Proposals are submitted onchain on the GaiaNet Governance Portal (via Tally) or on other applications connected to GaiaNet governance contracts. Upon submission, a proposal enters a **three (3)** day Vote Delay period, prior to the commencement of the **seven (7)** day Voting Period.

GaiaNet Governance Proposals pass a vote if delegates reach quorum, defined as 4% (or 40 million) GAIA voting power in support of the proposal, AND have a simple majority of “For” votes (>50%). Each proposal must also be consistent with the values of GaiaNet and must not violate applicable law. 

For the GIP template, see [this page].

## Step 5a: GIP Resubmission
If a GIP fails to pass the onchain voting process, it can be resubmitted for another round of voting after incorporating feedback from the community and making necessary changes. When resubmitting a GIP, the following guidelines should be followed:

* Include a link to the original GIP and a summary of the changes made in the resubmitted version.
* Clearly state the reasons why the original GIP was not approved and how the resubmitted version addresses those concerns.
* Highlight any additional information or updates that have been added to the proposal to make it more compelling or feasible.
* Follow the same GIP template and submission process 

As a general recommendation, resubmitted GIPs should demonstrate meaningful improvements and address the key feedback points raised during the previous voting round.

## Step 6: Voting & Voting Parameters
GIPs can be voted on via the GaiaNet Governance Portal on Tally, on other independent applications, or directly onchain via the block explorer. 

Governor contract proposals must meet a quorum requirement and receive a simple majority of the total number of "for" and "against" votes  to pass.

If a vote causes a quorum to be reached, the proposal's voting period is extended so that it does not end before the following 7 days have passed.

The voting parameters for Tokenholders are as follows, which may be subject to further changes in accordance with a GIP related to the governance process (the “**Voting Parameters**”):

* **Vote Delay Period:** Upon submission, a proposal enters a three (3) day vote delay period, prior to the Voting Period. The proposer may cancel a proposal during the Vote Delay Period, at their discretion.
* **Voting Period:** The Voting Period is the seven (7) day time period during which Delegates can cast “Yes,” “No,” or “Abstain” votes on a submitted proposal.
* **Timelock Period:** Upon completion of the Voting Period, the proposal proceeds to a Timelock period with a minimum delay of three (3) days. This period serves as a delay before proposal execution, giving the community time to adjust to any changes introduced by a successful proposal.
* **Proposal Threshold:** 0.2% (or 2 million) GAIA. The Proposal Threshold is the minimum voting power (whether through holding GAIA tokens themselves or having tokens delegated to them by third parties) needed to submit a GIP for an onchain vote.
* **Quorum:** 4% (or 40 million) GAIA

> _Note:_ The above values, time periods, and thresholds may be modified by tokenholders through the governance process itself.

Click here to learn more about delegation.

Click here to learn more about voting on proposals.

## Step 6b: Voting Power
One (1) GAIA token equals one (1) vote over any proposals submitted to the GaiaNet DAO (the “**Voting Power**”). This will allow tokenholders to participate in the governance process proportionally to their holdings.

## Step 7: Timelock Period
Upon completion of the Voting Period, the proposal proceeds to a Timelock period with a minimum delay of **three (3)** days.

## Step 8: Implementation Period
Following the expiration of the Timelock Period:

* **Onchain Actions** may be queued or executed immediately. 
* **Offchain Signal Votes,** which are non-binding, should be considered a recommendation rather than a mandatory requirement to take action. If the offchain vote received a majority vote in support of the proposal’s details and an onchain vote is necessary, the author can continue with the GIP process outlined above. 
