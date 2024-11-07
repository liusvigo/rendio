import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { paymentSchema } from '@/components/validationSchemas/schemas';
import PaymentFormFields from '@/components/PaymentFormFields';
import AccountFormFields from '@/components/AccountFormFields';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { axiosInstance } from '@/lib/axios';
import { useEffect, useState } from 'react';

interface UserHistory {
  package: string;
  date: string;
  time: string;
  price: number;
  status: string;
}

const Account = () => {
  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = (values: z.infer<typeof paymentSchema>) => {
    console.log(values);
  };

  const [userHistory, setUserHistory] = useState<UserHistory[]>([]);

  const fetchUserHistory = async () => {
    try {
      const res = await axiosInstance.get('/api/user-history');
      setUserHistory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserHistory();
  }, []);

  return (
    <div className="container max-w-screen-md">
      <h1 className="mb-10 mt-10 text-2xl font-semibold">Account Details</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <AccountFormFields form={form} />

          <h2 className="mb-10 mt-20 text-2xl font-semibold">Payment Method</h2>
          <PaymentFormFields form={form} />
          <Button
            className="mb-20 mt-8 w-full bg-orange-400 text-slate-950 hover:bg-orange-300"
            type="submit"
          >
            Save
          </Button>
        </form>
      </Form>
      <Table className="mb-20">
        <TableHeader className="border-b-2 border-orange-400">
          <TableRow>
            <TableHead className="text-slate-400">Package</TableHead>
            <TableHead className="text-slate-400">Date</TableHead>
            <TableHead className="text-slate-400">Time</TableHead>
            <TableHead className="text-slate-400">Price</TableHead>
            <TableHead className="text-slate-400">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userHistory.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.package}</TableCell>
              <TableCell>{data.date}</TableCell>
              <TableCell>{data.time}</TableCell>
              <TableCell>${data.price}</TableCell>
              <TableCell>{data.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Account;
