import { CombineBasketInfo } from '../pages/Checkout/Checkout';

/**
 * @todo 어차피 baksetList를 useBasket을 가져오면서 전달하거나 내부 함수들에게 인지로 전달해야 함.
 *   그럴 바에 그냥 useBasket 가져오면서 전달해주면 더 깔끔한 거 아닌가? 마치 constructor에서 가져온 거 처럼
 */
const useBasket = () => {
  const getTotalBasketAmount = (basketItemInfoList: CombineBasketInfo[]) => {
    return basketItemInfoList.reduce((sum, basketItem) => {
      return sum + basketItem.ITEM_PRIC * basketItem.qty;
    }, 0);
  };

  return { getTotalBasketAmount };
};

export default useBasket;
