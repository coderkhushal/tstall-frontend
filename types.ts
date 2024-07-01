import { string } from "zod";

export type RoutesType = {
    Icon: any;
    name:string;
    href:string
}
export type CategoryType = "health" | "general" | "business" | "entertainment" | "science" | "sports" | "technology";
export type ArticleType={
    id: string; 
    source ?: {
        id: string, 
        name : string
    };
    publishTime : string;
    category : CategoryType;
    author:string;
    description:string;
    title: string;
    titleAndAuthor: string;
    url:string;
    urlToImage?: string;
    content: string;
    usersLiked: string[]
    usersDisliked: string[],
    numLikes : number;
    numDislikes : number;
    topics: string[];
}

export type UserType ={
    "id": string,
    "mailId": string,
    "dateOfBirth": string,
    "gender": "male" | "female" | "others",
    "userName": string,
    "urlToImage":string,
    "languages": string[],
    "region": string[],
    "topicsOfInterest": string [],
    "followers": string[],
    "following": string[],
    "bookmarks": string[]
}
export type CommentType = {
    id: string; 
    userName: string;
    urlToImage?: string;
    content: string;
    replyInfo: replyInfoType[]
    timeStamp:string
   
}

export type Storytype={
    id: string;
    title: string;
    urlToImage?: string;
    url: string;
    description: string;
    author?: string;
    publishTime: string;
}
export type StoryDataType={
    title: string;
    urlToImage: string;
    stories: Storytype[]
}

export type FeedType= ArticleType
export type replyInfoType = Pick<CommentType, "id" | "userName" | "content" | "urlToImage" | "timeStamp">;
export type LanguageType={
    code:string;
    language:string;
}

export type CurrentAffairTopicsType= Record<string, string>