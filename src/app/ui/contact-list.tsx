import Image from "next/image";
import { contact } from "@/app/lib/definitions";
import { fetchContacts } from "@/app/lib/data";

export default async function ContactsList() {
  let contacts = await fetchContacts();
  return (
    <ul className="w-full grid grid-cols-2 gap-2">
      {contacts.map((contact) => {
        return (
          <li key={contact.phone} className="flex flex-row items-center my-2">
            <Image
              width={60}
              height={60}
              alt={contact.name}
              src={contact.image}
            />
            <div className="text-base text-black ml-2">
              <p>{contact.name}</p>
              <p>{contact.phone}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
