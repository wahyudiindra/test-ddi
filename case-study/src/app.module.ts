import { Module } from '@nestjs/common';
import { Case1Module } from './case-1/case-1.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        AuthModule,
        Case1Module,
        PostsModule,
    ],
})
export class AppModule {}
