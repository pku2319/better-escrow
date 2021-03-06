/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PriceConsumerV3 } from "./PriceConsumerV3";

export class PriceConsumerV3Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_priceFeed: string, overrides?: Overrides): Promise<PriceConsumerV3> {
    return super.deploy(
      _priceFeed,
      overrides || {}
    ) as Promise<PriceConsumerV3>;
  }
  getDeployTransaction(
    _priceFeed: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_priceFeed, overrides || {});
  }
  attach(address: string): PriceConsumerV3 {
    return super.attach(address) as PriceConsumerV3;
  }
  connect(signer: Signer): PriceConsumerV3Factory {
    return super.connect(signer) as PriceConsumerV3Factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceConsumerV3 {
    return new Contract(address, _abi, signerOrProvider) as PriceConsumerV3;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_priceFeed",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getLatestPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102003803806102008339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061016c806100946000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638e15f47314610030575b600080fd5b61003861004e565b6040518082815260200191505060405180910390f35b6000806000806000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156100be57600080fd5b505afa1580156100d2573d6000803e3d6000fd5b505050506040513d60a08110156100e857600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291905050509450945094509450945083955050505050509056fea2646970667358221220418dccec0ccfe7a1e32ce43e44b8bec38319f4ce7a8205175499e8ff1e2d704864736f6c63430006060033";
