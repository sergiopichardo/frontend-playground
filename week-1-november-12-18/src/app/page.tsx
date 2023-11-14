"use client";

// import ConnectMessage from '@/components/connect-message'
import ContactsList from '@/components/contacts/contacts-list'

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <ContactsList />
    </main>
  )
}
