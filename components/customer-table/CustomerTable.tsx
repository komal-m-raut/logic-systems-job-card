import React, { useState } from 'react';
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
import { CustomerData } from '@/types/jobs.types';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@/components/ui/pagination';

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
          {currentData.map((item) => (
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
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationPrevious
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          />
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationNext
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CustomerTable;