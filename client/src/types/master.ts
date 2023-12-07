export type ItemData = {
  ITEM_CD: string;
  ITEM_NM: string;
  ITEM_PRIC: number;
  IMG_URL: string;
};

export type MasterData = { ITEM_DATA: ItemData[]; BADGE_LIST: string[] };
