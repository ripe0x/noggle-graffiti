export type Graffiti = {
  feeRecipient: string;
  id: number;
  graffiti: string;
  slot: string;
  proposerId: string;
  proposer: {
    validator: {
      pubkey: string;
    };
  };
};
