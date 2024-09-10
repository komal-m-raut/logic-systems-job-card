import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusIcon } from 'lucide-react';

const CustomerForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary">
          <PlusIcon className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Customer</DialogTitle>
          <DialogDescription>
            Make changes to your form here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="customerName" className="text-right">
                Customer Name
              </Label>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="srNo" className="text-right">
                Sr.No
              </Label>
              <Input id="srNo" className="col-span-1" />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="companyName" className="text-right">
                Company Name
              </Label>
              <Input id="companyName" className="col-span-1" />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="accessories" className="text-right">
                Accessories
              </Label>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="mobileNumber" className="text-right">
                Mobile Number
              </Label>
              <Input id="mobileNumber" className="col-span-1" />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input id="password" type="password" className="col-span-1" />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="material" className="text-right">
                Material
              </Label>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="problem" className="text-right">
                Problem
              </Label>
              <Input id="problem" className="col-span-1" />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="brand" className="text-right">
                Brand
              </Label>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="receivedBy" className="text-right">
                Received By
              </Label>
              <Input id="receivedBy" className="col-span-1" />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="modelNo" className="text-right">
                Model No.
              </Label>
              <Input id="modelNo" className="col-span-1" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerForm;
