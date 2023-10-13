import Image from 'next/image'
import PostList from './components/generic/postList'
import SplashArt from '../../public/media/2.jpg'

export default function Home() {
  return (
    <>
      <section className="w-full h-screen-1/2 bg-black relative text-white">
        <div id="top-picks-section" className="max-w-7xl p-8 w-full mx-auto bg-white/10 z-10 m-auto md:text-3xl">
            XDDDD
        </div>
        <Image loading="lazy" layout="fill" objectFit="cover" src={SplashArt} alt="Album thumbnail" className="opacity-80 absolute aspect-square w-full h-full"/>
      </section>
      <section id="top-picks-section" className='max-w-7xl bg-black/90 m-auto w-full md:p-8 rounded-xl shadow-md shadow-black/40 flex-col'>
            
      </section>
    </>
  )
}

