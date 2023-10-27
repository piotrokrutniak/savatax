import Signature from "./signature";

export default function Footbar(){
    return(
        <footer>
        <div className="w-full h-40 bg-blue-400 mt-16 text-center text-white flex place-items-center justify-center">
            <div className="w-full flex max-w-7xl bg-black/10 h-10">
                <div className="flex flex-col gap-5">
                    <h1>Savatax</h1>
                    <p></p>
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