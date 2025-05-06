"use client"
export const randomNumberBetween0AndI = (i:number): number =>  Math.floor(Math.random() * (i + 1));

export const randomNumberBetween0AndPoint5 = ():number => Math.round((Math.random() * 0.5 + 0.0) * 100) / 100;