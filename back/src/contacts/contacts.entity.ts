import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { ContactType } from './contactType.enum';

@Entity()
@Unique(['phoneNumber'])
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @Column()
  contactType: ContactType;
}
