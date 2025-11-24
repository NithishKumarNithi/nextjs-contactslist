import Image from "next/image";

type contact = {
  id: number;
  name: string;
  phone: string;
  image: string;
};

export default function ContactsList({ contacts }: { contacts: contact[] }) {
  return (
    <ul className="w-full grid grid-cols-2 gap-2">
      {contacts.map((contact: contact) => {
        return (
          <li key={contact.id} className="flex flex-row items-center my-2">
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
