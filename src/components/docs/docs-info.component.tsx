import React from 'react';
import type { FC } from 'react';

import { calculateSize } from '#/utils/calculateSize';
import type { DocsItem } from '#/store/slices/docs.slice';
import { DocsInfoStyle } from '#/styles/components/docs/docs-info.style';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { DOCUMENTS_TNS } from '#/utils/i18n/consts';

// Document item info components
//* ------------------------------------------------------------------------------------------ *//
const DocsItemInfo: FC<DocsItem> = (props: DocsItem) => {
  const { size, date, title, ext } = props;

  const resSize = calculateSize(size);
  const { locale } = useRouter();
  const { t } = useTranslation([DOCUMENTS_TNS], { keyPrefix: 'docs.info' });

  return (
    <DocsInfoStyle>
      <div>{title}</div>

      <p>
        {t('fileType')} {ext}
      </p>
      <p>
        {t('fileSize')} {resSize.value} {resSize.type}
      </p>
      <p>
        {t('fileDateAdded')}{' '}
        {dayjs
          .unix(date)
          .locale(locale || 'en')
          .fromNow()}
      </p>
    </DocsInfoStyle>
  );
};

export default DocsItemInfo;
