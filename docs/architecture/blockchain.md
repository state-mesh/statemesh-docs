---
title: "The StateMesh Blockchain"
---
The StateMesh blockchain is an L1 EVM chain that uses Fantom's [Lachesis](https://arxiv.org/abs/2108.01900) DAG-based consensus for fast finality and high throughput. The chain is secured by a network of validators that stake MESH tokens to participate in consensus.

:::info
The chain is not meant to be a general-purpose blockchain, but rather a specialized chain that is optimized for the needs of the StateMesh network.
:::

The chain is designed to be highly scalable and secure, with a focus on enabling fast and low-cost transactions. It is also designed to be highly interoperable, with support for cross-chain communication and integration with other blockchains, for fast stablecoin bridging and other use cases.

It is however a fully EVM-compatible chain, which means that it can run any smart contract that is compatible with the Ethereum Virtual Machine (EVM). This makes it easy for developers to port existing Ethereum smart contracts to the StateMesh chain, and to build new smart contracts that are compatible with the existing Ethereum ecosystem.

## Native Currency
The native currency of StateMesh is `MESH` and its subdivision is `wei`.

:::tip
1 MESH = 10<sup>18</sup> wei
:::

## Consensus
The blockchain uses PoS to secure the network. Validator nodes are responsible for generating and validating blocks. In return they will receive block rewards and a percentage of transaction fees and subscription fees. Based on their performance and reputation, validator nodes are assigned a score. They are incentivized to act in accordance with the network because they are subject to penalization (slashing) if they behave maliciously.

The consensus is based on the Lachesis open-source software library. Lachesis is designed to easily plug into any blockchain node written in Golang, or in any other language if provided with a wrapper. Basically, Lachesis process consensus messages from other nodes and guarantee that everyone processes the same commands in the same order. To do this, it uses a DAG aBFT consensus algorithm.

Lachesis is:
- Asynchronous: Participants have the freedom to process commands at different times.
- Leaderless: No participant plays a 'special' role
- Byzantine Fault-Tolerant: Supports one third of faulty nodes, including malicious behavior
- Final: Lachesis's output can be used immediately, no need for block confirmations, etc.

Lachesis is a DAG-based aBFT consensus protocol with guaranteed finality. The Lachesis protocol is leaderless achieving complete asynchrony, no round robin and no proof-of-work. Every confirmed transaction is final, unless more than 1/3W of validators are Byzantine

Each Lachesis node stores a local acyclic directed graph (DAG) composed of event blocks, each of which contains transactions. In this wiki, the terms 'event' and 'event block' are sometimes used interchangebly. The DAG capturing the happens-before relationship between the events is used to calculate an exact final order of events (and hence transactions) independently on each node.

Events are divided into confirmed and unconfirmed events. New events are unconfirmed, whilst usually events from past 2-3+ frames are all confirmed. For confirmed events, honest nodes can compute their exact order. Unconfirmed events can only be partially ordered.

Consensus results into batches of confirmed events, where each batch of events is called a block. Blocks (or finalized blocks) forming the final chain are calculated from event blocks independently on each node. Unlike PoW, round-robin PoS, coinage PoS and sync BFT, nodes don't send blocks to each other. Only events are being synced between nodes. Validators of the network do not vote on a concrete state of the network, but instead they periodically exchange transactions and events they observe with peers.

Unlike sync BFT (like pBFT), Lachesis do not use new events in current election, but instead they are used to vote for the events in 2-3+ previous virtual elections simultaneously. This leads to a smaller number of created consensus messages, as the same event is reused in different elections. Hence, Lachesis achieves a lower TTF and a smaller consensus overhead comparing to sync BFT.

You can read more about Lachesis in their [paper](https://arxiv.org/abs/2108.01900).



## Epochs
The protocol is organized in Epochs comprised of a number of (finalized) blocks. Each epoch is sealed when one of the below conditions is satisfied:

- a maximum threshold of gas power was spent
- the epoch's duration is finished
- at least one dishonest validator is confirmed in the current block
- on-request

The lowest possible epoch number is 1.

## Finality
The chain is designed to provide fast finality, with transactions being confirmed ~ `1 second`.

## Transaction fees
Each transaction on the blockchain requires a transaction fee paid to the network in order to prevent spam attacks. The fee is paid in the chain's native token `MESH`.

### Gas
Gas refers to the unit that measures the amount of computational effort required to execute specific operations on the blockchain. Since each transaction requires computational resources to execute, each transaction requires a fee. Gas refers to the fee required to execute a transaction on StateMesh, regardless of transaction success or failure.

Gas fees are paid in the chain's native currency, `MESH`. Gas prices are denoted in `gwei`, which itself is a denomination of `MESH`:

:::tip
1 gwei = 10<sup>-9</sup> or 0.000000001 MESH
:::


### Max gas fee
To execute a transaction on the network, users can specify a maximum limit they are willing to pay for their transaction to be executed. If the provided max fee exceeds the actual transaction fee, the sender is refunded the difference between the max fee and the actual computed fee.

:::info
The max fee must exceed the sum of the base fee and the tip
:::


## Time Towers and VDFs
The chain uses a system Time Tower contract and native precompiles for verifying VDF proofs. Node operators submit VDF proofs at regular intervals (e.g. every 10 minutes) to the Time Tower contract. Blockchain validators verify the proofs and earn reward in MESH tokens. The Time Tower contract is used to ensure that the chain remains secure and that the VDFs are being computed correctly.

A detailed explanation of the Time Tower and VDFs can be found in the [Time Towers](/architecture/time-towers) section.

