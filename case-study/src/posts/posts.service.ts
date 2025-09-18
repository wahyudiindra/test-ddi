import { Injectable } from '@nestjs/common';
import { IUser } from 'src/constants/IUser';
import { Role } from 'src/constants/role';
import { FindPostsDto } from './dto/find-posts';
import { USERS } from 'src/auth/auth.service';

const POSTS = [
    { id: 1, title: 'First Post', authorId: 1, content: 'Hello World', likes: 10 },
    { id: 2, title: 'Second Post', authorId: 2, content: 'JavaScript Tips', likes: 15 },
    { id: 3, title: 'Third Post', authorId: 1, content: 'ES6 Features', likes: 20 },
];
@Injectable()
export class PostsService {
    findPosts({ filterByAuthorId, includeUser }: FindPostsDto, user: IUser) {
        let posts = POSTS;

        if (user.role !== Role.ADMIN || !!filterByAuthorId)
            posts = posts.filter(({ authorId }) => authorId === (user.role === Role.USER ? user.id : filterByAuthorId));

        return !includeUser
            ? posts
            : posts.map((post) => {
                  const user = USERS.filter(({ id }) => id === post.authorId)[0] || null;
                  return { ...post, user };
              });
    }

    findTotalLikes() {
        return POSTS.reduce((sum, p) => sum + (p.likes ?? 0), 0);
    }

    findUserWithMostLikes() {
        const totals = POSTS.reduce<Record<number, number>>((acc, p) => {
            acc[p.authorId] = (acc[p.authorId] ?? 0) + (p.likes ?? 0);
            return acc;
        }, {});

        let topAuthorId: number | null = null;
        let topLikes = -Infinity;
        for (const [k, v] of Object.entries(totals)) {
            const val = v as number;
            if (val > topLikes) {
                topLikes = val;
                topAuthorId = Number(k);
            }
        }

        return {
            topLikes,
            topAuthor: USERS.filter(({ id }) => id === topAuthorId)[0] || null,
        };
    }
}
