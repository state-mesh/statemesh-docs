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
All blockchain transactions require fees to prevent network spam attacks. On StateMesh, these fees are paid in the native `MESH` token and are calculated using gas.

### Understanding Gas
Gas measures the computational resources required to execute operations on the blockchain. Every transaction consumes gas, which must be paid regardless of whether the transaction succeeds or fails.

- **Gas Unit**: Represents computational effort needed for operations
- **Gas Price**: Amount of `MESH` paid per unit of gas, denominated in `gwei`

:::tip
1 gwei = 10<sup>-9</sup> or 0.000000001 MESH
:::


### Setting Transaction Fees
When submitting a transaction, users specify a maximum gas fee they're willing to pay. This consists of:

2. **Base Fee**: Required minimum fee set by the network
2. **Tip**: Optional priority fee to incentivize faster processing

If the actual cost is less than the specified maximum, the difference is automatically refunded to the sender.

:::info
The max fee must exceed the sum of the base fee and the tip
:::


## Time Towers and VDFs
The chain uses a system Time Tower contract and native precompiles for verifying VDF proofs. Node operators submit VDF proofs at regular intervals (e.g. every 10 minutes) to the Time Tower contract. Blockchain validators verify the proofs and earn reward in MESH tokens. The Time Tower contract is used to ensure that the chain remains secure and that the VDFs are being computed correctly.

A detailed explanation of the Time Tower and VDFs can be found in the [Time Towers](/architecture/time-towers) section.

