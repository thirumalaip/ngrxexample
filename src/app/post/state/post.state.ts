import { Post } from "src/app/model/post.model";

export interface PostState {
    postList: Post[]
}

export const initialState:PostState = {
    postList: [
        {
            id: '1',
            title: 'test title1',
            description: 'test description'
        },
        {
            id: '2',
            title: 'test title2',
            description: 'test description'
        }
    ]
}