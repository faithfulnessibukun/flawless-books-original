import { generateId } from "./idGenerator";

const BOOKS_KEY = "books";

// Placeholder cover — swap for real cover art later. Uses the brand's own
// plum/ivory so even the placeholder doesn't look like a generic stock image.
const PLACEHOLDER_COVER =
  "https://placehold.co/400x600/3B1130/F6EFE7?text=Cover+Coming+Soon&font=raleway";

// A handful of starter titles so the Books page isn't empty on first load.
// These seed once — after that, everything comes from what the admin adds.
const STARTER_BOOKS = [
  {
    title: "Flawless Phonics — Nursery Edition",
    author: "Flawless Consulting Firm Ltd",
    level: "Nursery",
    price: "₦4,500",
    originalPrice: "",
    rating: 5,
    description:
      "The foundational phonics text for early learners, built on British-English standards.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER,
  },
  {
    title: "Flawless Phonics — Primary Edition",
    author: "Flawless Consulting Firm Ltd",
    level: "Primary",
    price: "₦4,800",
    originalPrice: "₦5,500",
    rating: 4,
    description:
      "Builds on nursery phonics with structured diction and elocution practice.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER,
  },
];

export function getBooks() {
  try {
    const saved = JSON.parse(localStorage.getItem(BOOKS_KEY));
    if (Array.isArray(saved) && saved.length > 0) return saved;
  } catch {
    // fall through to seeding
  }

  // Nothing saved yet — seed the starter list once.
  const seeded = STARTER_BOOKS.map((book) => ({ ...book, id: generateId() }));
  localStorage.setItem(BOOKS_KEY, JSON.stringify(seeded));
  return seeded;
}

function setBooks(books) {
  localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
  window.dispatchEvent(new Event("booksUpdated"));
}

export function addBook(book) {
  const books = getBooks();
  const newBook = {
    id: generateId(),
    coverImage: book.coverImage?.trim() ? book.coverImage : PLACEHOLDER_COVER,
    ...book,
  };
  setBooks([newBook, ...books]);
  return newBook;
}

export function updateBook(id, updates) {
  const books = getBooks();
  const updated = books.map((book) =>
    book.id === id
      ? {
          ...book,
          ...updates,
          coverImage: updates.coverImage?.trim()
            ? updates.coverImage
            : book.coverImage || PLACEHOLDER_COVER,
        }
      : book
  );
  setBooks(updated);
}

export function deleteBook(id) {
  const books = getBooks();
  setBooks(books.filter((book) => book.id !== id));
}

export { PLACEHOLDER_COVER };
