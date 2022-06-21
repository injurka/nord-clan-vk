import React from 'react';
import type { FC } from 'react';

import { calculateSize } from '#/utils/calculateSize';
import type { DocsItem } from '#/store/slices/docs.slice';
import { DocsInfoStyle } from '#/styles/components/docs/docs-info.style';
import dayjs from 'dayjs';

// Document item info components
//* ------------------------------------------------------------------------------------------ *//
const DocsItemInfo: FC<DocsItem> = (props: DocsItem) => {
  const { size, date, title, ext } = props;

  const resSize = calculateSize(size);

  return (
    <DocsInfoStyle>
      <div>{title}</div>
      <p>Тип файла {ext}</p>
      <p>
        Размер файла {resSize.value} {resSize.type}
      </p>
      <p>Добавлено {dayjs.unix(date).fromNow()}</p>
    </DocsInfoStyle>
  );
};

export default DocsItemInfo;
