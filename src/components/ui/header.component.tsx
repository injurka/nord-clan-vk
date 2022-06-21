import React from 'react';
import type { FC } from 'react';
import {
  HeaderContentStyled,
  HeaderNavStyled,
  HeaderStyled,
  HeaderUlStyled
} from '#/styles/components/ui/header.style';
import FooterWaveIcon from '#/assets/svg/wave.svg';

import { MdGTranslate } from 'react-icons/md';
import { GiSun } from 'react-icons/gi';
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';
import { useUser } from '../../hooks/store/user/useUser';

// Header components
//* ------------------------------------------------------------------------------------------ *//
const Header: FC = () => {
  const { isAuth } = useUser();

  return (
    <HeaderStyled>
      <HeaderContentStyled>
        <HeaderNavStyled>
          <HeaderUlStyled>
            <li>
              <span>NV</span>
            </li>
            <li>
              <MdGTranslate />
            </li>
            <li>
              <GiSun />
            </li>
            <li>{isAuth ? <BiLogInCircle /> : <BiLogOutCircle />}</li>
          </HeaderUlStyled>
        </HeaderNavStyled>
      </HeaderContentStyled>
      <FooterWaveIcon />
    </HeaderStyled>
  );
};

export default Header;
