import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5173',
});

const mock = new MockAdapter(axiosInstance, { delayResponse: 1000 });

mock.onGet('/api/available-times').reply(200, [
  {
    label: '09:00',
    value: '9',
    isAvailable: true,
  },
  {
    label: '10:00',
    value: '10',
    isAvailable: true,
  },
  {
    label: '11:00',
    value: '11',
    isAvailable: true,
  },
  {
    label: '12:00',
    value: '12',
    isAvailable: true,
  },
  {
    label: '13:00',
    value: '13',
    isAvailable: false,
  },
  {
    label: '14:00',
    value: '14',
    isAvailable: true,
  },
  {
    label: '15:00',
    value: '15',
    isAvailable: true,
  },
  {
    label: '16:00',
    value: '16',
    isAvailable: true,
  },
  {
    label: '17:00',
    value: '17',
    isAvailable: false,
  },
]);

mock.onGet('/api/user-history').reply(200, [
  {
    package: 'Premium',
    date: '20/11/2024',
    time: '12:00 - 14:00',
    price: 258,
    status: 'Paid',
  },
  {
    package: 'Basic',
    date: '21/11/2024',
    time: '14:00 - 15:30',
    price: 73.5,
    status: 'Paid',
  },
  {
    package: 'Premium',
    date: '22/11/2024',
    time: '10:00 - 12:00',
    price: 258,
    status: 'Paid',
  },
  {
    package: 'Basic',
    date: '23/11/2024',
    time: '16:00 - 17:30',
    price: 73.5,
    status: 'Paid',
  },
  {
    package: 'Premium',
    date: '24/11/2024',
    time: '09:00 - 11:00',
    price: 258,
    status: 'Paid',
  },
]);
