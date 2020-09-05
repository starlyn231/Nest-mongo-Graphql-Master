import { Document } from 'mongoose';

export interface Cat extends Document {
  readonly name: string;
  readonly age: number;
  readonly color: string;
  readonly weight: string;
  readonly food: string;
}
