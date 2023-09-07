import DisplayUsers from '@/components/DisplayUsers'
import FullProfile from '@/components/full-profile/FullProfile'

export default function Home() {
  return (
    <main  className="flex min-h-screen flex-col items-center justify-between p-24">
     {/* <div className='flex flex-col m-2 p-2 border border-gray-5 rounded-md' >
     <ProfileName />
     <ProfileImage />
     </div> */}
     <DisplayUsers />
    </main>
  )
}


