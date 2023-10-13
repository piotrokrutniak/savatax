import Image from 'next/image'
import PostList from './components/generic/postList'
import SplashArt from '../../public/media/8.jpg'
import Button from './components/generic/button'

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <section className="w-full h-screen-1/2 bg-gradient-to-t from-black to-black/90 relative text-white">
        <div id="slider-section" className="absolute p-8 w-full mx-auto z-30 m-auto bottom-0">
            <div className='max-w-6xl px-16 mx-auto w-fullrounded-xl flex flex-col gap-4'>
              <h1 className="font-bold md:w-1/2 md:text-4xl max-w-6xl">Zaufaj profesjonalistom w dziedzinie rachunkowości</h1>
              <h2 className="font-semibold opacity-90 md:w-1/2 md:text-xl max-w-6xl">
                Świadczymy kompleksowe usługi księgowe, podatkowe i doradcze dla małych i średnich firm.
                Skontaktuj się z nami i dowiedz się, co możemy zrobić dla Twojej firmy!
              </h2>
              <Button className="w-fit text-xl p-4 mt-2 shadow-md shadow-black/20 active:opacity-80
                hover:bg-gradient-to-br from-blue-500 via-blue-500 to-blue-400">
                Kontakt
              </Button>
            </div>
        </div>
        <div className="w-full h-screen-1/2 top-0 z-0">
          <Image loading="lazy" layout="fill" objectFit="cover" src={SplashArt} alt="Album thumbnail" className="opacity-40 absolute w-full h-full"/>
        </div>
      </section>
      <section id="summary-section" className='max-w-6xl mx-auto w-full md:p-16 rounded-xl flex flex-col gap-5'>
            <h1 className="md:text-3xl font-bold text-blue-400">Rachunkowość bez stresu</h1>
            <p className="md:text-lg font-normal">
              Jeśli szukasz profesjonalnej i rzetelnej firmy, która zajmie się Twoją rachunkowością, podatkami, finansami i prawem, to trafiłeś w dobre miejsce. 
              Nasza firma doradcza oferuje kompleksowe i indywidualne rozwiązania dla małych i średnich przedsiębiorstw z różnych branż. 
            </p>

            <p className="md:text-lg opacity-90">
              Naszym celem jest zapewnienie Ci spokoju i bezpieczeństwa, a także pomóc Ci w osiąganiu lepszych wyników.
            </p>

            <p className="pt-16">
              <span className="md:text-2xl">
              Nasza oferta obejmuje między innymi:
              </span>
              <ul className="md:text-lg list-disc pl-6 pt-2 flex flex-col gap-2">
                <li>prowadzenie księgowości i sprawozdawczości finansowej</li>
                <li>sporządzanie deklaracji podatkowych i rozliczeń z urzędami skarbowymi</li>
                <li>doradztwo podatkowe i optymalizacja podatkowa</li>
                <li>analiza finansowa i planowanie budżetowe</li>
                <li>doradztwo prawne i obsługa umów</li>
              </ul>
            </p>
      </section>
    </div>
  )
}

