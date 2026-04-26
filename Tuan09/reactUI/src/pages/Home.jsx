import { Clock, Bookmark, Play } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

// ── Data ─────────────────────────────────────────────────────────────────────

const summerRecipes = [
  { id: 1, title: 'Italian-style tomato salad', time: '14 minutes', img: '/images/visily-image-39.png' },
  { id: 2, title: 'Spaghetti with vegetables & shrimp', time: '30 minutes', img: '/images/visily-image-40.png' },
  { id: 3, title: 'Lotus delight salad', time: '18 minutes', img: '/images/visily-image-41.png' },
  { id: 4, title: 'Snack cakes', time: '25 minutes', img: '/images/visily-image-42.png' },
];

const videoRecipes = [
  { id: 5, title: 'Salad with cabbage and shrimp', time: '20 minutes', img: '/images/visily-image-43.png' },
  { id: 6, title: 'Baked corn beans', time: '35 minutes', img: '/images/visily-image-44.png' },
  { id: 7, title: 'Sunny-side up fried eggs', time: '10 minutes', img: '/images/visily-image-45.png' },
  { id: 8, title: 'Stuffed sticky rice ball', time: '45 minutes', img: '/images/visily-image-46.png' },
];

const editorPicks = [
  {
    id: 9,
    title: 'Strawberry smoothie',
    time: '5 minutes',
    img: '/images/visily-image-47.png',
    author: 'Jennifer King',
    desc: 'A refreshing blend of fresh strawberries, banana, and yogurt. Perfect for a quick and healthy breakfast or snack on the go.',
  },
  {
    id: 10,
    title: 'Latte Art cappuccino',
    time: '10 minutes',
    img: '/images/visily-image-48.png',
    author: 'Marcus Allen',
    desc: 'Learn how to create stunning latte art with this step-by-step guide for making the perfect creamy cappuccino at home.',
  },
  {
    id: 11,
    title: 'Butter fried noodles',
    time: '20 minutes',
    img: '/images/visily-image-49.png',
    author: 'Sophie Turner',
    desc: 'Rich and savory buttered noodles tossed with garlic, parmesan, and fresh herbs. Simple ingredients, extraordinary flavor.',
  },
  {
    id: 12,
    title: 'Pan-fried beef steak',
    time: '35 minutes',
    img: '/images/visily-image-50.png',
    author: 'James Wilson',
    desc: 'A perfectly seared beef steak with rosemary butter sauce. Restaurant quality made easy right in your own kitchen.',
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function StandardCard({ recipe }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="group cursor-pointer">
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-4 shadow-sm">
        <img
          src={recipe.img}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => e.target.src = 'https://placehold.co/400x400?text=Food'}
        />
        <button
          onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all shadow-sm ${saved ? 'bg-pink-500 text-white' : 'bg-white/90 text-pink-400 hover:bg-pink-50'
            }`}
        >
          <Bookmark className={`w-4 h-4 ${saved ? 'fill-white' : ''}`} />
        </button>
      </div>
      <div className="px-1">
        <h3 className="font-bold text-gray-900 leading-snug mb-2 line-clamp-2">{recipe.title}</h3>
        <span className="inline-flex items-center gap-1.5 bg-pink-50 text-pink-500 text-sm font-semibold px-3 py-1 rounded-lg">
          <Clock className="w-3.5 h-3.5" /> {recipe.time}
        </span>
      </div>
    </div>
  );
}

function VideoCard({ recipe }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="group cursor-pointer">
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-4 shadow-sm">
        <img
          src={recipe.img}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => e.target.src = 'https://placehold.co/400x400?text=Food'}
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 text-pink-500 fill-pink-500 ml-0.5" />
          </div>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all shadow-sm ${saved ? 'bg-pink-500 text-white' : 'bg-white/90 text-pink-400 hover:bg-pink-50'
            }`}
        >
          <Bookmark className={`w-4 h-4 ${saved ? 'fill-white' : ''}`} />
        </button>
      </div>
      <div className="px-1">
        <h3 className="font-bold text-gray-900 leading-snug mb-2 line-clamp-2">{recipe.title}</h3>
        <span className="inline-flex items-center gap-1.5 bg-pink-50 text-pink-500 text-sm font-semibold px-3 py-1 rounded-lg">
          <Clock className="w-3.5 h-3.5" /> {recipe.time}
        </span>
      </div>
    </div>
  );
}

function EditorPickCard({ recipe }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="group flex gap-5 bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
      {/* Square Image */}
      <div className="relative w-36 h-36 flex-shrink-0 rounded-2xl overflow-hidden">
        <img
          src={recipe.img}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => e.target.src = 'https://placehold.co/200x200?text=Food'}
        />
      </div>
      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between py-1 relative">
        <button
          onClick={(e) => { e.stopPropagation(); setSaved(!saved); }}
          className={`absolute top-0 right-0 p-1.5 rounded-full transition-all ${saved ? 'text-pink-500' : 'text-gray-300 hover:text-pink-400'
            }`}
        >
          <Bookmark className={`w-4 h-4 ${saved ? 'fill-pink-500' : ''}`} />
        </button>

        <div>
          <div className="flex items-center gap-2 mb-1.5 pr-8">
            <h3 className="font-bold text-gray-900 leading-snug line-clamp-1">{recipe.title}</h3>
          </div>
          <span className="inline-flex items-center gap-1 text-xs text-gray-400 font-medium mb-2">
            <Clock className="w-3 h-3" /> {recipe.time}
          </span>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{recipe.desc}</p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 mt-3">
          <img
            src="/images/visily-avatar-42.png"
            alt={recipe.author}
            className="w-7 h-7 rounded-full object-cover border-2 border-pink-50"
            onError={(e) => e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(recipe.author)}&background=fce7f3&color=ec4899&size=28`}
          />
          <span className="text-sm font-semibold text-gray-700">{recipe.author}</span>
        </div>
      </div>
    </div>
  );
}

// ── Section Header ────────────────────────────────────────────────────────────

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{title}</h2>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  const { isLoggedIn, setShowLoginModal } = useAuth();

  return (
    <div className="w-full">

      {/* ── Banner ── */}
      <section className="w-full overflow-hidden relative min-h-[450px] md:min-h-[500px] flex items-center bg-gray-100">
        <img
          src="/images/visily-image-32.png"
          alt="Recipe of the day"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="relative z-20 w-full h-full px-6 py-10 md:p-16 flex items-center max-w-7xl mx-auto">
          {/* Card container */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 w-[90%] sm:w-[380px] flex flex-col items-center text-center shadow-2xl relative md:ml-12 border border-gray-50">
            {/* Top yellow badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-white font-bold px-6 py-2 rounded-lg text-sm whitespace-nowrap shadow-sm tracking-wide">
              ---- Recipe of the day ----
            </div>

            <h2 className="text-2xl font-extrabold text-pink-500 mt-4 mb-4">Salad Caprese</h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 px-2 font-medium">
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, basil, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
            </p>

            <div className="flex flex-col items-center mb-8">
              <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center mb-3 overflow-hidden border-2 border-white shadow-sm">
                 <img src="/images/visily-avatar-42.png" alt="Salad Caprese" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-bold text-gray-800">Salad Caprese</span>
            </div>

            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-2xl transition-colors flex items-center gap-2 w-max mx-auto shadow-md shadow-pink-500/30">
              View recipe <span className="text-lg leading-none">&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Recipe Sections (full-width, no sidebar) ── */}
      <div className="py-8 px-6 space-y-16">

        {/* 1 ── This Summer Recipes — 4-column grid */}
        <section>
          <SectionHeader
            title="This Summer Recipes"
            subtitle="We have all your Independence Day sweets covered."
          />
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {summerRecipes.map(r => <StandardCard key={r.id} recipe={r} />)}
          </div>
        </section>

        {/* 2 ── Recipes With Videos — 4-column grid with play button */}
        <section>
          <SectionHeader
            title="Recipes With Videos"
            subtitle="Cooking Up Culinary Creations with Step-by-Step Videos"
          />
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoRecipes.map(r => <VideoCard key={r.id} recipe={r} />)}
          </div>
        </section>

        {/* 3 ── Editor's Pick — 2-column horizontal cards */}
        <section>
          <SectionHeader
            title="Editor's pick"
            subtitle="Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {editorPicks.map(r => <EditorPickCard key={r.id} recipe={r} />)}
          </div>
        </section>

      </div>
    </div>
  );
}
