import React from 'react';
import type { FC } from 'react';

import type { DocsItem } from '#/store/slices/docs.slice';
import { useDocs } from '#/hooks/store/docs/useDocs';
import { MdDeleteForever, MdFileDownload } from 'react-icons/md';
import { DocsControlStyle } from '#/styles/components/docs/docs-control.style';
import { api } from '#/utils/api';

// Document item control components
//* ------------------------------------------------------------------------------------------ *//
const DocsItemControl: FC<DocsItem> = (props: DocsItem) => {
  const { id: docId, owner_id: ownerId, url } = props;
  const { removeDoc } = useDocs();

  const handleClickRemoveDoc = () => {
    api().docs.delete({ doc_id: docId, owner_id: ownerId });
    removeDoc(props);
  };

  const handleClickDownloadDoc = () => {
    const element = document.createElement('a');
    element.setAttribute('href', url);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <DocsControlStyle>
      <div onClick={handleClickRemoveDoc} className="controll-item__delete">
        <MdDeleteForever />
      </div>
      <div onClick={handleClickDownloadDoc} className="controll-item__download">
        <a href={url} download>
          <MdFileDownload />
        </a>
      </div>
    </DocsControlStyle>
  );
};

export default DocsItemControl;
