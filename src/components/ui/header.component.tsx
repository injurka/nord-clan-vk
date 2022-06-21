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
import { useRouter } from 'next/router';
import { useUser } from '#/hooks/store/user/useUser';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { COMMON_TNS } from '#/utils/i18n/consts';

// Header components
//* ------------------------------------------------------------------------------------------ *//
const Header: FC = () => {
  const { isAuth, logout } = useUser();
  const router = useRouter();

  const { t } = useTranslation([COMMON_TNS], { keyPrefix: 'header' });

  const handleClickAuth = () => {
    if (isAuth) logout();
    router.push('/auth');
  };

  return (
    <HeaderStyled>
      <HeaderContentStyled>
        <HeaderNavStyled>
          <HeaderUlStyled>
            <li>
              <Link href="/">
                <a>{t('tabs.docs')}</a>
              </Link>
            </li>
            <li>
              <MdGTranslate />
            </li>
            <li>
              <GiSun />
            </li>
            <li onClick={handleClickAuth}>{isAuth ? <BiLogOutCircle /> : <BiLogInCircle />}</li>
          </HeaderUlStyled>
        </HeaderNavStyled>
      </HeaderContentStyled>
      <FooterWaveIcon />
    </HeaderStyled>
  );
};

export default Header;
