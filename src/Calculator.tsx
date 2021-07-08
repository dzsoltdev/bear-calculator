import React, {useState, useCallback} from "react";
import './Calculator.scss';

const Calculator = () => {
  const [divisibleA, setDivisibleA] = useState<number>(1);
  const [dividerA, setDividerA] = useState<number>(8);

  const [divisibleB, setDivisibleB] = useState<number>(3);
  const [dividerB, setDividerB] = useState<number>(4);

  const getDivisibleResult = useCallback(() => {
    let retVal = divisibleA * divisibleB;
    let divider = dividerA * dividerB;

    let gcd = getGreatestCommonDivisor(retVal, divider);

    if(gcd > 1) retVal /= gcd;

    return retVal;
  }, [divisibleA, divisibleB, dividerA, dividerB]);

  const getDividerResult = useCallback(() => {
    let retVal = dividerA * dividerB;

    let divisible = divisibleA * divisibleB;

    let gcd = getGreatestCommonDivisor(retVal, divisible);

    if(gcd > 1) retVal /= gcd;

    return retVal;
  }, [dividerA, dividerB, divisibleA, divisibleB]);

  return <div className={'calculator'}>
    <div className={'inputs'}>
      <div className={'fraction'}>
        <div className={'input-shadow'}>
          <input type={'number'} value={divisibleA} onChange={(e) => setDivisibleA(Number(e.target.value))}/>
        </div>
        <hr/>
        <div className={'input-shadow'}>
          <input type={'number'} value={dividerA} onChange={(e) => setDividerA(Number(e.target.value))}/>
        </div>
      </div>

      <div className={'fraction'}>
        <div className={'input-shadow'}>
          <input type={'number'} value={divisibleB} onChange={(e) => setDivisibleB(Number(e.target.value))}/>
        </div>
        <hr/>
        <div className={'input-shadow'}>
          <input type={'number'} value={dividerB} onChange={(e) => setDividerB(Number(e.target.value))}/>
        </div>
      </div>
    </div>

    <div className={'fraction'}>
      <div className={'result'}>{getDivisibleResult()}</div>
      {/*<input type={'number'} value={getDivisibleResult()} disabled/>*/}
      <hr/>
      <div className={'result'}>{getDividerResult()}</div>
      {/*<input type={'number'} value={getDividerResult()} disabled/>*/}
    </div>
  </div>;
};

export default Calculator;

const getGreatestCommonDivisor = (x: number, y: number) => {
  let a = x;
  let b = y;

  while(b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}