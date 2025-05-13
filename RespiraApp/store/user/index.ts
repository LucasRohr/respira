import { create } from 'zustand';

import type { UserStore } from './types';

const useUserStore = create<UserStore>(set => ({
  user: undefined,
  setLoggedUser: user => set({ user }),
  removeLoggedUSer: () => set(() => ({ user: undefined })),
}));

export { useUserStore };
