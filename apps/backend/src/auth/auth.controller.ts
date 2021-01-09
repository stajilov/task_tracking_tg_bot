
import { Controller, Request, Post, Get, UseGuards, Body, Res} from '@nestjs/common';
import { CreateUserDto } from '../users/create-user.dto';
import CreatedUserDto from '../users/created-user.dto';
import { Public } from './auth-general.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { Response } from 'express';

@Controller()
export class AuthController {

  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('auth/signup')
  async signup(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      const userId = await this.authService.signup(createUserDto);
      res.status(200).json(userId);
    } catch (e) {
      res.status(400).json(e.message);
    }
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}