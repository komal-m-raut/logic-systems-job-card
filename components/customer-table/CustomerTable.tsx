import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const headers = [
  'Job No',
  'Customer Name',
  'Company Name',
  'Date',
  'Mobile No',
  'Problem',
  'Current Status',
  'Estimate',
  'Remark',
  'Info',
];

const CustomerTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent jobs.</TableCaption>
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead
              key={index}
              className={header === 'Info' ? 'text-right' : ''}
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">JOB001</TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>Acme Corp</TableCell>
          <TableCell>2023-10-01</TableCell>
          <TableCell>+1234567890</TableCell>
          <TableCell>Network Issue</TableCell>
          <TableCell>In Progress</TableCell>
          <TableCell>$300.00</TableCell>
          <TableCell>Urgent</TableCell>
          <TableCell className="text-right">
            <Button className={cn('bg-purple-900')}>Info</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CustomerTable;
