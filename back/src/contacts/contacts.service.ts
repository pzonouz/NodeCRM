import { ContactDto } from './contact.dto';
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './contacts.entity';
import { Repository } from 'typeorm';
import { ContactType } from './contactType.enum';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contacRepository: Repository<Contact>,
  ) {}

  async findAll(): Promise<any> {
    return await this.contacRepository.find().then((result) => {
      // console.log(result);
      return result;
    });
  }
  findOne(): Promise<Contact> {
    return this.contacRepository.findOne();
  }
  editOne(id: number, contact: Contact): Promise<any> {
    return this.contacRepository.update(id, contact);
  }
  createOne(contact: Contact): any {
    contact.contactType = ContactType.CUSTOMER;
    this.contacRepository.insert(contact).then((result) => console.log(result));
  }
}
