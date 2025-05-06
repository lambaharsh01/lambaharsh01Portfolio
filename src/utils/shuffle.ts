import { randomNumberBetween0AndI } from "./numbers";
import { ProjectDataInterface } from "@/types/Project";

export const arrayShuffle = (array:ProjectDataInterface[]): ProjectDataInterface[] => {

    for (let i = array.length - 1; i > 0; i--) {
      const rand:number = randomNumberBetween0AndI(i);
      [array[i], array[rand]] = [array[rand], array[i]];
    }
    return array;
  }