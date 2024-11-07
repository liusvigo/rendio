import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { paymentSchema } from '@/components/validationSchemas/schemas';
import PaymentFormFields from '@/components/PaymentFormFields';
import AccountFormFields from '@/components/AccountFormFields';
import { useEffect } from 'react';

const Payment = () => {
  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = (values: z.infer<typeof paymentSchema>) => {
    console.log(values);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container max-w-screen-md">
      <h1 className="mb-10 mt-10 text-2xl font-semibold">Billing Details</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <AccountFormFields form={form} />
          <h2 className="mb-10 mt-20 text-2xl font-semibold">Your Order</h2>
          <ul className="flex flex-col gap-2">
            <li className="flex justify-between">
              <span>Premium Package</span> <span>$129 / Session</span>
            </li>
            <li>25th October 2024</li>
            <li className="flex justify-between">
              <span>13:00 - 17:00</span> <span>$516</span>
            </li>
          </ul>
          <hr className="my-8 border-orange-400" />
          <div className="flex justify-between">
            <span className="text-lg font-semibold">Total</span>
            <span>$516</span>
          </div>
          <hr className="my-8 border-orange-400" />
          <h2 className="mb-10 mt-20 text-2xl font-semibold">Payment Method</h2>
          <PaymentFormFields form={form} />
          <Button
            className="mb-20 mt-8 w-full bg-orange-400 text-slate-950 hover:bg-orange-300"
            type="submit"
          >
            Proceed
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Payment;
