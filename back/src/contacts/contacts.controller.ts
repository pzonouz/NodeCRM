import { ContactDto } from './contact.dto';
import { ContactsService } from './contacts.service';
import {
  Body,
  Controller,
  Delete,
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
  async editOne(
    @Param('id') id: number,
    @Body() contact: ContactDto,
  ): Promise<any> {
    return await this.contactsService
      .editOne(id, contact)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err.detail;
      });
  }
  @Delete('/delete/:id')
  async deleteOne(@Param('id') id: number) {
    return await this.contactsService
      .deleteOne(id)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err.detail;
      });
  }

  @UsePipes(ValidationPipe)
  @Post('/create')
  async createOne(@Body() contact: ContactDto): Promise<any> {
    return await this.contactsService
      .createOne(contact)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err.detail;
      });
  }
}
