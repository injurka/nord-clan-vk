import { ModalStyle } from '#/styles/components/ui/modal.style';
import { Portal } from '#/utils/portal';
import React, { useEffect } from 'react';

interface Props {
  children: JSX.Element;
  isOpen: boolean;
  toggleOpen: (value: boolean) => void;
  selector?: string;
}

// Modal components
//* ------------------------------------------------------------------------------------------ *//
export default function Modal(props: Props) {
  const { children, selector = 'modal', isOpen, toggleOpen } = props;

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  return isOpen ? (
    <Portal selector={selector}>
      <ModalStyle onClick={() => toggleOpen(false)}> {children}</ModalStyle>
    </Portal>
  ) : null;
}
