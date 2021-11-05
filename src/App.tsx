import { useState } from 'react';
import axios from 'axios';

import './reset.css';
import './App.css';

// @ts-nocheck
import Header from './components/Header';
import { RawGlobalStateInterface } from './components/StateProvider';
import Form from './components/Form';
import SendButton from './components/sendButton';

function App(): JSX.Element {
  const [rawDiscountFood, setRawDiscountFood] = useState<string>('0');
  const [rawDiscountNotFood, setRawDiscountNotFood] = useState<string>('0');
  const [rawInputList, setRawInputList] = useState<RawGlobalStateInterface[]>(
    []
  );
  const [data, setData] = useState();

  const handleSubmit = async () => {
    const url = 'http://localhost:3003/api/v1/count';
    const toSend = [];
    const rawList = [...rawInputList];
    const list: any = [...rawInputList];

    for (let i = 0; i < list.length; i++) {
      list[i].articleName = rawList[i].articleName;
      list[i].price = parseFloat(rawList[i].price);
      list[i].VATType = rawList[i].VATType;
      list[i].isFood = rawList[i].isFood;
      list[i].quantity = rawList[i].quantity;
      list[i].index = rawList[i].index;
    }

    toSend.push(list);
    console.log('rawDiscountFood: ', rawDiscountFood);
    const discountFood = parseFloat(rawDiscountFood);
    const discountNotFood = parseFloat(rawDiscountNotFood);
    console.log('discountFood: ', discountFood);
    toSend.push({ discountFood });
    toSend.push({ discountNotFood });

    const finalToSend = { data: toSend };
    await axios.post(url, finalToSend).then((response) => {
      setData(response.data);
      console.log('response.data: ', response.data);
    });
    console.log(finalToSend);
  };

  return (
    <div className="container">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Header />
      <div className="body-container">
        <div style={{ height: '10px' }} />
        <Form
          data={data}
          rawInputList={rawInputList}
          setRawInputList={setRawInputList}
          rawDiscountFood={rawDiscountFood}
          setRawDiscountFood={setRawDiscountFood}
          rawDiscountNotFood={rawDiscountNotFood}
          setRawDiscountNotFood={setRawDiscountNotFood}
        />
        <SendButton handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
