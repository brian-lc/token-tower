# Token Tower
Repo for the Token Tower Sony Spresense hackster.io project. This repo contains all you need to build, configure, and deploy your own GeoLocation based cryptographically secure token airdrop device.

## What is this about?
Smart cities are more than just sensors and monitoring. To truly succeed they need to address the privacy concerns of the citizens. Our "smart cities" should not be just a friendlier name for government surveillance. There should be a balance of information where the citizen has a say in what is collected and how it is used. 

This project is a novel approach to try and balance privacy and citizen engagement. The goal is to create an end-to-end solution that can be adopted at any level, individuals, organizations, businesses, governments, etc...
This repo is the DIY version but if there more interest a more complete solution could be formed.

## What does this do?
In short, this project lets you airdrop ERC20 tokens to people based on their physical location without their location being stored on-chain.

## Why would I want to do that?
Well, incentives really. If you want to encourage people to go to a place you can create some kind of rewards program. It is pretty common at just about every business on/off line. This project lets you create a trusted, secure, open source and potentially interoperable (universal even) rewards program. 

The first step of any rewards program is setting up the cool rewards that get people interested. But the second part is the boring accounting. This is where blockchains shine. They are a very durable and verifiable way to do accounting. The problem is that they're entirely public. A rewards program on a blockchain would let everyone see how many points you had, and also everywhere you got those points (or tokens in this case).

## What does this have to do with Smart Cities?
With a project like this, you can create a city/county/country wide program to encourage the use of public (tax paid) commons (without the tragedy part). You would define the areas where citizens could earn points (aka tokens) by visiting, deploy a set of "Token tower" devices, then let citizens collect a token for each visit. The actual use of these tokens to say, redeem a free paddle boat rental at the lake in the park is outside of the scope of this work (but it would be a perfect use case).

## What are the major parts of the project?

The high-level components are:
 - An EVM compatible blockchain and smart contracts (Polygon)
 - A supporting webservice and API (Cloudflare workers)
 - A privacy preserving ZeroKnowledge cryptographic framework (Circom)
 - A trusted hardware GPS/LTE/Sensor device (Sony Spresense)

 All these components work together to create a seamless end user experience claiming a custom token with out sacrificing their privacy.

 # Getting Started

 As someone looking to deploy and use this project, for this particular implementation, you would need the following:

 - A Cloudflare account
 - An Infura account
 - A Sony Spresence hardware device (and all the components detailed in the hardware section)
 - A specific geographic location in mind for deployment/testing
 - TruPhone account (or similar) for HTTPS access
 - A wallet with some test ETH/MATIC on a test network


 The technologies use here are:
 - NodeJs - For the webservice backend
 - Solidity - For the smart contracts deployed to the EVM compatible blockchain
 - Circom - A ZeroKnowledge framework to create Groth-16 based ZK SNARKS
 - Various web service/SAAS providers mentioned above
 

