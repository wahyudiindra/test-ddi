import { Controller, Get, Query, Request } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Authorize } from 'src/auth/decorators/auth.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FindPostsDto } from './dto/find-posts';

@Authorize()
@ApiBearerAuth()
@ApiTags('Posts')
@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    // 1. Mendapatkan semua post yang ditulis oleh user dengan role “admin”
    // 3. Mengelompokkan post berdasarkan author
    // 5) Format transformasi sesuai permintaan
    @Get()
    findPosts(@Query() query: FindPostsDto, @Request() req) {
        return this.postsService.findPosts(query, req.user);
    }

    // 2. Menghitung total likes untuk semua post
    @Get('likes/total')
    findTotalLikes() {
        return this.postsService.findTotalLikes();
    }

    // 4) User dengan likes terbanyak
    @Get('top-liked-user')
    findUserWithMostLikes() {
        return this.postsService.findUserWithMostLikes();
    }
}
