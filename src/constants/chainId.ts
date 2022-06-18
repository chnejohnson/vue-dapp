import { AddEthereumChainParameter } from 'vue-dapp/wallets'

export enum ChainId {
  Mainnet = 1,
  Goerli = 5,
}

export const CHAIN_NAMES = {
  [ChainId.Mainnet]: 'Mainnet',
  [ChainId.Goerli]: 'Goerli',
}

// @todo add other network details. Refer to https://chainlist.org/
export const NETWORK_DETAILS: { [key: number]: AddEthereumChainParameter } = {
  [ChainId.Mainnet]: {
    chainId: '0x' + ChainId.Mainnet.toString(16),
    chainName: 'Mainnet',
    rpcUrls: ['https://rinkeby.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://rinkeby-explorer.arbitrum.io'],
    nativeCurrency: {
      symbol: 'ETH',
      decimals: 18,
    },
  },

  [ChainId.Goerli]: {
    chainId: '0x' + ChainId.Goerli.toString(16),
    chainName: 'Goerli',
    rpcUrls: ['https://polygon-rpc.com/'],
    blockExplorerUrls: ['https://goerli.etherscan.io/'],
    nativeCurrency: {
      symbol: 'MATIC',
      decimals: 18,
    },
  },
}
