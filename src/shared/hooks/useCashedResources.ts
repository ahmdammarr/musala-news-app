import { getItem } from "utils/localStorage";
import { EStorageKeys } from "shared/enums/EstorageKeys.enum";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "shared/storeSlices/themeSlice";

export const useCashedResources = () => {
  const [isLoading, setisLoading] = useState(true);
  const dispatch = useDispatch();
  getItem(EStorageKeys.theme).then(({ res }) => {
   if (res) dispatch(setTheme(res));
    setisLoading(false);
  });
  return {
    isLoading,
  };
};
