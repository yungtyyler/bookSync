import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import React from 'react';

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const shelf = await prisma.user.findFirst({
    where: {
      id: id,
    },
    include: {
      readings: { include: { book: true } },
    },
  });

  if (!shelf) notFound();

  const { name, readings } = shelf;

  return (
    <div>
      <h1>{name}&apos;s Shelf</h1>
      <ul>
        {readings.map((reading) => {
          const { book, currentPage, startedAt, status } = reading;
          const { author, id, title, totalPages } = book;
          const startDate = startedAt.toDateString();

          return (
            <li key={id}>
              <div>
                <h2>{title}</h2>
                <p>By {author}</p>
                {status == 'reading' && (
                  <div>
                    Progress:
                    <p>
                      {currentPage} of {totalPages}
                    </p>
                    Date Started: {startDate}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserPage;
