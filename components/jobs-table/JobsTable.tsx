import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import CustomerDetailsModal from './JobDetailsModal';
import { JobsData } from '@/types/jobs.types';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from '@/components/ui/pagination';
import { Input } from '@/components/ui/input';

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

interface JobsTableProps {
  data: JobsData[];
}

const JobsTable: React.FC<JobsTableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [jobs, setJobs] = useState<JobsData[]>(data);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      // Replace with your API call
      const response = await fetch(
        `/api/customers?search=${searchQuery}&date=${dateFilter}&page=${currentPage}&itemsPerPage=${itemsPerPage}`,
      );
      const result = await response.json();
      setJobs(result.data);
    };

    fetchData();
  }, [searchQuery, dateFilter, currentPage]);

  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  const currentData = jobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4 gap-8">
        <Input
          type="text"
          placeholder="Search by Job No or Customer Name"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="border p-2 rounded"
        />
        <Input
          type="date"
          value={dateFilter}
          onChange={e => setDateFilter(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
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
          {currentData.map(item => (
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
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, totalPages))
            }
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default JobsTable;
