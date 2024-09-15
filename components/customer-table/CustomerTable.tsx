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
import CustomerDetailsModal from './CustomerDetailsModal';
import { CustomerData } from '@/types/jobs';

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


interface CustomerTableProps {
  data: CustomerData[];
}

const CustomerTable: React.FC<CustomerTableProps> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="flex items-center justify-between"></div>
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
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.jobNo}</TableCell>
              <TableCell>{item.customerName}</TableCell>
              <TableCell>{item.companyName}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.mobileNo}</TableCell>
              <TableCell>{item.problem}</TableCell>
              <TableCell>{item.currentStatus}</TableCell>
              <TableCell>{item.estimate}</TableCell>
              <TableCell>{item.remark}</TableCell>
              <TableCell className="text-right">
                <CustomerDetailsModal />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomerTable;