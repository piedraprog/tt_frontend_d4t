export interface ApiResponse {
    info: ResponseInfo;
    results: any[];
}

interface ResponseInfo {
    count: number;
    pages: number;
    next: string;
    prev: string | null; 
}


