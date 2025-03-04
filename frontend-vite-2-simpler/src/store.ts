import { create } from 'zustand'

type UserState = {
    loggedIn: boolean;
    role: string;
    subscription: number;
    connected: boolean;
    setSubscription: (subscription: number) => void;
    setConnected: (connected: boolean) => void;
    setRole: (role: string) => void;
    setLoggedIn: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    loggedIn: false,
    role: 'none',
    subscription: 0,
    connected: false,
    setSubscription: (subscription) => set(() => ({ subscription })),
    setConnected: (connected) => set(() => ({ connected })),
    setRole: (role) => set(() => ({ role })),
    setLoggedIn: () => set((state) => ({loggedIn: !state.loggedIn})),
}))