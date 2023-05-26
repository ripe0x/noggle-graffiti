export type Graffiti = {
  block: string;
  feeRecipient: string;
  id: number;
  graffiti: string;
  slot: string;
  proposerId: string;
  timestamp: string;
  proposer: {
    validator: {
      pubkey: string;
    };
  };
};
