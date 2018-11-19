import { maxColdTemp, minHotTemp } from "config";

export const TempTypes = {
  COLD: 0,
  NORMAL: 1,
  HOT: 2
};

export const getTempType = temp => {
  const value = parseInt(temp);
  if (value <= maxColdTemp) {
    return TempTypes.COLD;
  } else if (temp > minHotTemp) {
    return TempTypes.HOT;
  } else {
    return TempTypes.NORMAL;
  }
};
