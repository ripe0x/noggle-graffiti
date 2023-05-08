export type Graffiti = {
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
