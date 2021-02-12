import { userDto } from './../users/user.dto';
import { UsersService } from './../users/users.service';
import {
  HttpException,
  Injectable,
  UnauthorizedException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService, private userService: UsersService) {}

  async validateUser(username: string, password: string) {
    const result = await this.userService.findOne(username);
    const isMatch = await bcrypt.compare(password, result.password);
    if (result && isMatch) {
      return result;
    }
    throw new UnauthorizedException();
  }

  login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwt.sign(payload),
    };
  }

  async registerUser(user: any) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    return await this.userService.create(user);
  }

  async listUsers() {
    return await this.userService.findAll();
  }

  async changePasswordByOwn(
    user: userDto,
    oldPassword: string,
    newPassword: string,
  ) {
    const result = await this.userService.findOne(user.username);
    const isMatch = await bcrypt.compare(oldPassword, result.password);
    if (isMatch) {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(newPassword, salt);
      return await this.userService.changePassword(result, hash);
    }
    return new HttpException('Password does not match', HttpStatus.FORBIDDEN);
  }

  async changePasswordByAdmin(username: string, newPassword: string) {
    const result = await this.userService.findOne(username);
    if (result) {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(newPassword, salt);
      return await this.userService.changePassword(result, hash);
    }
    return new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
  async removeUserByAdmin(username: string) {
    return await this.userService.removeUserByAdmin(username);
  }
}
