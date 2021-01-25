import { Contact } from './contacts/contacts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [ContactsModule, TypeOrmModule.forRoot({ entities: [Contact] })],
  controllers: [],
  providers: [],
})
export class AppModule {}
