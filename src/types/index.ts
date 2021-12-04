import { ethers } from "ethers";

export interface ICustomProvider {
    web3: any;
    account?: string;
    accounts: string[];
    networkId?: number;
    signer: null | ethers.providers.JsonRpcSigner;
    balance: number;
    loading: boolean;
    error: any;
    connected: boolean;
    isConnectedToValidNetwork: boolean;
    chainId: string;
    validChainId: number;
    currency: string;
}

export interface IContractDefinition {
    abi: any[];
    address: string;
}

export interface IWeb3Config {
    config: Record<string, any>; 
    contracts: Record<string, IContractDefinition>;
}