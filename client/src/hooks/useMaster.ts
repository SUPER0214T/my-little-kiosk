import { ItemData } from '../types/master';
import { useGetQueryData } from './useReactQuery';

const useMaster = () => {
  const itemData = useGetQueryData<{ data: ItemData[] }>(['home', 'getMasterAll']);

  const getMasterData = (): ItemData[] => {
    if (itemData) {
      return itemData.data;
    }

    throw new Error('master 정보가 존재하지 않습니다.\nmaster 다운로드를 진행해주세요.');
  };

  const findItemByItemCd = (itemCd = ''): ItemData | undefined => {
    return getMasterData().find((item) => item.ITEM_CD === itemCd);
  };

  return { findItemByItemCd, getMasterData };
};

export default useMaster;
