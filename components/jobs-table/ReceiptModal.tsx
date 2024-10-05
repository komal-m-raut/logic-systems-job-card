import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '@/components/ui/dialog';
import { Button } from '../ui/button';

const ReceiptModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Print Receipt</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Print Receipt</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ReceiptModal;
