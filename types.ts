export type RoutesType = {
    Icon: any;
    name:string;
    href:string
}
export type CategoryType = "health" | "general" | "business" | "entertainment" | "science" | "sports" | "technology";
export type ArticleType={
    id: string; 
    source : string[];
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

type User ={
    "id": string,
    "mailId": string,
    "dateOfBirth": string,
    "gender": "male" | "female",
    "userName": string,
    "urlToImage":string,
    "languages": string[],
    "region": string[],
    "topicsOfInterest": string [],
    "followers": string[],
    "following": string[],
    "bookmarks": string[]
}