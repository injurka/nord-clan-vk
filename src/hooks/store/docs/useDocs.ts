import ActionCreatorsApp from '#/store/slices/docs.slice';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useTypesSelector } from '../useTypesSelector';

// Documents Hook Selector / Dispatch
//* ------------------------------------------------------------------------------------------ *//
export const useDocs = () => {
  const dispatch = useDispatch();
  const { reset, loadDocs, removeDoc, setSelectedImage, toggleVisibleImage } = bindActionCreators(
    ActionCreatorsApp.actions,
    dispatch
  );
  const { docs, status, selectedImage, isOpenImage } = useTypesSelector((state) => state.docs);

  return {
    reset,
    isOpenImage,
    selectedImage,
    loadDocs,
    removeDoc,
    setSelectedImage,
    toggleVisibleImage,
    docs,
    status
  };
};
