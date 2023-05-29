export type Graffiti = {
  block: string;
  feeRecipient: string;
  id: number;
  graffiti: string;
  slot: string;
  proposerId: string;
  withdrawalAddress: string;
  timestamp: string;
  proposer: {
    validator: {
      pubkey: string;
    };
  };
};
