import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Input } from '../ui/input'; // Assuming you have an Input component
import { JobsData } from '@/types/jobs.types';

const JobDetailsModal: React.FC<{ data: JobsData }> = ({ data }) => {
  const [enableEdit, setEnableEdit] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Job No: {data.jobNo}</DialogTitle>
        </DialogHeader>
        <Separator className="my-4" />

        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-1">
            <Checkbox
              id="enableEdit"
              checked={enableEdit}
              onCheckedChange={() => setEnableEdit(!enableEdit)}
            />
            <Label className="font-medium leading-none">Enable Edit</Label>
          </div>

          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Job No:</Label>
            <Input value={data.jobNo} disabled placeholder="Job No" />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Date:</Label>
            <Input value={data.date} disabled placeholder="Date" />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Customer Name:</Label>
            <Input
              value={data.customerName}
              disabled={!enableEdit}
              placeholder="Customer Name"
            />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Company Name:</Label>
            <Input
              value={data.companyName}
              disabled={!enableEdit}
              placeholder="Company Name"
            />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Current Status:</Label>
            <Input
              value={data.currentStatus}
              disabled={!enableEdit}
              placeholder="Current Status"
            />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Done:</Label>
            <Checkbox checked={data.done} disabled={!enableEdit} />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Mobile No:</Label>
            <Input
              value={data.mobileNo}
              disabled={!enableEdit}
              placeholder="Mobile No"
            />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Material:</Label>
            <Input
              value={data.material}
              disabled={!enableEdit}
              placeholder="Material"
            />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Accessories:</Label>
            <Input
              value={data.accessories}
              disabled={!enableEdit}
              placeholder="Accessories"
            />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Brand:</Label>
            <Input
              value={data.brand}
              disabled={!enableEdit}
              placeholder="Brand"
            />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Model No:</Label>
            <Input
              value={data.modelNo}
              disabled={!enableEdit}
              placeholder="Model No"
            />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Sr No:</Label>
            <Input
              value={data.srNo}
              disabled={!enableEdit}
              placeholder="Sr No"
            />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Password:</Label>
            <Input
              value={data.password}
              disabled={!enableEdit}
              placeholder="Password"
            />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Problem:</Label>
            <Input
              value={data.problem}
              disabled={!enableEdit}
              placeholder="Problem"
            />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Estimate:</Label>
            <Input
              value={data.estimate}
              disabled={!enableEdit}
              placeholder="Estimate"
            />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Received By:</Label>
            <Input
              value={data.receivedBy}
              disabled={!enableEdit}
              placeholder="Received By"
            />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Remark:</Label>
            <Input
              value={data.remark}
              disabled={!enableEdit}
              placeholder="Remark"
            />
          </div>
          <div className="flex items-center space-x-1">
            <Label className="w-1/3">Receipt:</Label>
            <Button disabled={!enableEdit}>Print Receipt</Button>
          </div>
        </div>
        <div className="flex justify-center ">
          <Button className="w-full">Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsModal;
