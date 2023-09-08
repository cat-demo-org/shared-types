export interface ApiPostRequest {}
export interface ApiGetRequest {}

export interface ApiPost_Register extends ApiPostRequest {
    username: string;
    password: string;
    verifyPass: string;
}

export interface ApiPost_Login extends ApiPostRequest {
    username: string;
    password: string;
}

export interface ApiPost_Logout extends ApiPostRequest {}

export interface ApiGet_GetPosts extends ApiGetRequest {
    posts: string[];
}

export interface ApiPost_NewPost extends ApiGetRequest {
    title: string;
    content: string;
}
