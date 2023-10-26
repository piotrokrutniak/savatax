import Signature from "./signature";

export default function Footbar(){
    return(
        <footer>
        <div className="w-full bg-blue-400 mt-16 text-center text-white flex place-items-center justify-center">
            <div className="w-full flex max-w-7xl p-8">
                <div className="flex flex-col gap-3 text-start">
                    <h1 className="text-6xl font-bold">Savatax</h1>
                    <h2 className="text-2xl font-semibold">Spółka z ograniczoną odpowiedzialnością </h2>
                    <p className="text-xl">Na Skraju 20, 02-197 Warszawa, Polska </p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
        <div className="w-full h-40 bg-black text-center text-white flex place-items-center justify-center">
            <Signature/>
        </div>
        </footer>
    )
}