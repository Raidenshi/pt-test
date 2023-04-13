interface IResult {
  status: number;
  message: string;
  messageDev: string;
  codeResult: number;
  duration: number;
  idLog: string;
}

interface IAuthResult {
  result: IResult;
  accessToken: string;
}

interface IBonusData {
  typeBonusName: string;
  currentQuantity: number;
  forBurningQuantity: number;
  dateBurning: string;
}

interface IBonus {
  resultOperation: IResult;
  data: IBonusData;
}
