import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createPayment, getBanks } from '../stores/store';
import Header from '../components/Header';
import classes from './Styles.module.scss';
import { toast } from 'react-toastify';

const CreateTransAction = () => {
  const banks = useSelector((state) => state.banks);
  const [sum, setSum] = useState(1);
  const [bankId, setBankId] = useState(1);

  useEffect(() => {
    getBanks();
  }, []);

  const handleClick = () => {
    let paymentObject = {
      amount: sum,
      bankId: +bankId,
      id: Date.now(),
    };
    try {
      createPayment(paymentObject);
      setSum(1);
      setBankId(1);
      toast.success('платеж создан');
    } catch (e) {
      toast.error(`error ${e}`);
    }
  };

  return (
    <>
      <Header />
      <div className={classes.createContainer}>
        <div className={classes.createBlock}>
          <h4>Create payment</h4>
          <p>Add Amount</p>
          <input
            placeholder='Amount'
            value={sum}
            onChange={(e) => setSum(e.target.value)}
            type='number'
            min={1}
          />
          <p>Choose Bank</p>
          <select
            className={classes.createSelect}
            value={bankId}
            onChange={(e) => setBankId(e.target.value)}
          >
            {banks?.map((bank) => (
              <option key={bank.id} value={bank.id}>
                {bank.name}
              </option>
            ))}
          </select>
          <div className={classes.createButtonWrapper}>
            <button onClick={handleClick}>create</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTransAction;
