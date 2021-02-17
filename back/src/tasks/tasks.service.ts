import { TaskType } from './taskType.enum';
import { TasksDto } from './tasks.dto';
import { Task } from './tasks.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasks: Repository<Task>,
  ) {}
  async findAll(user: any) {
    if (user.username === 'admin') {
      return await this.tasks.find();
    }
    return await this.tasks.find({ user: user.userId });
  }
  async create(task: TasksDto, date: Date, user: any) {
    // console.log(;
    this.tasks.create({
      name: task.name,
      dateIssued: date,
      status: TaskType.DOING,
      user: user,
    });
    return await this.tasks.insert({
      name: task.name,
      dateIssued: date,
      status: TaskType.DOING,
      user: user,
    });
  }
}
