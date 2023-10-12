"use client"

import GetPosts from "@/app/integration/jsonApi/getPosts"
import { Post } from "@/app/types"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import greekMeatLoaf from '../../../../public/media/breakfast.jpg'
import { PostItem } from "../posts/post"
import { count } from "console"

export default function PostList(){
    const [posts, setPosts] = useState<Post[]>([])
    const [page, setPage] = useState<number>(1)
    const [pages, setPages] = useState<number[]>([])
    const [count, setCount] = useState<number>(0)
    useEffect(() => {
        GetPosts(page)
            .then(x => {setPosts([...x.body]); setCount(Number.parseInt(x.count))})
            .then(() => setPages([...GeneratePages(page, count)]))
        
    }, [page])
    
    return(
        <div className="text-white flex flex-col gap-5">
            <div className="flex justify-center w-full bg-black p-8 rounded-md gap-2">
                <PaginationPanel page={page} setPage={setPage} pages={pages}/>
            </div>
            {posts.map(x => 
                <PostItem 
                    post={x}/>
            )}
        </div>
    )
}

function PaginationPanel({page, setPage, pages} : {
        page: number; 
        setPage: Dispatch<SetStateAction<number>>;
        pages: number[]
    }){

        console.log(pages)

    return(
        pages.map(x => 
            <PageButton index={x} active={page == x} setPage={setPage}/>
        )
    )
}

function PageButton({index, active, setPage} : {
    index: number; 
    active: boolean;
    setPage: Dispatch<SetStateAction<number>>;
    }){

    return(
        <div className={`${active ? "bg-sky-600" : "bg-slate-300/40"} p-4 h-10 w-10 aspect-square 
            flex justify-center items-center rounded-md cursor-pointer select-none
            opacity-80 hover:opacity-100 active:opacity-60`}
            onClick={() => setPage(index)}> 
            {index} 
        </div>
    )
}

function GeneratePages(page: number, count: number){
    let start = 1
    let pages: number[] = []
    let maxPage = count/10

    if(page>3){
        start = page - 2
    }

    let i = start

    while(i < start + 5){
        if(i <= maxPage){
            pages.push(i)
        }

        console.log(pages)

        i++
    }
    
    //pages.sort()

    return pages
}