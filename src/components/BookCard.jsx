import { FaStar, FaRegStar, FaAmazon } from "react-icons/fa";

function Stars({ rating = 0 }) {
  const full = Math.round(Number(rating) || 0);
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) =>
        n <= full ? (
          <FaStar key={n} className="text-[#D9A441]" size={12} />
        ) : (
          <FaRegStar key={n} className="text-[#D9A441]/40" size={12} />
        )
      )}
    </div>
  );
}

// Matches the "Popular Book" reference: cover image with an optional Sale
// badge, title + author, star rating, price (with a strikethrough original
// price when on sale), and a CTA button. Since this store has no real
// cart, the CTA redirects to the book's Amazon listing instead.
function BookCard({ book }) {
  const onSale =
    book.originalPrice && book.originalPrice.trim() && book.originalPrice !== book.price;

  const handleBuy = () => {
    if (!book.amazonUrl) return;
    window.open(book.amazonUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-[#3B1130]/5 flex flex-col">
      <button
        onClick={handleBuy}
        className="relative aspect-[2/3] overflow-hidden bg-[#3B1130] block w-full group"
      >
        {onSale && (
          <span className="absolute top-3 left-3 z-10 bg-[#E8871D] text-[#2A0C22] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
            Sale
          </span>
        )}
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </button>

      <div className="p-4 flex flex-col flex-1">
        {book.level && (
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#D9A441] mb-1">
            {book.level}
          </span>
        )}

        <h3
          className="font-bold text-[#241B22] leading-snug line-clamp-2"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {book.title}
        </h3>

        {book.author && (
          <p className="text-xs text-[#8A7A85] mt-1">by {book.author}</p>
        )}

        <div className="mt-2">
          <Stars rating={book.rating} />
        </div>

        <div className="flex items-center gap-2 mt-2">
          {onSale && (
            <span className="text-xs text-[#8A7A85] line-through">
              {book.originalPrice}
            </span>
          )}
          {book.price && (
            <span className="font-black text-[#3B1130]">{book.price}</span>
          )}
        </div>

        <button
          onClick={handleBuy}
          className="mt-4 w-full bg-[#E8871D] hover:bg-[#C96F12] text-[#2A0C22] font-bold text-sm py-2.5 rounded-xl transition flex items-center justify-center gap-2"
        >
          <FaAmazon size={13} />
          Buy on Amazon
        </button>
      </div>
    </div>
  );
}

export default BookCard;
