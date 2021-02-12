import { RolesGuard } from './roles.guard';
import { Constants } from './../Constantas';
import { UsersModule } from './../users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: Constants.JwtConstants.secretOrKey,
      signOptions: { expiresIn: `${60 * 60 * 24}s` },
    }),
    UsersModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, RolesGuard],
  controllers: [AuthController],
})
export class AuthModule {}
