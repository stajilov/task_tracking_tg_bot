
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

  createOrInsertByUsername(name : string): Promise<User> {
      try {
        return this.usersRepository.findOneOrFail({ username: name });
      } catch (error) {
        console.log(error)
      }
      finally {
        const user = new User;
        user.username = name
        return this.usersRepository.save(user);
      }
  }
}