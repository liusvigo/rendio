import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface AccountFormFieldsProps {
  form: any;
}

const AccountFormFields = ({ form }: AccountFormFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="first_name"
        render={({ field }) => (
          <FormItem className="mb-8">
            <FormLabel className="text-base font-normal">First name</FormLabel>
            <FormControl>
              <Input
                autoComplete="off"
                className="border-0 bg-slate-800 text-gray-200 ring-offset-slate-700 focus-visible:ring-orange-400"
                placeholder="John"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="last_name"
        render={({ field }) => (
          <FormItem className="mb-8">
            <FormLabel className="text-base font-normal">Last name</FormLabel>
            <FormControl>
              <Input
                autoComplete="off"
                className="border-0 bg-slate-800 text-gray-200 ring-offset-slate-700 focus-visible:ring-orange-400"
                placeholder="Doe"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-normal">Email</FormLabel>
            <FormControl>
              <Input
                autoComplete="off"
                className="border-0 bg-slate-800 text-gray-200 ring-offset-slate-700 focus-visible:ring-orange-400"
                placeholder="john@example.com"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default AccountFormFields;
