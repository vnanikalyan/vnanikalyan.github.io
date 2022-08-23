---
slug: set-up
id: set-up
title: Install Hyperledger
authors: [vnk]
tags: [Hyperledger, blockchain]
custom_edit_url: null
---

#### Notes
- There is no native token (like fab-token)
- "execute/endorse-order-validate" instead of order-execute (most blockchains use)
- Peers  
&nbsp &nbsp &nbsp &nbsp i) Committing Peer  
&nbsp &nbsp &nbsp &nbsp ii) Endorsing Peer  
&nbsp &nbsp &nbsp &nbsp iii) Ordering node


```bash
export PATH=${PWD}/../bin:$PATH
```

## Steps to be followed
**Step 1:** Get the [install script](https://hyperledger-fabric.readthedocs.io/en/latest/install.html)
```bash
curl -sSLO https://raw.githubusercontent.com/hyperledger/fabric/main/scripts/install-fabric.sh && chmod +x install-fabric.sh
```

**Step 2:** Run install-fabric.sh
```bash
./install-fabric.sh
```
- It will install docker images, binaries, samples

**Step 3:** 
```bash 
cd fabric-samples/test-network
```

**Step 4:** ./network.sh up
```bash 
./network.sh up
```
- It will create two peers (two organisations - peer0.org1.example.com, peer0.org2.example.com) and
- One orderer service (orderer.example.com)
    - "Raft" Ordering service. 
    - The different ordering nodes would use the Raft consensus algorithm to come to agreement on the order of transactions across the network.  
    - we have peer and orderer nodes running on our machine.
		
**Step 5:** 
```bash
./network.sh createChannel -c nani
```
- It will create a channel named nani.
- Channel is needed for transactions between organisations.
- Channels are a private layer of communication between specific network members.
- Each channel has a seperate blockchain ledger.
- Organizations that have been invited “join” their peers to the channel to store the channel ledger and validate the transactions on the channel.

**Step 6:** 
- We use smart contracts (business logic that governs assests on the blockchain ledger) to interact with channel ledger.  
- chaincode- Smart contracts are deployed on the network in packages referred to as chaincode.

**Step 7:** Start a chaincode on the channel that we created			
```bash 
./network.sh deployCC -ccn basic -ccp ../asset-transfer-basic/chaincode-javascript -ccl javascript
```

#### Network k8s
Download the following binaries
- kind
- kubectl
- jq