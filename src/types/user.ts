import { Document } from 'mongoose'

interface Address {
  addr1: string;
  addr2: string;
  sity: string;
  country: string;
  state: string;
  zip: number;
}

export interface User extends Document {
  name: string;
  readonly password: string;
  seller: boolean;
  address: Address;
  created: Date;
}