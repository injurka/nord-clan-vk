import React from 'react';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '#/hooks/store/user/useUser';
import Link from 'next/link';

//* styles
import {
  HeaderContentStyled,
  HeaderNavStyled,
  HeaderStyled,
  HeaderUlStyled
} from '#/styles/components/ui/header.style';

//* icons
import { GiSun, GiNightSleep } from 'react-icons/gi';
import { IoMdRainy } from 'react-icons/io';
import { MdGTranslate } from 'react-icons/md';
import FooterWaveIcon from '#/assets/svg/wave.svg';
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';

//* i18n
import { useTranslation } from 'next-i18next';
import { COMMON_TNS } from '#/utils/i18n/consts';

import type { ThemeVarious } from '#/contexts/theme';
import useTheme from '#/hooks/useTheme';

const themeIcon = new Map<ThemeVarious, JSX.Element>([
  ['light', <GiSun key={1} />],
  ['dark', <GiNightSleep key={2} />],
  ['blue', <IoMdRainy key={3} />]
]);

// Header components
//* ------------------------------------------------------------------------------------------ *//
const Header: FC = () => {
  const router = useRouter();
  const { isAuth, logout } = useUser();
  const { themeContext, setThemeContext } = useTheme();

  const { t, i18n } = useTranslation([COMMON_TNS], { keyPrefix: 'header' });

  const handleClickAuth = () => {
    if (isAuth) logout();
    router.push('/auth');
  };

  const handleClickLanguage = () => {
    const l = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(l);
    router.push(router.route, undefined, { locale: l, shallow: true });
  };
  const handleClickTheme = () => {
    const arr: ThemeVarious[] = ['blue', 'light', 'dark'];
    const i = arr.indexOf(themeContext);
    setThemeContext(arr[i === arr.length - 1 ? 0 : i + 1]);
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
            <li onClick={handleClickLanguage}>
              <MdGTranslate />
            </li>
            <li onClick={handleClickTheme}>{themeIcon.get(themeContext)}</li>
            <li onClick={handleClickAuth}>{isAuth ? <BiLogOutCircle /> : <BiLogInCircle />}</li>
          </HeaderUlStyled>
        </HeaderNavStyled>
      </HeaderContentStyled>
      <FooterWaveIcon />
    </HeaderStyled>
  );
};

export default Header;
