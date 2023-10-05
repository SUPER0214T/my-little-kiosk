// @ts-ignore
import express, { Request, Response } from "express";
// @ts-ignore
import morgan from "morgan";
import { createItemData } from "./utils/createItemData";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req: Request, res: Response) => {
  const data = {
    message: "안녕하세요!",
    time: new Date().toISOString(),
  };

  res.json(data);
});

app.get("/master", (req: Request, res: Response) => {
  res.json(createItemData());
});

app.listen(8080, () => {
  console.log("서버가 http://localhost:8080 에서 실행 중입니다.");
});
