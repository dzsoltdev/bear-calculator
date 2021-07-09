import React, {useState, useCallback, ChangeEvent} from "react";
import './Calculator.scss';

const Calculator = () => {
  const [divisibleA, setDivisibleA] = useState<any>(1);
  const [dividerA, setDividerA] = useState<any>(8);

  const [divisibleB, setDivisibleB] = useState<any>(3);
  const [dividerB, setDividerB] = useState<any>(4);

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>, callback: Function) => {
    let value = e.target.value;

    if(value.length > 1 && value?.[0] === '0') value = value.substring(1, value.length);

    callback(value);
  }

  return <div className={'calculator'}>
    <div className={'inputs'}>
      <div className={'fraction'}>
        <div className={'input-shadow'}>
          <input type={'number'} min={1} value={divisibleA} onChange={(e) => handleChange(e, setDivisibleA)}/>
        </div>
        <hr/>
        <div className={'input-shadow'}>
          <input type={'number'} min={1} value={dividerA} onChange={(e) => handleChange(e, setDividerA)}/>
        </div>
      </div>

      <div className={'fraction'}>
        <div className={'input-shadow'}>
          <input type={'number'} min={1} value={divisibleB} onChange={(e) => handleChange(e, setDivisibleB)}/>
        </div>
        <hr/>
        <div className={'input-shadow'}>
          <input type={'number'} min={1} value={dividerB} onChange={(e) => handleChange(e, setDividerB)}/>
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