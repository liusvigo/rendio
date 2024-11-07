import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { DayPicker } from 'react-day-picker';

import { useEffect, useState } from 'react';
import { axiosInstance } from '@/lib/axios';

import { Link } from 'react-router-dom';

import ScrollAnimation from 'react-animate-on-scroll';

interface BookingSectionProps {
  className?: string;
}

interface SelectItem {
  label: string;
  value: string;
}

interface TimeAvailability extends SelectItem {
  isAvailable: boolean;
}

const packages: SelectItem[] = [
  {
    label: 'Premium Package',
    value: 'premium',
  },
  {
    label: 'Standard Package',
    value: 'standard',
  },
  {
    label: 'Basic Package',
    value: 'basic',
  },
];

const BookingSection = ({ className }: BookingSectionProps) => {
  const [selectedPackage, setSelectedPackage] = useState<SelectItem | null>(
    null,
  );
  const [selectedStartTime, setSelectedStartTime] = useState<TimeAvailability>({
    label: '00:00',
    value: '999',
    isAvailable: false,
  });
  const [selectedEndTime, setSelectedEndTime] = useState<TimeAvailability>({
    label: '00:00',
    value: '0',
    isAvailable: false,
  });
  const [selected, setSelected] = useState<Date>();
  const [timeAvailabilities, setTimeAvailabilities] = useState<
    TimeAvailability[]
  >([]);
  const [endTimeOptions, setEndTimeOptions] = useState<TimeAvailability[]>([]);

  const fetchAvailableTimes = async () => {
    try {
      const res = await axiosInstance.get('/api/available-times');
      setTimeAvailabilities(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch available times
  useEffect(() => {
    setSelectedStartTime({ label: '00:00', value: '999', isAvailable: false });
    fetchAvailableTimes();
  }, [selected]);

  // Set the end time options
  useEffect(() => {
    setSelectedEndTime({ label: '00:00', value: '0', isAvailable: false });

    let tempEndTimeOptions: TimeAvailability[] = [];
    let stopLoop = false;

    for (let i = 0; i < timeAvailabilities.length; i++) {
      if (stopLoop) {
        break;
      } else if (
        Number(timeAvailabilities[i].value) > Number(selectedStartTime.value)
      ) {
        tempEndTimeOptions.push(timeAvailabilities[i]);
        if (!timeAvailabilities[i].isAvailable) {
          stopLoop = true;
        }
      }
    }

    setEndTimeOptions(tempEndTimeOptions);
  }, [selectedStartTime]);

  const handlePackageSelect = (packageOption: SelectItem) => {
    setSelectedPackage(packageOption);
  };

  return (
    <div className={`${className}`} id="day-picker">
      <ScrollAnimation animateIn="fadeInUp">
        <h2 className="mb-32 text-center text-2xl font-semibold sm:mb-44 sm:text-4xl">
          Book Your Session
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp">
        <div className="mb-8 flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex w-full max-w-screen-sm cursor-pointer justify-between rounded-md border-2 border-orange-400 px-4 py-3 text-start">
              <span>
                {selectedPackage
                  ? selectedPackage.label
                  : 'Select Booking Package'}
              </span>
              <span>▼</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="mx-auto bg-slate-900 text-gray-200"
              style={{
                width: 'var(--radix-dropdown-menu-trigger-width)',
              }}
            >
              {packages.map((packageOption, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => handlePackageSelect(packageOption)}
                >
                  {packageOption.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          className="mb-10"
          disabled={{ before: new Date() }}
          classNames={{
            month_caption:
              'text-center text-slate-950 bg-orange-400 py-4 rounded-tl-md rounded-tr-md',
            months: 'relative max-w-screen-sm mx-auto',
            button_previous: 'absolute left-4 top-4 text-slate-950',
            button_next: 'absolute right-4 top-4 text-slate-950',
            month_grid:
              'w-full bg-slate-900 rounded-br-md rounded-bl-md max-w-screen-sm mx-auto flex flex-col items-center relative',
            weekdays:
              'absolute w-full font-normal text-gray-400 left-0 flex justify-between pt-4 px-2',
            weeks: 'w-full mt-16 sm:mt-20',
            week: 'flex justify-between mb-4 sm:mb-8',
            day: 'rounded-lg w-10 h-10 flex justify-center',
            day_button: '',
            disabled: 'text-gray-500',
            selected: 'bg-orange-400 text-slate-950 ',
          }}
        />

        <div className="mx-auto mb-8 flex max-w-sm items-baseline justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex cursor-pointer justify-between gap-5 rounded-md border-2 border-orange-400 px-4 py-3">
              <span>{selectedStartTime.label}</span>
              <span>▼</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="mx-auto bg-slate-900 text-gray-200"
              style={{
                width: 'var(--radix-dropdown-menu-trigger-width)',
              }}
            >
              {timeAvailabilities.map((timeAvailability, index) => {
                if (timeAvailability.isAvailable) {
                  return (
                    <DropdownMenuItem
                      key={index}
                      onClick={() => setSelectedStartTime(timeAvailability)}
                    >
                      {timeAvailability.label}
                    </DropdownMenuItem>
                  );
                }
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <p className="text-lg">To</p>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex cursor-pointer justify-between gap-5 rounded-md border-2 border-orange-400 px-4 py-3">
              <span>{selectedEndTime.label}</span>
              <span>▼</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="mx-auto bg-slate-900 text-gray-200"
              style={{
                width: 'var(--radix-dropdown-menu-trigger-width)',
              }}
            >
              {endTimeOptions.map((timeOption, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setSelectedEndTime(timeOption)}
                >
                  {timeOption.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="text-center">
          <Button className="bg-orange-400 text-slate-950 hover:bg-orange-300">
            <Link to="/payment">Book Now</Link>
          </Button>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default BookingSection;
