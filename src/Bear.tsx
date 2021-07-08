import React from "react";
import './bear.scss';
import pic from './milkmocha.png'

const Bear = () => {
  return <div className={'bear'}>
    <div className={'container'}>
      <img src={pic}/>
      <span className={'message'}>Maci, mennyi egynyolcad háromnegyede?</span>
    </div>
  </div>
};

export default Bear;