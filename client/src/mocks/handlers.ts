import { rest } from 'msw';

export const mockMasterItemData = [
  {
    IMG_URL: 'https://picsum.photos/id/736/200/300',
    ITEM_CD: '37',
    ITEM_NM: '티셔츠 237',
    ITEM_PRIC: 1542,
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
    ITEM_PRIC: 4598,
  },
];

export const handlers = [
  rest.get('/api/master', (req, res, ctx) => {
    return res(ctx.json(mockMasterItemData));
  }),
];
