import Image from 'next/image'
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, PlayIcon, SkipForward, Repeat, Mic2, List, Laptop2, Volume, Fullscreen, Maximize2} from 'lucide-react'
import { group } from 'console'
import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'

function ImageType(props: React.ComponentProps<typeof Image>) {
  return <Image {...props} />
}

export default function Home(){
  return (
    <main>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">

          <Sidebar />

          <main className="flex-1 p-6">

            <div className='flex items-center gap-4'>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft />
              </button>

              <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight />
              </button>
            </div>

            <h1 className='font-bold text-3xl mt-10 '>Good Afternoon</h1>

              <div className='grid grid-cols-3 gap-4 mt-5'>
                <a href='#' className='group bg-white/10 rounded p1 overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
                  <ImageType src="/album.png" alt="capa do album Burguesinha de Seu Jorge"
                    width={103} 
                    height={104} />
                  <strong className='font-semibold'>Burguesinha</strong>

                  <button className='w-12 h-12 flex items-center justify-center pl-0.7 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                  </button>
                </a>

                <a href='#' className='group bg-white/10 rounded p1 overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
                  <ImageType src="/album.png" alt="capa do album Burguesinha de Seu Jorge"
                    width={103} 
                    height={104} />
                  <strong className='font-semibold'>Burguesinha</strong>

                  <button className='w-12 h-12 flex items-center justify-center pl-0.7 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                  </button>
                </a>

                <a href='#' className='group bg-white/10 rounded p1 overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
                  <ImageType src="/album.png" alt="capa do album Burguesinha de Seu Jorge"
                    width={103} 
                    height={104} />
                  <strong className='font-semibold'>Burguesinha</strong>

                  <button className='w-12 h-12 flex items-center justify-center pl-0.7 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                  </button>
                </a>

                <a href='#' className='group bg-white/10 rounded p1 overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
                  <ImageType src="/album.png" alt="capa do album Burguesinha de Seu Jorge"
                    width={103} 
                    height={104} />
                  <strong className='font-semibold'>Burguesinha</strong>

                  <button className='w-12 h-12 flex items-center justify-center pl-0.7 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                  </button>
                </a>

                <a href='#' className='group bg-white/10 rounded p1 overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
                  <ImageType src="/album.png" alt="capa do album Burguesinha de Seu Jorge"
                    width={103} 
                    height={104} />
                  <strong className='font-semibold'>Burguesinha</strong>

                  <button className='w-12 h-12 flex items-center justify-center pl-0.7 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                  </button>
                </a>

                <a href='#' className='group bg-white/10 rounded p1 overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
                  <ImageType src="/album.png" alt="capa do album Burguesinha de Seu Jorge"
                    width={103} 
                    height={104} />
                  <strong className='font-semibold'>Burguesinha</strong>

                  <button className='w-12 h-12 flex items-center justify-center pl-0.7 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                  </button>
                </a>
              
            </div>

            <h1 className='font-semibold font-2xl mt-10'>Faixas de música</h1>

            <div className='grid grid-cols-6 gap-4 mt-4'>
              <a className='bg-white/0 p-2 gap-2 rounded-md flex flex-col hover:bg-white/10 transition-colors'>
                <ImageType src="/album.png" alt="capa do album Burguesinha de Seu Jorge" width={120} height={120} className='w-full' />
                <strong className='font-semibold font-2xl mt-2'>Burguesinha</strong>
                <span className='text-sm text-zinc-400'>Seu Jorge</span>
              </a>
              <a className='bg-white/0 p-2 gap-2 rounded-md flex flex-col hover:bg-white/10 transition-colors'>
                <ImageType src="/album.png" alt="capa do album Burguesinha de Seu Jorge" width={120} height={120} className='w-full' />
                <strong className='font-semibold font-2xl mt-2'>Burguesinha</strong>
                <span className='text-sm text-zinc-400'>Seu Jorge</span>
              </a>
              <a className='bg-white/0 p-2 gap-2 rounded-md flex flex-col hover:bg-white/10 transition-colors'>
                <ImageType src="/album.png" alt="capa do album Burguesinha de Seu Jorge" width={120} height={120} className='w-full' />
                <strong className='font-semibold font-2xl mt-2'>Burguesinha</strong>
                <span className='text-sm text-zinc-400'>Seu Jorge</span>
              </a>
              <a className='bg-white/0 p-2 gap-2 rounded-md flex flex-col hover:bg-white/10 transition-colors'>
                <ImageType src="/album.png" alt="capa do album Burguesinha de Seu Jorge" width={120} height={120} className='w-full' />
                <strong className='font-semibold font-2xl mt-2'>Burguesinha</strong>
                <span className='text-sm text-zinc-400'>Seu Jorge</span>
              </a>
              <a className='bg-white/0 p-2 gap-2 rounded-md flex flex-col hover:bg-white/10 transition-colors'>
                <ImageType src="/album.png" alt="capa do album Burguesinha de Seu Jorge" width={120} height={120} className='w-full' />
                <strong className='font-semibold font-2xl mt-2'>Burguesinha</strong>
                <span className='text-sm text-zinc-400'>Seu Jorge</span>
              </a>
              <a className='bg-white/0 p-2 gap-2 rounded-md flex flex-col hover:bg-white/10 transition-colors'>
                <ImageType src="/album.png" alt="capa do album Burguesinha de Seu Jorge" width={120} height={120} className='w-full' />
                <strong className='font-semibold font-2xl mt-2'>Burguesinha</strong>
                <span className='text-sm text-zinc-400'>Seu Jorge</span>
              </a>
              
                
            </div>

          </main>
        </div>

        <Footer />
      </div>


    </main>
  )
}