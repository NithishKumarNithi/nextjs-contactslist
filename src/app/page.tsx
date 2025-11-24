import ContactsList from "@/app/ui/contact-list";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-white sm:items-start">
        <h1 className="text-2xl text-black mb-2">Contacts List</h1>
        <Suspense
          fallback={<div className="text-xl text-black my-4">Loading...</div>}
        >
          <ContactsList />
        </Suspense>
      </main>
    </div>
  );
}
