import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  element?: HTMLElement;
  children: ReactNode;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Portal: FC<PortalProps> = ({ children, element = document.body }) => createPortal(children, element);
