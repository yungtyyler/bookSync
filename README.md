# 📚 BookSync

**BookSync** is a collaborative reading tracker app for individuals or families to monitor progress across shared books. Whether you're working through a book club read or reading alongside your partner, BookSync helps everyone stay on track.

---

## Deployment

[https://book-sync-three.vercel.app/](https://book-sync-three.vercel.app/)

---

## 🚀 Features

- 📖 Add books to a shared global library
- 👤 Track personal reading status per user
- 🧾 Maintain individual shelves with current progress
- ✅ Status options: _want to read_, _reading_, _finished_
- 💡 See who else is reading what and how far along they are

---

## 🛠️ Tech Stack

- [Next.js (App Router)](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Neon (PostgreSQL)](https://neon.tech/)
- [Vercel](https://vercel.com/) for deployment

---

## 🧱 Database Schema

Using Prisma, the app uses a normalized schema:

- `User`: name, id
- `Book`: title, author, total pages
- `ReadingStatus`: join table that tracks current page, status, and reading progress per user-book combo

---

## 🚧 Coming Soon

- 🔒 Optional user authentication
- 📊 Reading streak tracking
- 📱 Mobile-optimized UI
- 📈 Stats dashboard (pages per day, completion pace)

---

## 📄 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yungtyyler/booksync.git
cd booksync
```
