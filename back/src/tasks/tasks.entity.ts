import { TaskType } from './taskType.enum';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dateIssued: Date;

  @Column()
  status: TaskType;

  @ManyToOne(() => User, (user) => user.userId)
  user: User;
}
