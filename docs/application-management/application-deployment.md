---
title: "Deploying Applications"
---

# Deploying Applications

Follow this guide to deploy your first application on StateMesh.

## Before You Begin

Requirements:
* USDT balance for deployments
* Container image ready
* Application configuration
* Selected deployment region

## Deployment Options

### 1. Custom Application
Create your deployment from scratch with full configuration control

Required information:
* Application name (3-50 characters)
* Description (up to 250 characters)
* Deployment zone
* Resource requirements

### 2. Popular Templates

Available templates include:

WordPress:
* Content management system
* No coding required
* Website building platform
* Popular CMS solution

Matomo:
* Privacy-focused analytics
* Alternative to Google Analytics
* No privacy sacrifices
* Own your data

Jupyter:
* Web-based computing
* Interactive notebooks
* Data analysis platform
* Development environment

FlowiseAI:
* LLM orchestration
* AI workflow builder
* Custom agents
* Low-code tool

## Deployment Steps

### Step 1: Basic Configuration

```
name: myapp
description: My application description
zone: eu-central
version: 1.0
```
### Step 2: Resource Configuration

```
resources:
cpu: 2
memory: 4Gi
storage: 50Gi
gpu: optional
```
### Step 3: Network Configuration

```
networking:
ports:
- port: 80
  as: 80
  ingress:
  enabled: true
  host: myapp.example.com
```
## Managing Your Application

After deployment:
* Monitor through dashboard
* View logs and metrics
* Access via endpoint
* Scale resources as needed

