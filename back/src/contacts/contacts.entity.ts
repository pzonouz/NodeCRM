import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ContactType } from './contactType.enum';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

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
