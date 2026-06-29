import Image from "next/image";
import Link from "next/link";

const ballroomlinks = [
  { name: 'Waltz', href: '/ballroom/waltz'},
  { name: 'Quickstep', href: '/ballroom/quickstep'},
  { name: 'Foxtrot', href: '/ballroom/foxtrot'},
  { name: 'Tango', href: '/ballroom/tango'},
  { name: 'Viennese Waltz', href: '/ballroom/viennese'},
];

const latinlinks = [
  { name: 'Cha-Cha', href: '/latin/chacha'},
  { name: 'Jive', href: '/latin/jive'},
  { name: 'Samba', href: '/latin/samba'},
  { name: 'Rumba', href: '/latin/rumba'},
  { name: 'Paso Doble', href: '/latin/paso'},
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <h1 className="w-full text-center text-black text-2xl font-bold">Ballroom</h1>
        <div className="w-full">
          {ballroomlinks.map((link => {
            return (
              <div key= {link.name} className="w-full rounded-full bg-black text-white py-2 items-center text-center my-2">
                <Link href={link.href} className="flex items-center justify-center w-full">
                  {link.name}            
                </Link>
              </div>
            );
          }))}
        </div>
        <br />
        <h1 className="w-full text-center text-black text-2xl font-bold">Latin</h1>
        <div className="w-full">
          {latinlinks.map((link => {
            return (
              <div key= {link.name} className="w-full rounded-full bg-black text-white py-2 items-center text-center my-2">
                <Link href={link.href} className="flex items-center justify-center w-full">
                  {link.name}            
                </Link>
              </div>
            );
          }))}
        </div>
      </main>
    </div>
  );
}
