import Image from 'next/image' // Adicione esta linha!
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, PlayIcon, SkipForward, Repeat, Mic2, List, Laptop2, Volume, Fullscreen, Maximize2} from 'lucide-react'
import { group } from 'console'

function ImageType(props: React.ComponentProps<typeof Image>) {
  return <Image {...props} />
}
export function Footer() {
    return(
        <footer className="bg-zinc-800 border-t border-zinc-700 p-4 flex items-center justify-between">

          <div className='flex items-center gap-3'>
            <ImageType src="/album.png" alt="capa de um album do Seu Jorge"width={56} height={56} />
            <div className='flex flex-col'>
              <strong className='font-normal'>Burguesinha</strong>
              <span className='text-xs text-zinc-400 block'>Seu Jorge</span>
            </div>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-3'>
              <Shuffle />
              <SkipBack />
              <div className='w-10 h-10 flex items-center justify-center pl-0.7 rounded-full bg-zinc-200 text-zinc-800'>
                <PlayIcon />
              </div>
              <SkipForward />
              <Repeat />
            </div>

            <div className='flex items-center gap-2'>
              <span className='text-xs text-zinc-500'>0:31</span>
              <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
              </div>
              <span className='text-xs text-zinc-400'>2:26</span>
            </div>

          </div>

          <div className='flex items-center gap-3'>
            <Mic2 size={20}/>
            <List size={20}/>
            <Laptop2 size={20}/>
            <div className='flex items-center gap-1'>
              <Volume size={20}/>
              <div className='flex items-center gap-2'>
              <div className='h-1 rounded-full w-20 bg-zinc-600'>
                <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
              </div>
            </div>
            </div>
            <Maximize2 size={20}/>

          </div>

        </footer>
    )
}