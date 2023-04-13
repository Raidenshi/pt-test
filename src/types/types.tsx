interface Result {
  status: number;
  message: string;
  messageDev: string;
  codeResult: number;
  duration: number;
  idLog: string;
}

interface AuthResult {
  result: Result;
  accessToken: string;
}

interface BonusData {
  typeBonusName: string;
  currentQuantity: number;
  forBurningQuantity: number;
  dateBurning: string;
}

interface Bonus {
  resultOperation: Result;
  data: BonusData;
}
