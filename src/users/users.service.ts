import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'John Doe', username: 'john', password: 'password1' },
    { id: 2, name: 'Jane Smith', username: 'jane', password: 'password2' },
  ];

  async findByUsername(username: string): Promise<User> | undefined {
    return this.users.find((user) => user.username === username);
  }
}
