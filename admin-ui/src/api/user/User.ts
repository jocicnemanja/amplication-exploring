import { Payment } from "../payment/Payment";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  payments?: Array<Payment>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
