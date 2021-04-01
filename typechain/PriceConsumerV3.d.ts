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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface PriceConsumerV3Interface extends ethers.utils.Interface {
  functions: {
    "getLatestPrice()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getLatestPrice",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getLatestPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export class PriceConsumerV3 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PriceConsumerV3Interface;

  functions: {
    getLatestPrice(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getLatestPrice()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  getLatestPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "getLatestPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getLatestPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getLatestPrice()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getLatestPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getLatestPrice()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getLatestPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getLatestPrice()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
