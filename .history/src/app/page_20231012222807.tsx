import Image from 'next/image'
import PostList from './components/generic/postList'
import SplashArt from '../../public/media/stock-photo-business-financing-accountin121g.jpg'

export default function Home() {
  return (
    <>
      <section className="w-full h-screen-1/2 bg-black/10">
      <Image loading="lazy" layout="fill" objectFit="fill" src={SplashArt} alt="Album thumbnail" className="aspect-square h-full"/>
      </section>
      <section id="top-picks-section" className='max-w-7xl bg-black/90 m-auto w-full md:p-8 rounded-xl shadow-md shadow-black/40 flex-col'>
            
      </section>
    </>
  )
}

