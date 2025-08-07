import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React from 'react';
import { MaxWidth } from './containers';

const Header = async () => {
  const users = await prisma.user.findMany();

  return (
    <header className="w-full border-b border-light-grey py-6 bg-white shadow-sm">
      <MaxWidth className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-rpg-blue">
          BookSync
        </Link>
        <nav className="space-x-4">
          <Link href="/add-book" className="text-sm hover:underline">
            Add Book
          </Link>
          {users.map((user) => (
            <Link key={user.id} href={`/${user.id}`} className="text-sm hover:underline">
              {user.name}&apos;s Shelf
            </Link>
          ))}
        </nav>
      </MaxWidth>
    </header>
  );
};

export default Header;
