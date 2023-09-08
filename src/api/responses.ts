export interface ApiResponse<ApiResponseData> {
    code: number; // The HTTP Response code
    data: ApiResponseData; // Typed endpoint-specific data
    error: string; // Any error if present, else ""
    success: boolean; // If the request was successful
    timestamp: number; // Timestamp of request initiation
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
