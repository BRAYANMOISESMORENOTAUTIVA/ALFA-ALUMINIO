import React from 'react';
import { Home, Compass, Clock, ThumbsUp, PlaySquare, Film, Gamepad2, Newspaper, Trophy, Flame } from 'lucide-react';

const menuItems = [
  { icon: Home, text: 'Home' },
  { icon: Flame, text: 'Trending' },
  { icon: Compass, text: 'Explore' },
  { icon: PlaySquare, text: 'Subscriptions' },
  { icon: Clock, text: 'History' },
  { icon: ThumbsUp, text: 'Liked Videos' },
  { icon: Film, text: 'Movies' },
  { icon: Gamepad2, text: 'Gaming' },
  { icon: Newspaper, text: 'News' },
  { icon: Trophy, text: 'Sports' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 w-60 h-[calc(100vh-3.5rem)] bg-white p-2 overflow-y-auto">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="flex items-center gap-4 p-3 w-full hover:bg-gray-100 rounded-lg"
        >
          <item.icon className="w-5 h-5" />
          <span className="text-sm">{item.text}</span>
        </button>
      ))}
    </aside>
  );
}