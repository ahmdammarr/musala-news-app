import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TRootState } from '../../shared/types/TRootState.type';
import type { RootState } from '../store';


export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
