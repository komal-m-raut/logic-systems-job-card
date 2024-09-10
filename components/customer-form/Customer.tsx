import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { UploadIcon } from 'lucide-react';
import CustomerTable from '../customer-table/CustomerTable';
import CustomerForm from './CustomerForm';

const Customer = () => {
  return (
    <div className="flex flex-col h-screen p-12">
      <div className="w-full flex justify-between mb-8">
        <CustomerForm />

        <Button className={cn('bg-primary')}>
          <UploadIcon className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>
      <div>
        <CustomerTable />
      </div>
    </div>
  );
};

export default Customer;
