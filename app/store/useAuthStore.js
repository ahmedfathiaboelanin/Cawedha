import { create } from "zustand";

export const useAuthStore = create((set) => ({
    token: null,
    user: null,
    isLogedin: false,
    login: (token, user) => {
        
        set({ isLogedin: true, token, user })
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
    },
    logout: () => {
        localStorage.removeItem('token');
        set({ isLogedin: false, token: null })
    },
}));

