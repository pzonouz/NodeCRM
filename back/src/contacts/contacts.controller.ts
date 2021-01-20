import { ContactsService } from './contacts.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Contact } from './contacts.model';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}
  @Get('')
  findAll(): Contact[] {
    return this.contactsService.findAll();
  }
  @Post('/edit/:id')
  editOne(@Param('id') id: number, @Body() contact: Contact): Contact {
    return this.contactsService.editOne(id, contact);
  }
}
