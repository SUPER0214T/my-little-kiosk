import { renderHook } from '@testing-library/react';
import useBasket from '../useBasket';
import { combineBasketInfo } from '../../pages/Checkout/Checkout';

const itemDataList = [
  {
    IMG_URL: 'https://picsum.photos/id/736/200/300',
    ITEM_CD: '37',
    ITEM_NM: '티셔츠 237',
    ITEM_PRIC: 1500,
  },
  {
    IMG_URL: 'https://picsum.photos/id/15/200/300',
    ITEM_CD: '86',
    ITEM_NM: '원피스 886',
    ITEM_PRIC: 6364,
  },
  {
    IMG_URL: 'https://picsum.photos/id/523/200/300',
    ITEM_CD: '95',
    ITEM_NM: '바지 495',
    ITEM_PRIC: 3768,
  },
  {
    IMG_URL: 'https://picsum.photos/id/492/200/300',
    ITEM_CD: '96',
    ITEM_NM: '원피스 196',
    ITEM_PRIC: 300,
  },
];

describe('useBasket', () => {
  it('장바구니에 1500원 상품이 1개 있다면 1500이 반환된다.', () => {
    const basketList = [
      {
        itemCd: '37',
        qty: 1,
      },
    ];

    const basketItemInfoList = combineBasketInfo(basketList, itemDataList);

    const { result } = renderHook(() => useBasket(basketList));
    expect(result.current.getTotalBasketAmount(basketItemInfoList)).toBe(1500);
  });

  it('장바구니에 1500원 상품이 4개 있다면 6000이 반환된다.', () => {
    const basketList = [
      {
        itemCd: '37',
        qty: 4,
      },
    ];

    const basketItemInfoList = combineBasketInfo(basketList, itemDataList);

    const { result } = renderHook(() => useBasket(basketList));
    expect(result.current.getTotalBasketAmount(basketItemInfoList)).toBe(6000);
  });

  it('장바구니에 1500원 상품이 2개와 300원 상품 3개가 존재하면 3900이 반환된다.', () => {
    const basketList = [
      {
        itemCd: '37',
        qty: 2,
      },
      {
        itemCd: '96',
        qty: 3,
      },
    ];

    const basketItemInfoList = combineBasketInfo(basketList, itemDataList);

    const { result } = renderHook(() => useBasket(basketList));
    expect(result.current.getTotalBasketAmount(basketItemInfoList)).toBe(3900);
  });
});
