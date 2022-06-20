import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TRootState } from 'shared/types/TRootState.type';

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
