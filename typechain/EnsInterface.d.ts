/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface EnsInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "owner(bytes32)": FunctionFragment;
    "resolver(bytes32)": FunctionFragment;
    "setOwner(bytes32,address)": FunctionFragment;
    "setResolver(bytes32,address)": FunctionFragment;
    "setSubnodeOwner(bytes32,bytes32,address)": FunctionFragment;
    "setTTL(bytes32,uint64)": FunctionFragment;
    "ttl(bytes32)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "owner", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "resolver", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setResolver",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSubnodeOwner",
    values: [BytesLike, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTTL",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ttl", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "resolver", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setResolver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSubnodeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTTL", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ttl", data: BytesLike): Result;

  events: {
    "NewOwner(bytes32,bytes32,address)": EventFragment;
    "NewResolver(bytes32,address)": EventFragment;
    "NewTTL(bytes32,uint64)": EventFragment;
    "Transfer(bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewResolver"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewTTL"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class EnsInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: EnsInterfaceInterface;

  functions: {
    owner(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    resolver(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "resolver(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setOwner(
      node: BytesLike,
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setOwner(bytes32,address)"(
      node: BytesLike,
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setResolver(
      node: BytesLike,
      _resolver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setResolver(bytes32,address)"(
      node: BytesLike,
      _resolver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setSubnodeOwner(
      node: BytesLike,
      label: BytesLike,
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setSubnodeOwner(bytes32,bytes32,address)"(
      node: BytesLike,
      label: BytesLike,
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setTTL(
      node: BytesLike,
      _ttl: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setTTL(bytes32,uint64)"(
      node: BytesLike,
      _ttl: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ttl(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "ttl(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  owner(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  "owner(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  resolver(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  "resolver(bytes32)"(
    node: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  setOwner(
    node: BytesLike,
    _owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setOwner(bytes32,address)"(
    node: BytesLike,
    _owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setResolver(
    node: BytesLike,
    _resolver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setResolver(bytes32,address)"(
    node: BytesLike,
    _resolver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setSubnodeOwner(
    node: BytesLike,
    label: BytesLike,
    _owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setSubnodeOwner(bytes32,bytes32,address)"(
    node: BytesLike,
    label: BytesLike,
    _owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setTTL(
    node: BytesLike,
    _ttl: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setTTL(bytes32,uint64)"(
    node: BytesLike,
    _ttl: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ttl(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  "ttl(bytes32)"(
    node: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    owner(node: BytesLike, overrides?: CallOverrides): Promise<string>;

    "owner(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    resolver(node: BytesLike, overrides?: CallOverrides): Promise<string>;

    "resolver(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    setOwner(
      node: BytesLike,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setOwner(bytes32,address)"(
      node: BytesLike,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setResolver(
      node: BytesLike,
      _resolver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setResolver(bytes32,address)"(
      node: BytesLike,
      _resolver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setSubnodeOwner(
      node: BytesLike,
      label: BytesLike,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setSubnodeOwner(bytes32,bytes32,address)"(
      node: BytesLike,
      label: BytesLike,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTTL(
      node: BytesLike,
      _ttl: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTTL(bytes32,uint64)"(
      node: BytesLike,
      _ttl: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    ttl(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "ttl(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    NewOwner(
      node: BytesLike | null,
      label: BytesLike | null,
      owner: null
    ): EventFilter;

    NewResolver(node: BytesLike | null, resolver: null): EventFilter;

    NewTTL(node: BytesLike | null, ttl: null): EventFilter;

    Transfer(node: BytesLike | null, owner: null): EventFilter;
  };

  estimateGas: {
    owner(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "owner(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resolver(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "resolver(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setOwner(
      node: BytesLike,
      _owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setOwner(bytes32,address)"(
      node: BytesLike,
      _owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setResolver(
      node: BytesLike,
      _resolver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setResolver(bytes32,address)"(
      node: BytesLike,
      _resolver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setSubnodeOwner(
      node: BytesLike,
      label: BytesLike,
      _owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setSubnodeOwner(bytes32,bytes32,address)"(
      node: BytesLike,
      label: BytesLike,
      _owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setTTL(
      node: BytesLike,
      _ttl: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setTTL(bytes32,uint64)"(
      node: BytesLike,
      _ttl: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    ttl(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "ttl(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    owner(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "owner(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolver(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "resolver(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setOwner(
      node: BytesLike,
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setOwner(bytes32,address)"(
      node: BytesLike,
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setResolver(
      node: BytesLike,
      _resolver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setResolver(bytes32,address)"(
      node: BytesLike,
      _resolver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setSubnodeOwner(
      node: BytesLike,
      label: BytesLike,
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setSubnodeOwner(bytes32,bytes32,address)"(
      node: BytesLike,
      label: BytesLike,
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setTTL(
      node: BytesLike,
      _ttl: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setTTL(bytes32,uint64)"(
      node: BytesLike,
      _ttl: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ttl(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ttl(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
