import React from 'react';

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

const CustomerDetailsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Job No:</DialogTitle>
        </DialogHeader>
        <Separator className="my-4" />

        <div className="flex flex-col">
          <div className="flex items-center justify-center space-x-2">
            <Checkbox id="terms" />
            <Label
              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Enable Edit
            </Label>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerDetailsModal;
