import React from 'react';
import type { FC } from 'react';

import { DocsItemStyled } from '#/styles/components/docs/docs.style';
import type { DocsItem as IDocsItem } from '#/store/slices/docs.slice';
import DocsItemImage from './docs-image.component';
import DocsItemControl from './docs-control.component';
import DocsItemInfo from './docs-info.component';

// Document item components
//* ------------------------------------------------------------------------------------------ *//
const DocsItem: FC<IDocsItem> = (props: IDocsItem) => {
  return (
    <DocsItemStyled>
      <div className="docs-item__wrapper">
        <DocsItemImage {...props} />
        <DocsItemInfo {...props} />
        <DocsItemControl {...props} />
      </div>
    </DocsItemStyled>
  );
};

export default DocsItem;
