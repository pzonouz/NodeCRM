import { TasksDto } from './tasks.dto';
import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @UseGuards(JwtGuard)
  @Get('')
  async findAll(@Request() req: any) {
    return await this.taskService.findAll(req.user);
  }

  @UsePipes(ValidationPipe)
  @UseGuards(JwtGuard)
  @Post('create')
  async create(@Body() task: TasksDto, @Request() req: any) {
    const date = new Date(Date.now());
    return await this.taskService.create(task, date, req.user);
  }
}
