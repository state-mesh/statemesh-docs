---
title: "Network Architecture"
---

# Network Architecture

StateMesh's network architecture is designed for global scale, high performance, and security.

## Geographic Distribution

### Regions
* Maximum 20 geographic zones including:
    * eu-central
    * eu-north
    * us-east
    * us-west
    * singapore
    * hongkong
    * mumbai
    * [other regions]

### Cluster Organization
* Each region supports up to 10 clusters
* Per cluster capacity:
    * Maximum 5,000 nodes
    * Maximum 150,000 pods
    * Configurable CIDR for pod networking

## Network Components

### Core Infrastructure
* WireGuard-based mesh networking
    * High-availability WireGuard servers per region
    * netmaker.io integration for dynamic peer management
    * Automated peer addition/removal

### Kubernetes Networking
* Cilium as primary CNI driver
    * eBPF capability for near-native performance
    * Advanced networking features
    * Enhanced security through network policies

### Network Optimization
* MTU optimization considerations for:
    * WireGuard overlay
    * Cilium networking
    * Operator node configuration
* Preference for eBPF over VXLAN
* iptables rules when necessary

## Security Architecture

### Zero-Trust Environment
* All nodes operate in zero-trust mode
* TPM/vTPM integration for security
* Node classification (strong/weak) based on security capabilities

### Encryption
* End-to-end encryption for all traffic
* Attestation-enhanced TLS (aTLS)
* Encrypted storage for sensitive data

### Network Isolation
* Firewall rules for inter-node communication
* Network segmentation
* Pod-level network policies

## High Availability

### Network HA
* Multi-server WireGuard setup
* BIRD for advanced routing (when needed)
* Cross-region connectivity

### Cluster HA
* Multiple clusters per region
* Load distribution
* Failover capabilities

## Performance Considerations

### Network Performance
* eBPF prioritization for performance
* Minimal use of VXLAN
* Optimized MTU configuration
* Direct routing where possible

### Best Practices
* MTU configuration guidelines
* Network optimization recommendations
* Performance monitoring setup
