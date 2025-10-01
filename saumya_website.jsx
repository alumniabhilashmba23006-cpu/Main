import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowRight } from "lucide-react";

export default function SaumyaWebsite() {
  const [page, setPage] = useState(0);
  const nextPage = () => setPage((prev) => prev + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {page === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
          <img
            src="/Saumya.jpg"
            alt="Saumya"
            className="w-48 h-64 object-cover rounded-2xl shadow-xl mb-6 border-4 border-pink-300"
          />
          <h1 className="text-5xl font-bold text-pink-200 drop-shadow-lg mb-6 text-center">
            Welcome, Saumya 💖
          </h1>
          <p className="text-lg text-pink-100 mb-8 text-center max-w-xl">
            This journey is just for you, filled with little surprises and love ✨
          </p>
          <button
            onClick={nextPage}
            className="px-6 py-3 bg-pink-400 hover:bg-pink-500 rounded-2xl text-white font-semibold shadow-lg flex items-center gap-2"
          >
            Start Our Journey <ArrowRight size={18} />
          </button>
        </motion.div>
      )}

      {page === 1 && (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl font-bold text-pink-200 mb-4 text-center">
            Reasons I Love You 🌸
          </h2>
          <ul className="space-y-3 text-lg text-pink-100 text-center">
            <li>💫 Your smile makes my world brighter</li>
            <li>🌹 Your kindness melts my heart</li>
            <li>🎶 Every laugh of yours is my favorite song</li>
            <li>💎 You’re my forever and always</li>
          </ul>
          <div className="mt-8 flex justify-center">
            <button
              onClick={nextPage}
              className="px-6 py-3 bg-pink-400 hover:bg-pink-500 rounded-2xl text-white font-semibold shadow-lg"
            >
              Next →
            </button>
          </div>
        </motion.div>
      )}

      {page === 2 && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <h2 className="text-3xl font-bold text-pink-200 mb-6 text-center">
            Beautiful Memories ✨
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "The first time we talked 💕",
              "Every smile you gave me 🌸",
              "When you made me laugh uncontrollably 😍",
              "Our late night chats 🌙",
            ].map((memory, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl text-pink-100"
              >
                {memory}
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button
              onClick={nextPage}
              className="px-6 py-3 bg-pink-400 hover:bg-pink-500 rounded-2xl text-white font-semibold shadow-lg"
            >
              Next →
            </button>
          </div>
        </motion.div>
      )}

      {page === 3 && (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl font-bold text-pink-200 mb-4 text-center">
            You’re My Magic ✨
          </h2>
          <p className="text-lg text-pink-100 text-center max-w-xl mb-6">
            Every moment with you feels like a beautiful dream. You sparkle brighter than the stars ✨
          </p>
          <Sparkles className="mx-auto text-pink-300 w-12 h-12 animate-pulse" />
          <div className="mt-8 flex justify-center">
            <button
              onClick={nextPage}
              className="px-6 py-3 bg-pink-400 hover:bg-pink-500 rounded-2xl text-white font-semibold shadow-lg"
            >
              Next →
            </button>
          </div>
        </motion.div>
      )}

      {page === 4 && <FlirtySequence />}

      {/* Floating Hearts */}
      <div className="absolute bottom-6 flex gap-4 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -100, opacity: 1 }}
            transition={{ repeat: Infinity, duration: 3, delay: i * 0.6 }}
          >
            <Heart className="text-pink-400 w-6 h-6" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FlirtySequence() {
  const lines = [
    "Do you know why the stars envy you? Because you shine brighter than all of them 🌟",
    "Are you French? Because *Eiffel* for you 💘",
    "If kisses were snowflakes, I’d send you a blizzard ❄️😘",
    "Do you have a map? Because I keep getting lost in your eyes 💕",
    "You must be made of copper and tellurium… because you’re Cu-Te 🥰",
    "If beauty were time, you’d be an eternity ⏳💖",
    "You’re not just my dream girl, you’re my reality ✨",
    "Even if I had all the stars, I’d still choose your smile 🌹",
    "Forget butterflies, you give me the whole zoo in my stomach 🐯🐦🐼",
    "My favorite line will always be: I love you, Saumya 💞",
  ];

  const [index, setIndex] = useState(0);

  const nextLine = () => {
    if (index < lines.length - 1) setIndex(index + 1);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-pink-200 mb-6 text-center">
        My Heart Says 💓
      </h2>
      <motion.p
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg text-pink-100 text-center max-w-xl mb-6"
      >
        {lines[index]}
      </motion.p>
      {index < lines.length - 1 ? (
        <div className="flex justify-center">
          <button
            onClick={nextLine}
            className="px-6 py-3 bg-pink-400 hover:bg-pink-500 rounded-2xl text-white font-semibold shadow-lg"
          >
            I got one more for you Darling →
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-center text-pink-200 font-semibold text-xl mt-4 mb-6">
            That’s all… but my love for you never ends 💖
          </p>
          <img
            src="/Saumya_Abhilash.jpg"
            alt="Us together"
            className="w-72 h-52 object-cover rounded-2xl shadow-xl border-4 border-pink-300"
          />
        </div>
      )}
    </motion.div>
  );
}
