/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ChainlinkClient } from "./ChainlinkClient";

export class ChainlinkClientFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ChainlinkClient> {
    return super.deploy(overrides || {}) as Promise<ChainlinkClient>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ChainlinkClient {
    return super.attach(address) as ChainlinkClient;
  }
  connect(signer: Signer): ChainlinkClientFactory {
    return super.connect(signer) as ChainlinkClientFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkClient {
    return new Contract(address, _abi, signerOrProvider) as ChainlinkClient;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkRequested",
    type: "event",
  },
];

const _bytecode =
  "0x60806040526001600455348015601457600080fd5b50603f8060226000396000f3fe6080604052600080fdfea2646970667358221220f18cc9a3f902f64e8de2ade098bb0958d3283a3e1c36b97379b3b86828444b6e64736f6c63430006060033";
