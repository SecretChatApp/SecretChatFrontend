export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface LoginResponse {
    message: string;
    token: string;
}