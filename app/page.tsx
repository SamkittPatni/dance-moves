import LinkBar from "./ui/homepage/linkbar";
import Image from "next/image";
import Burger from "./ui/universal/burgermenu";

// Links for pages
const ballroomlinks = [
  { name: 'Waltz', href: '/ballroom/waltz'},
  { name: 'Tango', href: '/ballroom/tango'},
  { name: 'Viennese Waltz', href: '/ballroom/viennese'},
  { name: 'Foxtrot', href: '/ballroom/foxtrot'},
  { name: 'Quickstep', href: '/ballroom/quickstep'},
];

const latinlinks = [
  { name: 'Cha-Cha', href: '/latin/chacha'},
  { name: 'Samba', href: '/latin/samba'},
  { name: 'Rumba', href: '/latin/rumba'},
  { name: 'Paso Doble', href: '/latin/paso'},
  { name: 'Jive', href: '/latin/jive'},
];

export default function Home() {
  return (
    <div className="flex w-full items-center justify-between lg:mx-40 md:py-32 md:px-16 py-16 px-4 text-xl md:font-bold">
      <div className="md:w-full w-full md:flex md:flex-row gap-10 mx-5">
        <div className="w-full">
          <h1 className="font-serif w-full text-center text-2xl font-bold md:pb-5">Ballroom</h1>
          <div className="w-full">
            <LinkBar links={ballroomlinks}/>
          </div>
        </div>
        <br />
        <div className="w-full">
          <h1 className="font-serif w-full text-center text-2xl font-bold md:pb-5">Latin</h1>
          <div className="w-full">
            <LinkBar links={latinlinks}/>
          </div>
        </div>
      </div>
    </div>
  );
}
