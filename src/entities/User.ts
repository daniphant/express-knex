export class User {
  readonly id: number;
  name: string;
  email: string;
  password: string;

  createdAt: Date;
  updatedAt: Date;

  constructor(user: Omit<User, "id" | "createdAt" | "updatedAt">) {
    Object.assign(this, user);
  }
}

export const selectable = ["id", "name", "email", "created_at", "updated_at"];
