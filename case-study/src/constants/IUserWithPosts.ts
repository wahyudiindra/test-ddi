export interface IUserWithPosts {
    userId: number;
    userName: string;
    userEmail: string;
    posts: { postId: number; title: string; likes: number }[];
    totalLikes: number;
}
