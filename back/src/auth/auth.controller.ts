import { RolesGuard } from './roles.guard';
import { userDto } from './../users/user.dto';
import { JwtGuard } from './jwt.guard';
import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalGuard } from './local.guard';
import { Roles } from 'src/users/roles.decorator';
import { Role } from 'src/users/role.enum';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalGuard)
  @Post('login')
  login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtGuard)
  @Get('profile')
  profile(@Request() req: any) {
    return req.user;
  }

  @Roles(Role.Admin)
  @UseGuards(JwtGuard, RolesGuard)
  @Post('register')
  async register(@Body() newUser: userDto) {
    return await this.authService.registerUser(newUser);
  }

  @Roles(Role.Admin)
  @UseGuards(JwtGuard, RolesGuard)
  @Get('users')
  async listUsers() {
    return await this.authService.listUsers();
  }

  @UseGuards(JwtGuard)
  @Post('changePasswordByOwn')
  async changePasswordByOwn(
    @Body('oldPassword') oldPassword: string,
    @Body('newPassword') newPassword: string,
    @Request() req: any,
  ) {
    return await this.authService.changePasswordByOwn(
      req.user,
      oldPassword,
      newPassword,
    );
  }

  @Roles(Role.Admin)
  @UseGuards(JwtGuard, RolesGuard)
  @Post('changePasswordByAdmin')
  async changePasswordByAdmin(
    @Body('username') username: string,
    @Body('newPassword') newPassword: string,
  ) {
    return await this.authService.changePasswordByAdmin(username, newPassword);
  }

  @Roles(Role.Admin)
  @UseGuards(JwtGuard, RolesGuard)
  @Post('removeUserByAdmin')
  async removeUserByAdmin(@Body('username') username: string) {
    if (username === 'admin' || username === 'Admin') {
      return new HttpException('Can not delete admin.', HttpStatus.FORBIDDEN);
    }
    return await this.authService.removeUserByAdmin(username);
  }
}
