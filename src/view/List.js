import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { deletePayment, getBanks, getPayments } from '../stores/store';
import Header from '../components/Header';
import classes from './Styles.module.scss';
import { toast } from 'react-toastify';

const List = () => {
  const payments = useSelector((state) => state.payments);
  const banks = useSelector((state) => state.banks);

  useEffect(() => {
    getPayments();
    getBanks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePayment(id);
      toast.success('Платёж удалён');
    } catch (e) {
      toast.error(`error ${e}`);
    }
  };

  return (
    <>
      <Header />
      <div className={classes.listWrapper}>
        <table style={{ width: '400px' }}>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Bank</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment) => (
              <tr key={payment.id}>
                <td>{`${payment.amount} сом`}</td>
                <td>
                  {banks?.find((bank) => bank.id === payment.bankId)?.name}
                </td>
                <td>
                  <button onClick={() => handleDelete(payment.id)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
