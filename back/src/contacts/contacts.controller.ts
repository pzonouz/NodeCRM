import { RolesGuard } from './../auth/roles.guard';
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
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt.guard';
import { Roles } from 'src/users/roles.decorator';
import { Role } from 'src/users/role.enum';

@UseGuards(JwtGuard)
@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}
  @Get('')
  async findAll(): Promise<any> {
    return await this.contactsService.findAll();
  }
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
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
