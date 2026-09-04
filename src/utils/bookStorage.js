import { generateId } from "./idGenerator";
import PLACEHOLDER_COVER1 from "../assets/book31.jpeg";
import PLACEHOLDER_COVER2 from "../assets/book30.jpeg";
import PLACEHOLDER_COVER3 from "../assets/book29.jpeg";
import PLACEHOLDER_COVER4 from "../assets/book28.jpeg";
import PLACEHOLDER_COVER5 from "../assets/book27.jpeg";
import PLACEHOLDER_COVER6 from "../assets/book26.jpeg";
import PLACEHOLDER_COVER7 from "../assets/book25.jpeg";
import PLACEHOLDER_COVER8 from "../assets/book24.jpeg";
import PLACEHOLDER_COVER9 from "../assets/book23.jpeg";
import PLACEHOLDER_COVER10 from "../assets/book22.jpeg";
import PLACEHOLDER_COVER11 from "../assets/book21.jpeg";
import PLACEHOLDER_COVER12 from "../assets/book20.jpeg";
import PLACEHOLDER_COVER13 from "../assets/book19.jpeg";
import PLACEHOLDER_COVER14 from "../assets/book18.jpeg";
import PLACEHOLDER_COVER15 from "../assets/book17.jpeg";
import PLACEHOLDER_COVER16 from "../assets/book16.jpeg";
import PLACEHOLDER_COVER17 from "../assets/book15.jpeg";
import PLACEHOLDER_COVER18 from "../assets/book14.jpeg";
import PLACEHOLDER_COVER19 from "../assets/book13.jpeg";
import PLACEHOLDER_COVER20 from "../assets/book12.jpeg";
import PLACEHOLDER_COVER21 from "../assets/book11.jpeg";
import PLACEHOLDER_COVER22 from "../assets/book10.jpeg";
import PLACEHOLDER_COVER23 from "../assets/book9.jpeg";
import PLACEHOLDER_COVER24 from "../assets/book8.jpeg";
import PLACEHOLDER_COVER25 from "../assets/book7.jpeg";
import PLACEHOLDER_COVER26 from "../assets/book6.jpeg";
import PLACEHOLDER_COVER27 from "../assets/book5.jpeg";
import PLACEHOLDER_COVER28 from "../assets/book4.jpeg";
import PLACEHOLDER_COVER29 from "../assets/book3.jpeg";
import PLACEHOLDER_COVER30 from "../assets/book2.jpeg";
import PLACEHOLDER_COVER31 from "../assets/book1.jpeg";

const BOOKS_KEY = "books";
const BOOKS_SEED_VERSION_KEY = "booksSeedVersion";

function writeStarterBooks() {
  const seeded = STARTER_BOOKS.map((book) => ({ ...book, id: generateId() }));
  localStorage.setItem(BOOKS_KEY, JSON.stringify(seeded));
  try {
    localStorage.setItem(BOOKS_SEED_VERSION_KEY, computeSeedVersion());
  } catch {
    // ignore
  }
  return seeded;
}

function resetStaleBooksIfNeeded() {
  try {
    const saved = JSON.parse(localStorage.getItem(BOOKS_KEY));
    if (!Array.isArray(saved) || saved.length === 0) {
      writeStarterBooks();
      return;
    }

    const current = STARTER_BOOKS.length;
    if (saved.length !== current) {
      writeStarterBooks();
      return;
    }

    const firstCover = saved[0]?.coverImage;
    const hasCurrentCovers = saved.some((book) => book.coverImage === PLACEHOLDER_COVER7);
    if (!firstCover || !hasCurrentCovers) {
      writeStarterBooks();
    }
  } catch {
    writeStarterBooks();
  }
}

function computeSeedVersion() {
  try {
    const str = JSON.stringify(STARTER_BOOKS);
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 33) ^ str.charCodeAt(i);
    }
    return String(hash >>> 0);
  } catch {
    return "";
  }
}

// Placeholder cover — swap for real cover art later. Uses the brand's own
// plum/ivory so even the placeholder doesn't look like a generic stock image.
const PLACEHOLDER_COVER =
  "https://placehold.co/400x600/3B1130/F6EFE7?text=Cover+Coming+Soon&font=raleway";

// A starter list with enough titles to populate the books gallery
// and leave space for more books as they are added later.
const STARTER_BOOKS = [
  {
    title: "Flawless Phonics — Primary Edition",
    author: "Flawless Consulting Firm Ltd",
    level: "Primary",
    price: "₦9000",
    originalPrice: "",
    rating: 5,
    description:
      "The foundational phonics text for early learners, built on British-English standards.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER1,
  },
  {
    title: "Flawless Phonics — Primary Edition",
    author: "Flawless Consulting Firm Ltd",
    level: "Primary",
    price: "₦9000",
    originalPrice: "₦5,500",
    rating: 4,
    description:
      "Builds on nursery phonics with structured diction and elocution practice.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER2,
  },
  {
    title: "Flawless Phonics — Nursery Edition",
    author: "Flawless Consulting Firm Ltd",
    level: "Nursery",
    price: "₦7000",
    originalPrice: "₦6,000",
    rating: 4,
    description:
      "A clear, confidence-building guide to reading, writing, and correct sentence structure.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER3,
  },
  {
    title: "Flawless Diction — Primary Edition",
    author: "Flawless Consulting Firm Ltd",
    level: "Primary",
    price: "₦9000",
    originalPrice: "₦7,000",
    rating: 5,
    description:
      "Helps secondary learners improve pronunciation, clarity, and articulation in British English.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER4,
  },
  {
    title: "Flawless Phonics — Primary Edition",
    author: "Flawless Consulting Firm Ltd",
    level: "Primary",
    price: "₦9000",
    originalPrice: "",
    rating: 4,
    description:
      "Builds early reading confidence with short stories and guided practice in phonics.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER5,
  },
  

  
  {
    title: "Flawless Phonics Fun — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦8,500",
    originalPrice: "₦9,500",
    rating: 5,
    description:
      "Comprehensive guide to structuring essays, citing sources, and developing academic voice.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER9,
  },
  
  {
    title: "Flawless Phonics — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦10,000",
    originalPrice: "₦10,500",
    rating: 5,
    description:
      "Teaches effective strategies for prioritizing tasks, setting goals, and maximizing productivity.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER11,
  },
  {
    title: "Flawless Phonics Fun — Nursery Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Nursery",
    price: "₦7000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER12,
  },
  {
   title: "Flawless Phonics — Primary Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Primary",
    price: "₦9000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER13, 
  },
  
  {
    title: "Flawless Phonics — Nursery Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Nursery",
    price: "₦9000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER15,
  },
  {
    title: "Flawless Phonics — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦10,000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER16,
  },
  {
    title: "Flawless Personal Development — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦10,000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER17,
  },
  
  
  {
    title: "Flawless Phoics — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦10,000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER19,
  },
  {
    title: "Flawless Phonics Fun— Nursery Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Nursery",
    price: "₦7000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER20,
  },
  {
    title: "Flawless Phonics — Primary Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Primary",
    price: "₦9000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER21,
  },
  {
    title: "Flawless Phonics — Primary Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Primary",
    price: "₦9000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER22,
  },
  {
    title: "Flawless Phonics — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦10,000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER23,
  },
  {
    title: "Flawless Phonics — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦10,000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER24,
  },
  {
    title: "Flawless Phonics — Primary Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Primary",
    price: "₦9000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER25,
  },
  
  {
    title: "Flawless Personal Development — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦10,000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER27,
  },
  {
    title: "Flawless Phonics Fun — Nursery Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Nursery",
    price: "₦7000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER28,
  },
  
  {
    title: "Flawless Personal Development — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦10,000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER30,
  },
  {
    title: "Flawless Phonics — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦10,000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER31,
  }

];

export function getBooks() {
  // If the starter data has changed (seed version differs), overwrite persisted books
  try {
    const currentVersion = computeSeedVersion();
    const savedVersion = localStorage.getItem(BOOKS_SEED_VERSION_KEY);
    if (!savedVersion || savedVersion !== currentVersion) {
      return writeStarterBooks();
    }
  } catch {
    // fall through to existing persisted data
  }

  resetStaleBooksIfNeeded();

  try {
    const saved = JSON.parse(localStorage.getItem(BOOKS_KEY));
    if (Array.isArray(saved) && saved.length > 0) {
      return saved;
    }
  } catch {
    // fall through to seeding
  }

  return writeStarterBooks();
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

// Dev helper: force reset books to starter set (calls writeStarterBooks)
export function resetBooksToStarter() {
  return writeStarterBooks();
}

export { PLACEHOLDER_COVER, PLACEHOLDER_COVER9, PLACEHOLDER_COVER10, PLACEHOLDER_COVER11, PLACEHOLDER_COVER12, PLACEHOLDER_COVER31 };
