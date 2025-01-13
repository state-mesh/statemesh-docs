---
title: "Wallet Management"
---

# Wallet Management

Your StateMesh wallet serves two main purposes: facilitating payments for applications and storing earnings from node operations.

## Wallet Overview

Your custodial platform wallet:
* Handles application payments
* Stores node earnings
* Manages MESH tokens
* Tracks USDT balance

## Balance Management

### MESH Token
* Required for node operations
* Used for submitting proofs
* Maintain sufficient balance
* Buy/Withdraw options

```
balance:
mesh: 0.00
actions:
- buy: enabled
- withdraw: enabled
alert: "Your MESH balance is low. Top-up to be able to create apps."
```
### USDT Balance
* Required for deployments
* Application payments
* Service operation costs
* Automatic deductions

```
balance:
usdt: 0.00
actions:
- buy: enabled
- withdraw: enabled
alert: "Your USDT balance is low. Top-up to be able to create apps."
```
## Transaction History

### Expenses
* Application costs
* Service fees
* Resource usage
* Itemized billing

### Earnings
* Node operation rewards
* Time Tower rewards
* Service earnings
* Payment history

## Wallet Address

Your unique wallet address:
* Used for identification
* Receive payments
* Send transactions
* Track activities

Example:
0xcE8cD6611E1AbB5Dd8b23853818D1cAaAb1E1253

## Important Notes

* Keep sufficient balance for operations
* Monitor usage costs
* Regular withdrawals recommended
* Security best practices
