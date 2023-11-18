"use client";

import FindMusic from '@/components/01-find-music/find-music';
// import ConnectMessage from '@/components/connect-message'
// import ContactsList from '@/components/contacts/contacts-list'
// import PartyMode from "@/components/party-mode/party-mode";
// import { data } from "@/components/party-mode/data";

export default function Home() {
  return (
    <main className="bg-gray-200 h-screen">
      <div className="grid grid-cols-4 mx-6 m-auto gap-x-4">
        <div className="">
          Grid Item 1
        </div>
        <div className="grid gap-4">
          <div>Add Callers To Group</div>
          <div>Calling between 2</div>

          <FindMusic />

        </div>
        <div>Grid Item 3</div>
        <div>Grid Item 4</div>
        <div>Grid Item 5</div>
        <div>Grid Item 6</div>
        <div>Grid Item 7</div>
        <div>Grid Item 8</div>
      </div>
    </main>
  )
}
