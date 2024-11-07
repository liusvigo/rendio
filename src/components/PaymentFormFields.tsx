import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';

interface PaymentFormFields {
  form: any;
}

const PaymentFormFields = ({ form }: PaymentFormFields) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>('card');

  return (
    <>
      <Accordion
        type="single"
        defaultValue="card"
        onValueChange={(value: string) => setSelectedMethod(value)}
        collapsible
      >
        <AccordionItem value="card" className="mb-4 border-0">
          <AccordionTrigger
            className={`rounded-lg border-0 bg-slate-800 px-4 hover:no-underline ${selectedMethod === 'card' ? 'border-2 border-orange-400' : ''}`}
          >
            <p>Card</p>
            <img src="/assets/mastercard-icon.png" className="max-w-[20px]" />
          </AccordionTrigger>
          <AccordionContent className="px-4 py-8">
            <FormField
              control={form.control}
              name="card_number"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <FormLabel className="text-sm font-normal">
                    Card number
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      autoComplete="off"
                      className="border-0 bg-slate-800 text-gray-200 ring-offset-slate-700 focus-visible:ring-orange-400"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between gap-5">
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem className="mb-8">
                    <FormLabel className="text-sm font-normal">CVV</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        autoComplete="off"
                        className="border-0 bg-slate-800 text-gray-200 ring-offset-slate-700 focus-visible:ring-orange-400"
                        placeholder="XXX"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="exp_month"
                  render={({ field }) => (
                    <FormItem className="mb-8">
                      <FormLabel className="text-sm font-normal">
                        Month
                      </FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          type="number"
                          className="border-0 bg-slate-800 text-gray-200 ring-offset-slate-700 focus-visible:ring-orange-400"
                          placeholder="XX"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="exp_year"
                  render={({ field }) => (
                    <FormItem className="mb-8">
                      <FormLabel className="text-sm font-normal">
                        Year
                      </FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          type="number"
                          className="border-0 bg-slate-800 text-gray-200 ring-offset-slate-700 focus-visible:ring-orange-400"
                          placeholder="XXXX"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="paypal" className="border-0">
          <AccordionTrigger
            className={`rounded-lg border-0 bg-slate-800 px-4 hover:no-underline ${selectedMethod === 'paypal' ? 'border-2 border-orange-400' : ''}`}
          >
            <p>Paypal</p>
            <img src="/assets/paypal-icon.png" className="max-w-[80px]" />
          </AccordionTrigger>
          <AccordionContent className="px-4 py-8">
            <p>Redirecting to paypal...</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default PaymentFormFields;
