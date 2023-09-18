// @ts-ignore
import express, { Request, Response } from "express";
// @ts-ignore
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

type ItemData = {
  ITEM_CD: string;
  ITEM_NM: string;
  ITEM_PRIC: number;
  IMG_URL: string;
};

app.get("/", (req: Request, res: Response) => {
  const data = {
    message: "안녕하세요!",
    time: new Date().toISOString(),
  };

  res.json(data);
});

app.get("/master", (req: Request, res: Response) => {
  // const masterData: ItemData[] = [
  //   {
  //     IMG_URL: "https://picsum.photos/id/810/200/300",
  //     ITEM_CD: "810",
  //     ITEM_NM: "파란색 티셔츠",
  //     ITEM_PRIC: 5000,
  //   },
  //   {
  //     IMG_URL: "https://picsum.photos/id/890/200/300",
  //     ITEM_CD: "890",
  //     ITEM_NM: "노란색 티셔츠",
  //     ITEM_PRIC: 3000,
  //   },
  //   {
  //     IMG_URL: "https://picsum.photos/id/830/200/300",
  //     ITEM_CD: "830",
  //     ITEM_NM: "핑크색 티셔츠",
  //     ITEM_PRIC: 20000,
  //   },
  //   {
  //     IMG_URL: "https://picsum.photos/id/870/200/300",
  //     ITEM_CD: "870",
  //     ITEM_NM: "초록색 티셔츠",
  //     ITEM_PRIC: 10000,
  //   },
  //   {
  //     IMG_URL: "https://picsum.photos/id/1/200/300",
  //     ITEM_CD: "870",
  //     ITEM_NM: "초록색 티셔츠",
  //     ITEM_PRIC: 10000,
  //   },
  // ];
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

  const masterData: ItemData[] = Array.from({ length: 20 }, generateItemData);

  res.json(masterData);
});

app.listen(8080, () => {
  console.log("서버가 http://localhost:8080 에서 실행 중입니다.");
});
