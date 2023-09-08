export interface ApiResponse<ApiResponseData> {
    code: number;
    data: ApiResponseData;
    error: string;
    success: boolean;
    timestamp: number;
}
export interface ApiResponseData_Register {
    userUid: number;
}
export interface ApiResponseData_Login {
    userUid: number;
}
export interface ApiResponseData_Logout {
    success: boolean;
}
export interface ApiResponseData_GetPosts {
    posts: string[];
}
export interface ApiResponseData_NewPost {
    postUuid: string;
}
