import { AuthService } from './auth.service';
import { Constants } from './../Constantas';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Constants.JwtConstants.secretOrKey,
    });
  }

  validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
