export interface AuthProvider {
    login: (credentials: { username: string; password: string }) => Promise<void>;
    checkError: (error: { status: number }) => Promise<void>;
    checkAuth: () => Promise<void>;
    logout: () => Promise<void>;
    getIdentity: () => Promise<{ id: string; fullName: string }>;
}