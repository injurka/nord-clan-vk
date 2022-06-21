import React from 'react';
import type { FC } from 'react';

import type { DocsItem } from '#/store/slices/docs.slice';
import { useDocs } from '#/hooks/store/docs/useDocs';
import { MdDeleteForever, MdFileDownload } from 'react-icons/md';
import { DocsControlStyle } from '#/styles/components/docs/docs-control.style';

// Document item control components
//* ------------------------------------------------------------------------------------------ *//
const DocsItemControl: FC<DocsItem> = (props: DocsItem) => {
  const { removeDoc } = useDocs();

  return (
    <DocsControlStyle>
      <div onClick={() => removeDoc(props)} className="controll-item__delete">
        <MdDeleteForever />
      </div>
      <div className="controll-item__download">
        <MdFileDownload />
      </div>
    </DocsControlStyle>
  );
};

export default DocsItemControl;
