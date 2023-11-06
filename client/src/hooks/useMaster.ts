import { ItemData } from '../types/master';
import { useAppSelector } from './useStore';

const useMaster = () => {
  const { itemData } = useAppSelector((state) => state.masterReducer);

  const findItemByItemCd = (itemCd: string = ''): ItemData | undefined => {
    return itemData.find((item) => item.ITEM_CD === itemCd);
  };

  return { findItemByItemCd };
};

export default useMaster;
