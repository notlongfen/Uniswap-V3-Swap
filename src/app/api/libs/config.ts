import { Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import { USDC_TOKEN, WETH_TOKEN } from './constants'
import dotenv from 'dotenv'
dotenv.config()

export enum Environment{
  LOCAL,
  MAINNET,
  WALLET_EXTENSION,
  NONE,
}

// Inputs that configure this example to run
export interface ExampleConfig {
  env: Environment,
  rpc: {
    local: string
    mainnet: string
  }
  tokens: {
    in: Token
    amountIn: number
    out: Token
    poolFee: number
  }
  wallet: {
    address: string
    privateKey: string
  }
}

// Example Configuration

export const CurrentConfig: ExampleConfig = {
  env: Environment.LOCAL,
  rpc: {
    local: 'http://localhost:8545',
    mainnet: process.env.NEXT_PUBLIC_INFURA_RPC_URL || '',
  },
  tokens: {
    in: USDC_TOKEN,
    amountIn: 1000,
    out: WETH_TOKEN,
    poolFee: FeeAmount.MEDIUM,
  },
  wallet: {
    address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    privateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
  },
}
// console.log(CurrentConfig.rpc.mainnet)
