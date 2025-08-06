import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React from 'react';

const Header = async () => {
  const users = await prisma.user.findMany();

  return (
    <header className="w-full border-b border-light-grey px-6 py-4 bg-white shadow-sm">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
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
      </div>
    </header>
  );
};

export default Header;
