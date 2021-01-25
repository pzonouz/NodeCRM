import { IsNotEmpty, Matches } from 'class-validator';
import { ContactType } from './contactType.enum';

export class ContactDto {
  id: number;

  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  address: string;
  @Matches(/^(\+98|0)?9\d{9}$/g)
  phoneNumber: string;
  contactType: ContactType;
}
