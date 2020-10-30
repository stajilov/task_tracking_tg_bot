
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userInfo } from 'os';
import { Repository } from 'typeorm';
import { runInThisContext } from 'vm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  findByUserName(userName: string): Promise<User> {
    return this.usersRepository.findOne({ 
        where: { username: userName} 
    });

  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async createOrInsertByUsername(name : string): Promise<User> {
      try {
        console.log(name);
        const u = await this.usersRepository.findOneOrFail({ where: {username: name } });    
        console.log(u);
        return u;
      } catch (error) {
        console.log("Creating new user")
        const user = new User;
        user.username = name
        console.log(user);
        return await this.usersRepository.save(user);
      }
  }
}