'use client';

import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { UploadIcon } from 'lucide-react';
import CustomerTable from '../jobs-table/JobsTable';
import CustomerForm from './JobsForm';
import Papa from 'papaparse';
import { JobsData } from '@/types/jobs.types';

const sampleData: JobsData[] = [
  {
    id: '1',
    jobNo: 'JOB001',
    customerName: 'John Doe',
    companyName: 'Acme Corp',
    date: '2023-10-01',
    mobileNo: '+1234567890',
    problem: 'Network Issue',
    currentStatus: 'In Progress',
    estimate: '$300.00',
    remark: 'Urgent',
    done: false,
    material: 'Plastic',
    accessories: ['Charger', 'Case'],
    brand: 'BrandX',
    modelNo: 'Model123',
    srNo: 'SN123456',
    password: 'password123',
    receivedBy: 'Jane Smith',
  },
];

const Jobs = () => {
  const exportToCSV = () => {
    const columns = [
      'Job No',
      'Date',
      'Company Name',
      'Customer Name',
      'Material',
      'Model',
      'Serial No',
      'Password',
      'Problem',
      'Remark',
      'Done',
    ];

    const data = [
      // Example data, replace with actual data
      {
        jobNo: '001',
        date: '2023-10-01',
        companyName: 'Company A',
        customerName: 'Customer A',
        material: 'Material A',
        model: 'Model A',
        serialNo: 'SN001',
        password: 'pass123',
        problem: 'Problem A',
        remark: 'Remark A',
        done: 'Yes',
      },
      // Add more data as needed
    ];

    const csv = Papa.unparse({
      fields: columns,
      data: data.map(item => [
        item.jobNo,
        item.date,
        item.companyName,
        item.customerName,
        item.material,
        item.model,
        item.serialNo,
        item.password,
        item.problem,
        item.remark,
        item.done,
      ]),
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'customers.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col h-screen p-12">
      <div className="w-full flex justify-between mb-8">
        <CustomerForm />

        <Button className={cn('bg-primary')} onClick={exportToCSV}>
          <UploadIcon className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>
      <div>
        <CustomerTable data={sampleData} />
      </div>
    </div>
  );
};

export default Jobs;
