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

interface RandomNumberConsumerInterface extends ethers.utils.Interface {
  functions: {
    "getRandomNumber(uint256)": FunctionFragment;
    "randomResult()": FunctionFragment;
    "rawFulfillRandomness(bytes32,uint256)": FunctionFragment;
    "withdrawLink()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getRandomNumber",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "randomResult",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomness",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLink",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getRandomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "randomResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLink",
    data: BytesLike
  ): Result;

  events: {
    "RequestedRandomness(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RequestedRandomness"): EventFragment;
}

export class RandomNumberConsumer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RandomNumberConsumerInterface;

  functions: {
    getRandomNumber(
      userProvidedSeed: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "getRandomNumber(uint256)"(
      userProvidedSeed: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    randomResult(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "randomResult()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "rawFulfillRandomness(bytes32,uint256)"(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawLink(overrides?: Overrides): Promise<ContractTransaction>;

    "withdrawLink()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  getRandomNumber(
    userProvidedSeed: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "getRandomNumber(uint256)"(
    userProvidedSeed: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  randomResult(overrides?: CallOverrides): Promise<BigNumber>;

  "randomResult()"(overrides?: CallOverrides): Promise<BigNumber>;

  rawFulfillRandomness(
    requestId: BytesLike,
    randomness: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "rawFulfillRandomness(bytes32,uint256)"(
    requestId: BytesLike,
    randomness: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawLink(overrides?: Overrides): Promise<ContractTransaction>;

  "withdrawLink()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    getRandomNumber(
      userProvidedSeed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getRandomNumber(uint256)"(
      userProvidedSeed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    randomResult(overrides?: CallOverrides): Promise<BigNumber>;

    "randomResult()"(overrides?: CallOverrides): Promise<BigNumber>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "rawFulfillRandomness(bytes32,uint256)"(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawLink(overrides?: CallOverrides): Promise<void>;

    "withdrawLink()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    RequestedRandomness(requestId: null): EventFilter;
  };

  estimateGas: {
    getRandomNumber(
      userProvidedSeed: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "getRandomNumber(uint256)"(
      userProvidedSeed: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    randomResult(overrides?: CallOverrides): Promise<BigNumber>;

    "randomResult()"(overrides?: CallOverrides): Promise<BigNumber>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "rawFulfillRandomness(bytes32,uint256)"(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawLink(overrides?: Overrides): Promise<BigNumber>;

    "withdrawLink()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getRandomNumber(
      userProvidedSeed: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "getRandomNumber(uint256)"(
      userProvidedSeed: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    randomResult(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "randomResult()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rawFulfillRandomness(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "rawFulfillRandomness(bytes32,uint256)"(
      requestId: BytesLike,
      randomness: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawLink(overrides?: Overrides): Promise<PopulatedTransaction>;

    "withdrawLink()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}