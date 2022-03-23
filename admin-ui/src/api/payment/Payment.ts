import { User } from "../user/User";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  userId?: User | null;
};
