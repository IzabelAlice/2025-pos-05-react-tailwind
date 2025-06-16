import Image from 'next/image' // Adicione esta linha!
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, PlayIcon, SkipForward, Repeat, Mic2, List, Laptop2, Volume, Fullscreen, Maximize2} from 'lucide-react'
import { group } from 'console'

function ImageType(props: React.ComponentProps<typeof Image>) {
  return <Image {...props} />
}

export function Sidebar() {
    return(
        <aside className="w-72 bg-zinc-950 p-6 space-y-4">
            <ol className='flex items-center gap-3'>
              <li className='w-3 h-3 bg-red-500 rounded-full'></li>
              <li className='w-3 h-3 bg-yellow-400 rounded-full'></li>
              <li className='w-3 h-3 bg-green-500 rounded-full'></li>
            </ol>

            <nav className='space-y-5 mt-8'>
              <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                <HomeIcon />
                Home
              </a>

              <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                <Search />
                Search
              </a>

              <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                <Library />
                Your Library
              </a>
            </nav>

            <nav className='mt-6 pt-10 border-t  border-zinc-800 flex flex-col gap-2'>
              <a href='' className='text-sm text-zinc-500 hover:text-zinc-100'>Flor</a>
              <a href='' className='text-sm text-zinc-500 hover:text-zinc-100'>João Gomes</a>
              <a href='' className='text-sm text-zinc-500 hover:text-zinc-100'>Gustavo Mioto</a>
              <a href='' className='text-sm text-zinc-500 hover:text-zinc-100'>Banho</a>

            </nav>

          </aside>
    )
}