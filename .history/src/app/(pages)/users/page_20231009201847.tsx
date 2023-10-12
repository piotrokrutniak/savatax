import { UserList } from "@/app/components/generic/userList";

export default function UsersPage(pageData: {searchParams: any}){
    return(
        <section className='max-w-7xl flex flex-col overflow-hidden gap-5 bg-black/90 mx-auto w-full rounded-xl shadow-md shadow-black/40 text-white'>
            <div className="p-8">
                <span className="font-semibold text-xl">Users</span>
            </div>
            <div className="">
                <UserList/>
            </div>
        </section>
    )
}