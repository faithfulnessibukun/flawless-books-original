import { useState } from "react";
import toast from "react-hot-toast";

// No backend yet, so this just confirms the email locally and clears the
// field — swap in a real subscribe call once there's somewhere to send it.
function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Enter a valid email address.");
      return;
    }
    toast.success("Subscribed! Watch your inbox.");
    setEmail("");
  };

  return (
    <div className="bg-[#FCEEDD] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <h3
          className="text-xl font-black text-[#241B22]"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Stay in the Loop
        </h3>
        <p className="text-sm text-[#8A7A85] mt-1 max-w-md">
          New titles, training tips, and event announcements — straight to
          your inbox.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-full md:w-auto gap-2 max-w-md"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 min-w-0 rounded-full px-5 py-3 border-2 border-[#3B1130]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#E8871D] text-sm"
        />
        <button
          type="submit"
          className="bg-[#3B1130] hover:bg-[#2A0C22] text-[#F6EFE7] font-bold px-6 py-3 rounded-full transition shrink-0 text-sm"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsletterSignup;
