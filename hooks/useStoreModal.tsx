import { create } from "zustand";

export interface IUseStoreModalStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const useStoreModal = create<IUseStoreModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
