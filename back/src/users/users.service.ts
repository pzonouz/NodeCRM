import { userDto } from './user.dto';
import { User } from './user.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    this.createAdminUser();
  }
  async findAll() {
    return await this.userRepository.find({ role: 'user' });
  }
  async findOne(username: string) {
    return await this.userRepository.findOne({ username });
  }
  async findOneById(userId: number) {
    return await this.userRepository.findOne({ userId });
  }
  async create(user: userDto) {
    if (user.username === 'Admin' || user.username === 'admin') {
      throw new HttpException(
        'Username cannot be an admin or Admin',
        HttpStatus.FORBIDDEN,
      );
    }
    this.userRepository.create({
      username: user.username,
      password: user.password,
      role: 'user',
    });
    try {
      await this.userRepository.insert({
        username: user.username,
        password: user.password,
        role: 'user',
      });
    } catch (error) {
      console.log(error.detail);
      throw new HttpException(error.detail, HttpStatus.FORBIDDEN);
    }
  }
  async changePassword(user: userDto, password: string) {
    return await this.userRepository.update(
      { username: user.username },
      { password: password },
    );
  }
  async createAdminUser() {
    this.userRepository.create({
      username: 'admin',
      password: 'password',
      role: Role.Admin,
    });
    const adminUser = await this.userRepository.findOne({ username: 'admin' });
    if (!adminUser) {
      await this.userRepository.insert({
        username: 'admin',
        password:
          '$2b$10$zD.aO4iMT54mdetcLpa5ueIYWgQEVLdo7elZ5qWNdauOwzXwJXoDC',
        role: Role.Admin,
      });
    }
  }
  async removeUserByAdmin(username: string) {
    return await this.userRepository.delete({ username: username });
  }
}
