import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: JSX.Element;
  selector: string;
}

export function Portal({ children, selector }: Props) {
  const ref = useRef<Element>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById(selector) as Element;
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current as Element) : null;
}
