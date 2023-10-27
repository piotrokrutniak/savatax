import Signature from "./signature";

export default function Footbar(){
    return(
        <footer>
        <div className="w-full bg-blue-400 mt-16 text-center text-white flex place-items-center justify-center">
            <div className="w-full flex max-w-6xl py-20 md:px-16">
                <div className="flex flex-col gap-4 text-start">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold">Savatax</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold">Na Skraju 20</p>
                        <p className="text-lg font-semibold">02-197 Warszawa</p>
                        <p className="text-lg font-semibold">Polska </p>
                    </div>
                        <p className="text-lg font-semibold">NIP: 5223259648 </p>
                    
                </div>
            </div>
        </div>
        <div className="w-full h-40 bg-black text-center text-white flex place-items-center justify-center">
            <Signature/>
        </div>
        </footer>
    )
}