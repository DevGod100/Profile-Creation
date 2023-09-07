"use client"

// import { createTodoAction } from "../_actions";


const SimpleForm = () => {
    // async function action(data: FormData) {
    //     const name = data.get('name')
    //     const email = data.get('email')
    //     if(!title || typeof title !== 'string') return;

    //     await createTodoAction(title)
    // }
  return (
    // <form action={action}>
    // <div  className="flex min-h-screen flex-col items-center justify-between p-24">
    <form action='' className="border border-gray-500 rounded p-6">
        <h2 className="text-lg font-bold mb-4">Create Job-Seeker Profile</h2>
        <div className="flex flex-col gap-4">

        <input 
        className='rounded border border-slate-400 px-2 py-0.5'
        type="text" 
        placeholder="name"
        name="title"/>

        <input 
        className='rounded border border-slate-400 px-2 py-0.5'
        type="text" 
        placeholder="email"
        name="title"/>
        
        </div>

        <div className="my-4">
        <button 
        className='rounded bg-slate-700 px-2 py-1 text-sm text-white disabled:bg-opacity-50' 
        type="submit">
         Create
        </button>
        </div>
    </form>
    // </div>
  )
}

export default SimpleForm