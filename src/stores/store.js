import axios from 'axios';
import { createStore } from 'redux';

let API = 'http://localhost:8000';

const defaultState = {
  payments: null,
  banks: null,
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_BANKS':
      return { ...state, banks: action.payload };
    case 'GET_PAYMENTS':
      return { ...state, payments: action.payload };
    default:
      return state;
  }
};
const store = createStore(reducer);

export const getBanks = async () => {
  let { data } = await axios(`${API}/banks`);
  store.dispatch({
    type: 'GET_BANKS',
    payload: data,
  });
};

export const getPayments = async () => {
  let { data } = await axios(`${API}/payments`);
  store.dispatch({
    type: 'GET_PAYMENTS',
    payload: data,
  });
};
export async function createPayment(payment) {
  await axios.post(`${API}/payments`, payment);
  await getPayments();
}

export const deletePayment = async (id) => {
  await axios.delete(`${API}/payments/${id}`);
  await getPayments();
};

export default store;
