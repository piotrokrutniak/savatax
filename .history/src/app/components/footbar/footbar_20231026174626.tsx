import Signature from "./signature";

export default function Footbar(){
    return(
        <>
        <div className="w-full h-40 bg-blue-400 mt-16 text-center text-white flex place-items-center justify-center">
            <div className="w-full max-w-7xl bg-black/10 h-10">

            </div>
        </div>
        <div className="w-full h-40 bg-black text-center text-white flex place-items-center justify-center">
            <Signature/>
        </div>
        </>
    )
}