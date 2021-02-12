import { RolesGuard } from './auth/roles.guard';
import { Contact } from './contacts/contacts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    ContactsModule,
    PassportModule,
    TypeOrmModule.forRoot({ entities: [Contact, User] }),
    AuthModule,
    UsersModule,
  ],
  providers: [],
})
export class AppModule {}
