/* eslint-disable @emotion/no-vanilla */
import React from 'react';
import type { FC } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDocs } from '#/hooks/store/docs/useDocs';
import { css } from '@emotion/css';
import DocsItem from './docs-item.component';
import ModalDocsImage from '../ui/modal-docs-image.component';

// Document items list components
//* ------------------------------------------------------------------------------------------ *//
const DocsList: FC = () => {
  const { docs } = useDocs();

  return (
    <>
      <TransitionGroup
        mode="out-in"
        className={css`
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 0px;
          margin: 0px;
          overflow: hidden;
          border-radius: 10px;
        `}>
        {docs?.map((item) => {
          return (
            <CSSTransition
              key={item.id}
              timeout={250}
              classNames="list-transition"
              unmountOnExit
              mountOnEnter>
              <DocsItem key={item.id} {...item} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      <ModalDocsImage />
    </>
  );
};

export default DocsList;
