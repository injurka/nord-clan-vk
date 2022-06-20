import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, RootDispatch } from '#/store/store';
import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<RootDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
