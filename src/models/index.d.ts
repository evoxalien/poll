import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Option {
  readonly id: string;
  readonly value: string;
  readonly count: string;
  readonly pollID: string;
  constructor(init: ModelInit<Option>);
  static copyOf(source: Option, mutator: (draft: MutableModel<Option>) => MutableModel<Option> | void): Option;
}

export declare class Poll {
  readonly id: string;
  readonly Title: string;
  readonly Options?: Option[];
  constructor(init: ModelInit<Poll>);
  static copyOf(source: Poll, mutator: (draft: MutableModel<Poll>) => MutableModel<Poll> | void): Poll;
}