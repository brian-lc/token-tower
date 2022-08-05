# ZK support service API

This service supports the hardware token granting device by handling the complexity of blockchain interaction in a simple interface. 

The job of this service is to take an EVM compatible HD wallet address and a set of GPS coordinates from the hardware device and return a simple accepted/rejected response. If the wallet and GPS coordinates are valid, it will make the calls needed to create the privacy preserving witness data, and make the necessary calls on-chain to process the transaction. If the transaction succeeds the end users wallet will receive a new token. Their actual location where they claimed the token will never be stored on-chain or seen by anyone. 

## Requirements

This service is a fairly generic NodeJS service but it was written to be deployed on Cloudflare workers so certain platform specific requirements are included.

To `init`, `dev`, `publish` this service you'll need Cloudflare's Wrangler

`npm install -g wrangler`

Then authenticate 

`wrangler login`

## Setup

