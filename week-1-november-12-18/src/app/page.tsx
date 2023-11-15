"use client";

// import ConnectMessage from '@/components/connect-message'
// import ContactsList from '@/components/contacts/contacts-list'
import PartyMode from "@/components/party-mode/party-mode";
import { data } from "@/components/party-mode/data";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <PartyMode media={data} />
    </main>
  )
}
