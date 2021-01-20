import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [ContactsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
