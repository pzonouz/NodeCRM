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
  async editOne(id: number, contact: Contact): Promise<any> {
    await this.contacRepository.update(id, contact);
  }
  async createOne(contact: Contact): Promise<any> {
    contact.contactType = ContactType.CUSTOMER;
    this.contacRepository.create(contact);
    await this.contacRepository.insert(contact);
  }
  async deleteOne(id: number): Promise<any> {
    await this.contacRepository.delete(id);
  }
}
