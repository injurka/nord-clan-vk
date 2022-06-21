import React from 'react';
import type { FC } from 'react';

import Image from 'next/image';
import type { DocsItem } from '#/store/slices/docs.slice';

import { FileImageStyle } from '#/styles/components/docs/docs-image.style';
import blankFile from '#/assets/image/blank.png';
import { useDocs } from '#/hooks/store/docs/useDocs';

// Document item image components
//* ------------------------------------------------------------------------------------------ *//
const DocsItemImage: FC<DocsItem> = (props: DocsItem) => {
  const { setSelectedImage, toggleVisibleImage } = useDocs();

  const { preview, ext, url } = props;
  const image = preview?.photo.sizes[2];

  const handleOnClick = () => {
    setSelectedImage(url);
    toggleVisibleImage(true);
  };

  return (
    <FileImageStyle>
      {image ? (
        <Image
          className="img"
          onClick={handleOnClick}
          loader={() => image.src}
          src={image.src}
          layout="fill"
          objectFit="cover"
          alt="-"
        />
      ) : (
        <>
          <Image src={blankFile} layout="fill" objectFit="contain" alt="-" />
          <span className="ext-name">{ext}</span>
        </>
      )}
    </FileImageStyle>
  );
};

export default DocsItemImage;
