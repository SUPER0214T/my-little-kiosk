import { useAppSelector } from './useStore';
import useMaster from './useMaster';

const useBasket = () => {
  const { basketList } = useAppSelector((state) => state.basketReducer);
  const { findItemByItemCd } = useMaster();

  /**
   * @todo 하나의 가격을 구하는 빼내서 재사용 가능할 듯
   */
  const getTotalBasketAmount = () => {
    return basketList.reduce((sum, basketItem) => {
      const itemInfo = findItemByItemCd(basketItem.itemCd);
      if (!itemInfo) {
        console.error(`basket ${basketItem.itemCd}(itemCd)의 정보가 master에 존재하지 않습니다.`);

        return sum + 0;
      }

      return sum + itemInfo?.ITEM_PRIC * basketItem.qty;
    }, 0);
  };

  return { getTotalBasketAmount };
};

export default useBasket;
