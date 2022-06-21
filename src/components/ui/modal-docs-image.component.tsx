import React from 'react';

import { useDocs } from '#/hooks/store/docs/useDocs';
import Modal from '#/components/ui/modal.component';
import { ModalImageStyle } from '#/styles/components/ui/modal.style';
import Image from 'next/image';

// Modal documents image components
//* ------------------------------------------------------------------------------------------ *//
const ModalDocsImage = () => {
  const { selectedImage, isOpenImage, toggleVisibleImage } = useDocs();

  return (
    <Modal isOpen={isOpenImage} toggleOpen={toggleVisibleImage}>
      <ModalImageStyle>
        <div>
          <Image
            loader={() => selectedImage}
            src={selectedImage}
            layout="fill"
            objectFit="contain"
            alt="-"
          />
        </div>
      </ModalImageStyle>
    </Modal>
  );
};

export default ModalDocsImage;
