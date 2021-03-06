/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { EnsResolver } from "./EnsResolver";

export class EnsResolverFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnsResolver {
    return new Contract(address, _abi, signerOrProvider) as EnsResolver;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "addr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
