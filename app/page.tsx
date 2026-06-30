import LinkBar from "./ui/homepage/linkbar";

// Links for pages
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
    <div className="flex flex-1 w-full flex-col items-center justify-between md:py-32 md:px-16 py-16 px-4 bg-white sm:items-start">
      <h1 className="w-full text-center text-black text-2xl font-bold">Ballroom</h1>
      <div className="md:flex md:flex-row w-full">
        <LinkBar links={ballroomlinks}/>
      </div>
      <br />
      <h1 className="w-full text-center text-black text-2xl font-bold">Latin</h1>
      <div className="w-full">
        <LinkBar links={latinlinks}/>
      </div>
    </div>
  );
}
