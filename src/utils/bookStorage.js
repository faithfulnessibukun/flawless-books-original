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

function writeStarterBooks() {
  const seeded = STARTER_BOOKS.map((book) => ({ ...book, id: generateId() }));
  localStorage.setItem(BOOKS_KEY, JSON.stringify(seeded));
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

// Placeholder cover — swap for real cover art later. Uses the brand's own
// plum/ivory so even the placeholder doesn't look like a generic stock image.
const PLACEHOLDER_COVER =
  "https://placehold.co/400x600/3B1130/F6EFE7?text=Cover+Coming+Soon&font=raleway";

// A starter list with enough titles to populate the books gallery
// and leave space for more books as they are added later.
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
    coverImage: PLACEHOLDER_COVER1,
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
    coverImage: PLACEHOLDER_COVER2,
  },
  {
    title: "Flawless Grammar — Primary Edition",
    author: "Flawless Consulting Firm Ltd",
    level: "Primary",
    price: "₦5,200",
    originalPrice: "₦6,000",
    rating: 4,
    description:
      "A clear, confidence-building guide to reading, writing, and correct sentence structure.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER3,
  },
  {
    title: "Flawless Diction — Secondary Edition",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦6,000",
    originalPrice: "₦7,000",
    rating: 5,
    description:
      "Helps secondary learners improve pronunciation, clarity, and articulation in British English.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER4,
  },
  {
    title: "Flawless Reading for Beginners",
    author: "Flawless Consulting Firm Ltd",
    level: "Nursery",
    price: "₦3,900",
    originalPrice: "",
    rating: 4,
    description:
      "Builds early reading confidence with short stories and guided practice in phonics.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER5,
  },
  {
    title: "Flawless Spoken English — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦7,200",
    originalPrice: "₦8,500",
    rating: 5,
    description:
      "Designed for confident speaking, writing, and presentation skills in formal settings.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER6,
  },
  {
    title: "Flawless Creative Writing — Secondary Edition",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦6,800",
    originalPrice: "₦7,600",
    rating: 5,
    description:
      "Encourages creative expression, story structure, and confident written communication.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER7,
  },
  {
    title: "Flawless Business Communication — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦8,000",
    originalPrice: "₦9,000",
    rating: 5,
    description:
      "Advanced training for professional communication in business environments.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER8,
  },
  {
    title: "Flawless Academic Writing — Senior Level",
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
    title: "Flawless Leadership — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦9,000",
    originalPrice: "₦10,000",
    rating: 5,
    description:
      "Develops essential leadership skills for managing teams and driving organizational success.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER10,
  },
  {
    title: "Flawless Time Management — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦9,500",
    originalPrice: "₦10,500",
    rating: 5,
    description:
      "Teaches effective strategies for prioritizing tasks, setting goals, and maximizing productivity.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER11,
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
    coverImage: PLACEHOLDER_COVER12,
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
    coverImage: PLACEHOLDER_COVER13, 
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
    coverImage: PLACEHOLDER_COVER14,
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
    coverImage: PLACEHOLDER_COVER15,
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
    title: "Flawless Personal Development — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦10,000",
    originalPrice: "₦11,000",
    rating: 5,
    description:
      "Comprehensive guide to self-improvement, goal-setting, and achieving personal excellence.",
    amazonUrl: "https://www.amazon.com",
    coverImage: PLACEHOLDER_COVER18,
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
    coverImage: PLACEHOLDER_COVER18,
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
    coverImage: PLACEHOLDER_COVER19,
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
    coverImage: PLACEHOLDER_COVER20,
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
    coverImage: PLACEHOLDER_COVER21,
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
    coverImage: PLACEHOLDER_COVER22,
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
    coverImage: PLACEHOLDER_COVER23,
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
    coverImage: PLACEHOLDER_COVER24,
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
    coverImage: PLACEHOLDER_COVER26,
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
    title: "Flawless Personal Development — Senior Level",
    author: "Flawless Consulting Firm Ltd",
    level: "Secondary",
    price: "₦10,000",
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
    coverImage: PLACEHOLDER_COVER29,
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
    title: "Flawless Personal Development — Senior Level",
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

export { PLACEHOLDER_COVER, PLACEHOLDER_COVER9, PLACEHOLDER_COVER10, PLACEHOLDER_COVER11, PLACEHOLDER_COVER12, PLACEHOLDER_COVER31 };
