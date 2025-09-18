import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { IUser } from 'src/constants/IUser';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/constants/role';

export const USERS: IUser[] = [
    { id: 1, name: 'John', email: 'john@example.com', role: Role.ADMIN },
    { id: 2, name: 'Jane', email: 'jane@example.com', role: Role.USER },
    { id: 3, name: 'Bob', email: 'bob@example.com', role: Role.USER },
];

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    validateUser(email: string, password: string): IUser {
        const user = USERS.find((user) => user.email === email);
        if (!user) throw new UnauthorizedException();

        return user;
    }

    async signIn(user: IUser) {
        return { accessToken: this.jwtService.sign(user), user };
    }
}
