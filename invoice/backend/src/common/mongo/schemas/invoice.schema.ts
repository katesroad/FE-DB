import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InvoiceDoc = Invoice & Document;

class Address {
  street: string;
  city: string;
  postcode: string;
  country: string;
}

class Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

@Schema({ versionKey: false, timestamps: true })
export class Invoice {
  // coordindate id in data
  @Prop({ required: true, unique: true })
  tag: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: 1 })
  paymentTerms: number;

  @Prop({ required: true })
  clientName: string;

  @Prop({ required: true })
  clientEmail: string;

  @Prop({ required: true })
  senderAddress: Address;

  @Prop({ required: true })
  clientAddress: Address;

  @Prop()
  items: Item[];

  @Prop({ required: true })
  total: number;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
