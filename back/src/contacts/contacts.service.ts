import { Injectable } from '@nestjs/common';
import { Contact } from './contacts.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ContactsService {
  private _contacts: Contact[] = [
    {
      id: uuidv4(),
      firstName: 'Peyman',
      lastName: 'Khalili',
      phoneNumber: '09148998933',
      address: 'ardabil',
      image: '../../../assets/peyman.jpg',
    },
    {
      id: uuidv4(),
      firstName: 'Farzan',
      lastName: 'Fathi',
      phoneNumber: '09902173612',
      address: 'ardabil',
      image: '../../../assets/peyman.jpg',
    },
    {
      id: uuidv4(),
      firstName: 'Arman',
      lastName: 'Khalili',
      phoneNumber: '00000000',
      address: 'ardabil',
      image: '../../../assets/peyman.jpg',
    },
  ];
  findAll(): Contact[] {
    return this._contacts;
  }
  editOne(id: number, contact: Contact): Contact {
    const index = this._contacts.findIndex((x) => x.id === id);
    return Object.assign(this._contacts[index], contact);
  }
}
