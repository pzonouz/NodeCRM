import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ContactType } from './contactType.enum';

export class ContactDto {
  id: number;

  @IsEmail()
  email: string;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  address: string;
  @Length(11)
  phoneNumber: string;
  contactType: ContactType;
}
