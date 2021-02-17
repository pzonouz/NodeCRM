import { IsNotEmpty } from 'class-validator';
export class TasksDto {
  @IsNotEmpty()
  name: string;
}
