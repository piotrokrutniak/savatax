import Image from 'next/image'
import PostList from './components/generic/postList'
import SplashArt from '../../public/media/10.jpg'

export default function Home() {
  return (
    <>
      <section className="w-full h-screen-1/2 bg-gradient-to-t from-black to-black/90 relative text-white">
        <div id="top-picks-section" className="absolute p-12 w-full mx-auto z-30 m-auto bottom-0 ">
            <div className='max-w-7xl mx-auto w-fullrounded-xl shadow-md flex flex-col gap-4'>
              <h1 className="font-bold md:w-1/2 md:text-3xl max-w-7xl">Zaufaj profesjonalistom w dziedzinie rachunkowości</h1>
              <h2 className="font-semibold opacity-90 md:w-1/2 text-xl max-w-7xl">
                Oferujemy kompleksowe usługi księgowe, podatkowe i doradcze dla małych i średnich firm.
              </h2>
            </div>
        </div>
        <div className="w-full h-full top-0 z-0">
          <Image loading="lazy" layout="fill" objectFit="cover" src={SplashArt} alt="Album thumbnail" className="opacity-40 relative w-full h-full"/>
        </div>
      </section>
      <section id="top-picks-section" className='max-w-7xl bg-black/90 m-auto w-full md:p-8 rounded-xl shadow-md shadow-black/40 flex-col'>
            
      </section>
    </>
  )
}

