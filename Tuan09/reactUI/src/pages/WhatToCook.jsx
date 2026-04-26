import { useState } from 'react';
import { Star, Clock, MessageSquare, ThumbsUp, Bookmark, ChevronDown, ChevronRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const ingredients = [
  '- Yield: 4 generous servings',
  '- 2 pints ripe, well-mixed strawberries',
  '- 1/2 cup sugar, or more to taste',
  '- 4 cups flour',
  '- 3 tablespoons sugar',
  '- 1¼ teaspoon salt',
  '- 5 teaspoons baking powder',
  '- 1¼ cups butter',
  '- 3 cups whipping cream',
  '- ¼ teaspoon vanilla extract',
];

const steps = [
  {
    n: 1,
    title: 'Step 1',
    text: 'Pour out and mix strawberries. Cut in half or slice, depending on size. Gently crush about a quarter of the berries with a fork to release their juices. Mix with remaining berries and the ½ cup of sugar, adding more sugar if necessary. Set aside, covered, for about half an hour to develop flavor.',
    img: '/images/visily-image-47.png',
  },
  {
    n: 2,
    title: 'Step 2',
    text: 'Preheat oven to 450 degrees.',
    img: null,
  },
  {
    n: 3,
    title: 'Step 3',
    text: 'Mix in a large mixing bowl: sift together flour, 3 tablespoons sugar, salt and baking powder. Add ¼ cup of softened butter, and cut into dry ingredients as for pastry. Add ¾ cups cream, and mix to a soft dough. Knead the dough for one minute on a lightly floured pastry board, then roll it out to about ½-inch thickness. Using a 3-inch biscuit cutter, cut an even number of rounds — 8 rounds per serving.',
    img: '/images/visily-image-48.png',
  },
  {
    n: 4,
    title: 'Step 4',
    text: 'Use a little of the butter to grease a baking sheet. Place half the rounds on it. Melt remaining butter and brush a little on the rounds, place remaining rounds on top. Bake for 10 to 15 minutes, or until golden brown.',
    img: null,
  },
  {
    n: 5,
    title: 'Step 5',
    text: 'Use a little of the butter to grease a baking sheet. Place half the rounds on it. Melt remaining butter and brush a little on the rounds, place remaining rounds on top. Bake for 10 to 15 minutes, or until golden brown.',
    img: null,
  },
  {
    n: 6,
    title: 'Step 6',
    text: 'Beat remaining cream until it thickens. Add vanilla. Beat again just until thick.',
    img: '/images/visily-image-49.png',
  },
];

const notes = [
  {
    id: 1,
    user: 'Jimmy Will',
    time: '10 h. ago',
    text: 'Eum consectetur anim magna id sit ullamco id dolore dolor nulla labore laboris anim eiusmod voluptate qui esse amet. Non cupidatat sunt duo oc.',
    helpful: 0,
    avatar: '/images/visily-avatar-42.png',
    imgs: null,
  },
  {
    id: 2,
    user: 'Alisa Grill',
    time: '10 h. ago',
    text: 'Culpa irure pariatur deserunt reprehenderit fugiat incididunt exercitation dolore sint officia duis Lorem id elit do eiud tempor. Tempor consequat qui laborum est id labore tempor culpa id dolore magna id consectetur.',
    helpful: 0,
    avatar: '/images/visily-avatar-42.png',
    imgs: ['/images/visily-image-43.png', '/images/visily-image-44.png', '/images/visily-image-45.png'],
  },
  {
    id: 3,
    user: 'Chris Nelson',
    time: '10 h. ago',
    text: 'Labore eu elit anim esse officia anim consequat alit aliqua deserunt cillum pariatur...',
    helpful: 0,
    avatar: '/images/visily-avatar-42.png',
    imgs: null,
  },
  {
    id: 4,
    user: 'Emma Gonzalez',
    time: '10 h. ago',
    text: 'Deserunt non incididunt cillum nostrud do voluptate excepteur excepteur eu anim minim est laborum dolore 😊 Mollit commodo in dolor ut in mollit est',
    helpful: 0,
    avatar: '/images/visily-avatar-42.png',
    imgs: null,
  },
];

const recentlyViewed = [
  { id: 1, title: 'Salad with cabbage and shrimp', time: '10 minutes', img: '/images/visily-image-43.png' },
  { id: 2, title: 'Salad of cove beans, shrimp and potatoes', time: '20 minutes', img: '/images/visily-image-44.png' },
  { id: 3, title: 'Sunny-side up fried eggs', time: '10 minutes', img: '/images/visily-image-45.png' },
  { id: 4, title: 'Lotus delight salad', time: '18 minutes', img: '/images/visily-image-41.png' },
];

export default function WhatToCook() {
  const [noteTab, setNoteTab] = useState('All Notes');
  const [noteText, setNoteText] = useState('');
  const [savedItems, setSavedItems] = useState([]);

  const toggleSave = (id) =>
    setSavedItems((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-8">

      {/* ── Breadcrumb ── */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-pink-500 font-medium">Cooking guide</span>
      </div>

      {/* ── Hero: Two Columns ── */}
      <div className="flex flex-col lg:flex-row gap-10 mb-10">

        {/* Left: Title + Meta */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            How to make a Strawberry Shortcake
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            It seems like there may be a misunderstanding. If you're asking how a user can make a Strawberry Shortcake,
            the process would be identical to the recipe I shared earlier. It involves preparing the strawberries,
            making the shortcakes, preparing whipped cream, and finally assembling the shortcake.
          </p>

          {/* Author Row */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/images/visily-avatar-42.png"
              alt="Emma Gonzalez"
              className="w-10 h-10 rounded-full object-cover border-2 border-pink-50"
              onError={(e) => e.target.src = 'https://ui-avatars.com/api/?name=Emma+Gonzalez&background=fce7f3&color=ec4899&size=40'}
            />
            <span className="font-bold text-gray-900 text-sm">Emma Gonzalez</span>
            <button className="ml-auto p-2 rounded-full text-pink-400 hover:text-pink-600 transition-colors border border-pink-200 hover:border-pink-400 bg-pink-50 hover:bg-pink-100 flex items-center justify-center w-8 h-8">
              <Bookmark className="w-4 h-4" />
            </button>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center gap-0 mb-0">
            <div className="flex-1 text-center">
              <p className="text-xs text-gray-400 font-medium mb-0.5">Time</p>
              <p className="font-extrabold text-gray-900 text-sm">45 minutes</p>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex-1 text-center">
              <p className="text-xs text-gray-400 font-medium mb-0.5">Notes</p>
              <p className="font-extrabold text-gray-900 text-sm">352 community notes</p>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex-1 text-center">
              <p className="text-xs text-gray-400 font-medium mb-0.5">Rating</p>
              <div className="flex justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-200 fill-yellow-200'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Featured Image */}
        <div className="lg:w-1/2">
          <div className="w-full aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/visily-image-50.png"
              alt="Strawberry Shortcake"
              className="w-full h-full object-cover"
              onError={(e) => e.target.src = 'https://placehold.co/600x600?text=Strawberry+Shortcake'}
            />
          </div>
        </div>
      </div>

      {/* ── Ingredients + Steps ── */}
      <div className="flex flex-col lg:flex-row gap-10 mb-14">

        {/* Ingredients — dashed pink border */}
        <div className="lg:w-5/12">
          <div className="border-2 border-dashed border-pink-300 rounded-2xl p-6 mb-6 bg-pink-50/30">
            <ul className="space-y-2">
              {ingredients.map((ing, i) => (
                <li key={i} className="text-sm text-gray-700 leading-relaxed">
                  {ing}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full py-3.5 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/25 text-sm">
            + Add to Your Grocery List
          </button>
        </div>

        {/* Steps */}
        <div className="lg:w-7/12">
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.n}>
                <h3 className="font-extrabold text-gray-900 text-base mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{step.text}</p>
                {step.img && (
                  <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full object-cover"
                      style={{ maxHeight: '300px' }}
                      onError={(e) => e.target.src = 'https://placehold.co/600x300?text=Step'}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Cooking Note ── */}
      <section className="mb-14">
        <h2 className="text-xl font-extrabold text-gray-900 mb-5">Cooking note</h2>

        {/* Write a note */}
        <div className="relative mb-6">
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Write a cooking note about this recipe..."
            className="w-full px-4 py-3 pr-24 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 focus:bg-white resize-none transition-all"
            rows={3}
          />
          <button className="absolute bottom-4 right-4 px-5 py-1.5 bg-pink-500 text-white rounded-lg text-sm font-bold hover:bg-pink-600 transition-colors shadow-sm">
            <Send className="w-4 h-4 inline mr-1" />
            Send
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-100 pb-0">
          {[`All Notes (55)`, 'Most Helpful (20)', 'Photos (3)'].map((tab) => (
            <button
              key={tab}
              onClick={() => setNoteTab(tab)}
              className={`pb-3 text-sm font-bold transition-all border-b-2 -mb-px ${
                noteTab === tab
                  ? 'border-pink-500 text-pink-500'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Notes List */}
        <div className="space-y-6">
          {notes.map((note) => (
            <div key={note.id} className="flex gap-4">
              <img
                src={note.avatar}
                alt={note.user}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-pink-50"
                onError={(e) =>
                  (e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(note.user)}&background=fce7f3&color=ec4899&size=40`)
                }
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-gray-900 text-sm">{note.user}</span>
                  <span className="text-xs text-gray-400">{note.time}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{note.text}</p>

                {/* Inline images for note */}
                {note.imgs && (
                  <div className="flex gap-3 mb-3">
                    {note.imgs.map((img, idx) => (
                      <div key={idx} className="w-24 h-24 rounded-xl overflow-hidden border border-gray-100 flex-shrink-0">
                        <img
                          src={img}
                          alt={`note-img-${idx}`}
                          className="w-full h-full object-cover"
                          onError={(e) => e.target.src = 'https://placehold.co/96x96?text=img'}
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <button className="flex items-center gap-1 hover:text-pink-500 transition-colors font-medium">
                    <ThumbsUp className="w-3.5 h-3.5" /> {note.helpful}
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500 transition-colors font-medium">
                    <MessageSquare className="w-3.5 h-3.5" /> Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 py-3 border-2 border-gray-200 rounded-2xl text-sm font-bold text-gray-500 hover:border-pink-300 hover:text-pink-500 transition-colors flex items-center justify-center gap-2">
          <ChevronDown className="w-4 h-4" />
          Show more discussion (47)
        </button>
      </section>

      {/* ── Your Recently Viewed ── */}
      <section>
        <h2 className="text-xl font-extrabold text-gray-900 mb-6">Your Recently Viewed</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {recentlyViewed.map((r) => (
            <div key={r.id} className="group cursor-pointer relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 shadow-sm">
                <img
                  src={r.img}
                  alt={r.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => (e.target.src = 'https://placehold.co/300x300?text=Food')}
                />
                <button
                  onClick={() => toggleSave(r.id)}
                  className={`absolute top-2 right-2 p-1.5 rounded-full transition-all shadow-sm ${
                    savedItems.includes(r.id)
                      ? 'bg-pink-500 text-white'
                      : 'bg-white/90 text-pink-400 hover:bg-pink-50'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${savedItems.includes(r.id) ? 'fill-white' : ''}`} />
                </button>
              </div>
              <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1 line-clamp-2">{r.title}</h3>
              <span className="inline-flex items-center gap-1 bg-pink-50 text-pink-500 text-xs font-semibold px-2 py-1 rounded-lg">
                <Clock className="w-3 h-3" /> {r.time}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
