import React from 'react';

//* Styles
import { MainStyled } from '#/styles/layouts/main.style';

//* Component
import Header from '#/components/ui/header.component';

//* Custom hooks

//* Iterface
interface PageProps {
  children: React.ReactNode;
}

/// ///////////////////////////////////////////////////////////////////////////////////
function MainLayout({ children }: PageProps) {
  return (
    <>
      <Header />
      <MainStyled>{children}</MainStyled>
    </>
  );
}
export default MainLayout;
