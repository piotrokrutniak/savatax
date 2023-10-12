"use client"
import GetAlbumById from "@/app/integration/jsonApi/getAlbumById"
import GetAlbumPhotos from "@/app/integration/jsonApi/getAlbumPhotos"
import GetAlbumsByUserId from "@/app/integration/jsonApi/getAlbumsByUserId"
import GetUser from "@/app/integration/jsonApi/getUser"
import { Album, Photo, User } from "@/app/types"
import { useEffect, useState } from "react"
import { FaUser, FaImages } from "react-icons/fa"
import Image from "next/image"

export default function UserPage(pageData: {params: {id: number}, searchParams: any}){
    const data = pageData.params
    const [user, setUser] = useState<User>()
    const [album, setAlbum] = useState<Album>()
    const [selectedPhoto, setSelectedPhoto] = useState<Photo|undefined>()
    const [photos, setPhotos] = useState<Photo[]>([])
    
    useEffect(() => {
        GetAlbumById(data.id)
            .then((x) => {
                setAlbum(x.body);
                return x.body;
            })
            .then(x => {
                GetUser(x.userId)
                    .then(x => setUser(x));
                return x;
            })
            .then(x => GetAlbumPhotos(x.id, 1)
                .then(x => {
                    setPhotos([...x.body]);
                    setSelectedPhoto(x.body[0])
                    }
            ))

    //   GetUser(data.id)
    //     .then(x => setUser(x))
    //     .then(() => GetAlbumsByUserId(1, user?.id))
    //     .then(x => setAlbum(x.body))
    }, [])

    return(
        <>
        <section id="header-section" className='max-w-7xl flex flex-col overflow-hidden gap-5 bg-black/90 m-auto w-full  rounded-xl mt-4 shadow-md shadow-black/40 text-white'>
            <div className="flex gap-10 justify-between place-items-center p-8">
                <div className="h-24 gap-5 flex place-items-center">
                    <FaImages className="w-32 h-2/3"/>
                    <h1 className="capitalize-first text-xl md:text-2xl font-semibold">{album?.title ?? "-"}</h1>
                </div>

            </div>
        </section>

        <section id="header-section" className='max-w-7xl flex flex-col overflow-hidden gap-8 bg-black/90 m-auto w-full rounded-xl mt-4 shadow-md shadow-black/40 text-white p-8 relative'>
            <div id="photo-section" className="w-full h-96 relative">
                <Image layout="fill" objectFit="contain" src={selectedPhoto?.url ?? ""} alt="Album thumbnail" className="max-h-96 h-full"/>
            </div>
            <div id="user-info" className="flex w-72 justify-between flex-row-reverse right-0 absolute gap-5">
                <div className="flex flex-col place-items-end">
                    <span className="text-lg whitespace-nowrap font-semibold">
                        {user?.name}
                    </span>
                    <span className="text-base opacity-80">
                        @{user?.username ?? "guest"}
                    </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-600 flex justify-center place-items-center">
                        <FaUser className="w-full h-2/3"/>
                </div>
            </div>
            <div className="text-3xl font-semibold px-8">Photos</div>
            <div id="gallery" className="grid gap-4 grid-auto-fit-xs mt-4">
                {photos.length > 0 ? photos.map(x => <GalleryPanel photo={x}/>) : "This gallery is empty."}
            </div>
        </section>
        
        </>
    )
}

function GalleryPanel({photo}:{photo: Photo}){
    return(
        <div className="relative aspect-square">
            <Image layout="fill" objectFit="contain" src={photo.url ?? ""} alt="Album thumbnail" className="max-h-96 h-full cursor-pointer active:opacity-80"/>
        </div>
    )
}