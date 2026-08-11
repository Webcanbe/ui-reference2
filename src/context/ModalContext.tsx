'use client';

import { useModal } from '@/src/hooks/useModal';
import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

const DEFAULT_VIDEO_URL =
  'https://www.youtube.com/embed/LuKAeNC8e3c?si=dNprxE8hkadUeDvf';

interface ModalContextType {
  videoModal: {
    isOpen: boolean;
    videoUrl: string | null;
    openModal: (videoUrl?: string) => void;
    closeModal: () => void;
    modalRef: React.RefObject<HTMLDialogElement | null>;
    contentRef: React.RefObject<HTMLDivElement | null>;
  };
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const baseModal = useModal({
    closeOnEscape: true,
    closeOnOverlayClick: true,
  });

  const openModal = useCallback(
    (url?: string) => {
      setVideoUrl(url ?? DEFAULT_VIDEO_URL);
      baseModal.openModal();
    },
    [baseModal]
  );

  const closeModal = useCallback(() => {
    baseModal.closeModal();
    setVideoUrl(null);
  }, [baseModal]);

  const value: ModalContextType = {
    videoModal: {
      ...baseModal,
      videoUrl,
      openModal,
      closeModal,
    },
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

export default ModalProvider;
