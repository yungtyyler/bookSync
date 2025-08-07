import { MaxWidth } from '@/components/containers';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { prisma } from '@/lib/prisma';
import React from 'react';

const AddBook = async () => {
  const addBook = async (formData: FormData) => {
    'use server';
    // const book = await prisma.book.create({
    //   data: {
    //     author: 'Mel Robbins',
    //     title: 'Let Them',
    //     totalPages: 310,
    //   },
    // });
    console.log(formData.get('title'));
  };

  return (
    <MaxWidth className="my-8 flex flex-col items-center justify-center">
      <form
        action={addBook}
        className="text-white max-w-[768px] mx-4 flex flex-col items-center gap-4 border border-gray-400 h-full w-full p-4 rounded-lg drop-shadow-lg bg-soft-black"
      >
        <div className="flex items-center w-full">
          <label className="w-1/4">Title</label>
          <Input className="w-full bg-white text-black" name="title" required />
        </div>
        <Button variant={'outline'} className="cursor-pointer w-fit text-black">
          Click Me!
        </Button>
      </form>
    </MaxWidth>
  );
};

export default AddBook;
