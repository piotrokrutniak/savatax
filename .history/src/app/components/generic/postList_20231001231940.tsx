"use client"

import GetPosts from "@/app/integration/jsonApi/getPosts"
import { Post } from "@/app/types"
import { useEffect, useState } from "react"
import greekMeatLoaf from '../../../../public/media/breakfast.jpg'
import { PostItem } from "../posts/post"

export default function PostList(){
    const [posts, setPosts] = useState<Post[]>([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        GetPosts(page)
            .then(x => setPosts([...x]))
    }, [])
    
    return(
        <div className="text-white flex flex-col gap-5">
            {posts.map(x => 
                <PostItem 
                    post={x}/>
            )}
            <div className="flex justify-center w-full bg-black p-8 rounded-md gap-2">
                <div className="h-8 w-8 aspect-square bg-slate-300/40 flex justify-center items-center rounded-md">1</div>
                <div className="h-8 w-8 aspect-square bg-slate-300/40 flex justify-center items-center rounded-md">2</div>
                <div className="h-8 w-8 aspect-square bg-slate-300/40 flex justify-center items-center rounded-md">3</div>
                <div className="h-8 w-8 aspect-square bg-slate-300/40 flex justify-center items-center rounded-md">4</div>
            </div>
        </div>
    )
}