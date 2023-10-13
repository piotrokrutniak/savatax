import Image from 'next/image'
import PostList from './components/generic/postList'
import SplashArt from '../../public/media/8.jpg'
import Button from './components/generic/button'

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <section className="w-full h-screen-1/2 bg-gradient-to-t from-black to-black/90 relative text-white">
        <div id="top-picks-section" className="absolute p-8 w-full mx-auto z-30 m-auto bottom-0 ">
            <div className='max-w-7xl mx-auto w-fullrounded-xl flex flex-col gap-4'>
              <h1 className="font-bold md:w-1/2 md:text-4xl max-w-7xl">Zaufaj profesjonalistom w dziedzinie rachunkowości</h1>
              <h2 className="font-semibold opacity-90 md:w-1/2 md:text-xl max-w-7xl">
                Świadczymy kompleksowe usługi księgowe, podatkowe i doradcze dla małych i średnich firm.
                Skontaktuj się z nami i dowiedz się, co możemy zrobić dla Twojej firmy!
              </h2>
              <Button className="w-fit text-xl p-4 mt-2 shadow-md shadow-black/20 active:opacity-80
                hover:bg-gradient-to-br from-blue-500 via-blue-500 to-blue-400">
                Kontakt
              </Button>
            </div>
        </div>
        <div className="w-full h-full top-0 z-0">
          <Image loading="lazy" layout="fill" objectFit="cover" src={SplashArt} alt="Album thumbnail" className="opacity-40 relative w-full h-full"/>
        </div>
      </section>
      <section id="top-picks-section" className='max-w-7xl bg-black/5 mx-auto w-full md:p-8 rounded-xl flex-col'>
            <h1 className="md:text-3xl font-bold">Rachunkowość bez stresu</h1>
      </section>
    </div>
  )
}

