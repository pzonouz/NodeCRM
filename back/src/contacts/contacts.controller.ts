import { Contact } from './contacts.entity';
import { ContactDto } from './contact.dto';
import { ContactsService } from './contacts.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}
  @Get('')
  async findAll(): Promise<any> {
    return await this.contactsService.findAll();
  }

  @Put('/edit/:id')
  editOne(@Param('id') id: number, @Body() contact: ContactDto): any {
    return this.contactsService.editOne(id, contact);
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  createOne(@Body() contact: ContactDto): any {
    // return this.contactsService.createOne(contact);
    console.log(this.contactsService.createOne(contact));
  }
}
