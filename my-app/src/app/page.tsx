import React from 'react';
import {Home as Homeicon, Search, Library } from 'lucide-react';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className='flex flex-1'>
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-5">
            <a href="#" className="flex items-center gap-3 text-sm font-semibold">
              <Homeicon />
              Home
            </a>
            <a href="#" className="flex items-center gap-3 text-sm font-semibold">
              <Search />
              Search
            </a>
            <a href="#" className="flex items-center gap-3 text-sm font-semibold">
              <Library />
              Your Library
            </a>
          </nav>
        </aside>
        <main className="flex-1">
          <h2>main</h2>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        <h2>footer</h2>
      </footer>
    </div>
  );
}