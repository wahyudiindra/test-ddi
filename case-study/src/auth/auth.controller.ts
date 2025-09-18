import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { SignInDto } from './dto/sign-in.dto';
import { Authorize, Public } from './decorators/auth.decorator';

@Authorize()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('generate-access-token')
    @HttpCode(HttpStatus.OK)
    signIn(@Body() _data: SignInDto, @Request() req) {
        return this.authService.signIn(req.user);
    }

    @Get('me')
    @ApiBearerAuth()
    signMe(@Request() req) {
        return req.user;
    }
}
