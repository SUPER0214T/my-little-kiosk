import { ItemData } from "../types/item";

const staticMasterData: ItemData[] = [
  {
    IMG_URL: "https://picsum.photos/id/736/200/300",
    ITEM_CD: "37",
    ITEM_NM: "티셔츠 237",
    ITEM_PRIC: 1542,
  },
  {
    IMG_URL: "https://picsum.photos/id/15/200/300",
    ITEM_CD: "86",
    ITEM_NM: "원피스 886",
    ITEM_PRIC: 6364,
  },
  {
    IMG_URL: "https://picsum.photos/id/523/200/300",
    ITEM_CD: "95",
    ITEM_NM: "바지 495",
    ITEM_PRIC: 3768,
  },
  {
    IMG_URL: "https://picsum.photos/id/492/200/300",
    ITEM_CD: "96",
    ITEM_NM: "원피스 196",
    ITEM_PRIC: 4598,
  },
  {
    IMG_URL: "https://picsum.photos/id/601/200/300",
    ITEM_CD: "46",
    ITEM_NM: "셔츠 546",
    ITEM_PRIC: 3835,
  },
  {
    IMG_URL: "https://picsum.photos/id/154/200/300",
    ITEM_CD: "23",
    ITEM_NM: "셔츠 423",
    ITEM_PRIC: 7850,
  },
  {
    IMG_URL: "https://picsum.photos/id/957/200/300",
    ITEM_CD: "80",
    ITEM_NM: "셔츠 980",
    ITEM_PRIC: 3035,
  },
  {
    IMG_URL: "https://picsum.photos/id/56/200/300",
    ITEM_CD: "18",
    ITEM_NM: "바지 818",
    ITEM_PRIC: 9530,
  },
  {
    IMG_URL: "https://picsum.photos/id/301/200/300",
    ITEM_CD: "50",
    ITEM_NM: "스웨터 150",
    ITEM_PRIC: 9740,
  },
  {
    IMG_URL: "https://picsum.photos/id/271/200/300",
    ITEM_CD: "55",
    ITEM_NM: "티셔츠 755",
    ITEM_PRIC: 3467,
  },
  {
    IMG_URL: "https://picsum.photos/id/102/200/300",
    ITEM_CD: "31",
    ITEM_NM: "스웨터 531",
    ITEM_PRIC: 8542,
  },
  {
    IMG_URL: "https://picsum.photos/id/765/200/300",
    ITEM_CD: "36",
    ITEM_NM: "바지 236",
    ITEM_PRIC: 3009,
  },
  {
    IMG_URL: "https://picsum.photos/id/617/200/300",
    ITEM_CD: "73",
    ITEM_NM: "셔츠 973",
    ITEM_PRIC: 9985,
  },
  {
    IMG_URL: "https://picsum.photos/id/681/200/300",
    ITEM_CD: "20",
    ITEM_NM: "바지 620",
    ITEM_PRIC: 1287,
  },
  {
    IMG_URL: "https://picsum.photos/id/877/200/300",
    ITEM_CD: "21",
    ITEM_NM: "셔츠 821",
    ITEM_PRIC: 8604,
  },
  {
    IMG_URL: "https://picsum.photos/id/438/200/300",
    ITEM_CD: "78",
    ITEM_NM: "원피스 378",
    ITEM_PRIC: 3719,
  },
  {
    IMG_URL: "https://picsum.photos/id/93/200/300",
    ITEM_CD: "78",
    ITEM_NM: "셔츠 878",
    ITEM_PRIC: 5167,
  },
  {
    IMG_URL: "https://picsum.photos/id/353/200/300",
    ITEM_CD: "23",
    ITEM_NM: "티셔츠 323",
    ITEM_PRIC: 9214,
  },
  {
    IMG_URL: "https://picsum.photos/id/132/200/300",
    ITEM_CD: "81",
    ITEM_NM: "바지 781",
    ITEM_PRIC: 1473,
  },
  {
    IMG_URL: "https://picsum.photos/id/715/200/300",
    ITEM_CD: "53",
    ITEM_NM: "원피스 953",
    ITEM_PRIC: 2534,
  },
];

const getRandomImageUrl = (): string => {
  const randomId = Math.floor(Math.random() * 999) + 1;
  return `https://picsum.photos/id/${randomId}/200/300`;
};

const generateItemData = (): ItemData => {
  const itemNames = ["티셔츠", "바지", "원피스", "셔츠", "스웨터"];

  const randomId = Math.floor(Math.random() * (999 - 100 + 1)) + 100;

  return {
    IMG_URL: getRandomImageUrl(),
    ITEM_CD: randomId.toString().substring(1),
    ITEM_NM: `${
      itemNames[Math.floor(Math.random() * itemNames.length)]
    } ${randomId}`,
    ITEM_PRIC: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
  };
};

export const createRandomMasterData: ItemData[] = Array.from(
  { length: 20 },
  generateItemData,
);

export const createItemData = () => {
  return staticMasterData;
};
