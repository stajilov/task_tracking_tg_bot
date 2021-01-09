import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreatedUserDto } from '../users/created-user.dto';
import { CreateTaskDto } from '../tasks/create-task.dto';
import { CreateUserDto } from '../users/create-user.dto';
import bcrypt = require("bcrypt");

enum PostgresErrorCode {
  UniqueViolation = '23505'
}


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  
    ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(username);
    const passMathes = await bcrypt.compare(pass, user.password)
    if (user && passMathes) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(user : CreateUserDto): Promise<CreatedUserDto> {
    console.log(user);
    try {
      if (this.validatePassEmail(user)) {
        const encryptedPassword = await bcrypt.hash(user.password, 10);
        return await this.usersService.createUser(user.email, user.username, encryptedPassword);
      }
    } catch(error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new HttpException('User with that email or username already exists', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
   
  }

  validatePassEmail(user): boolean {
    return (
      !!user.password &&
      user.password.length <= 24 &&
      user.password.length >= 8 &&
      !!user.email
    );
  }








}