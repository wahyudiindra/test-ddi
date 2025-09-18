import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IUser } from 'src/constants/IUser';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.SECRET_JWT as string,
        });
    }

    async validate(payload: any): Promise<IUser> {
        return {
            id: payload.id,
            email: payload.email,
            name: payload.name,
            role: payload.role,
        };
    }
}
