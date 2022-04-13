import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'LoneBoySocietyAA',
  tokenName: 'Lone Boy Society AA',
  tokenSymbol: 'LBS',
  hiddenMetadataUri: 'ipfs://QmVwyaArWKyd9P4Y8m6eoThHABuXHbgLY52B1fsixUN3sy/hidden.json',
  maxSupply: 5000,
  whitelistSale: {
    price: 0.04,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.1,
    maxMintAmountPerTx: 5,
  },
  publicSale: {
    price: 0.15,
    maxMintAmountPerTx: 5,
  },
  contractAddress: null,
  marketplaceIdentifier: 'loneboysociety',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
