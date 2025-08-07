import { MaxWidth } from '@/components/containers';
import { prisma } from '@/lib/prisma';
import { Book } from '@prisma/client';

export default async function Home() {
  const books: Book[] = await prisma.book.findMany().then((res) => (res ? res : []));

  return (
    <MaxWidth className="my-8">
      <h1>BookSync</h1>
      <p>Your own online library to share with friends.</p>
      <div>
        <h2>Library</h2>
        <ul>
          {books.map((book) => {
            const { id, author, title } = book;

            return (
              <div key={id}>
                <p>
                  {title} by {author}
                </p>
              </div>
            );
          })}
        </ul>
      </div>
    </MaxWidth>
  );
}
