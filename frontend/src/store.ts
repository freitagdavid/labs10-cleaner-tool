import { create } from 'zustand'

interface UserStore {
    loggedIn: boolean;
    role: 'none' | 'manager' | 'user';
    subscription: number;
    connected: boolean;
    setConnected: (connected: boolean) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    loggedIn: false,
    role: 'none',
    subscription: 0,
    connected: false,
    setLogin: () => set((state) => ({ loggedIn: !state.loggedIn })),
    setRole: (role: UserStore['role']) => set({ role }),
    setSubscription: (subscription: number) => set({ subscription }),
    setConnected: (connected: boolean) => set({ connected }),
}))