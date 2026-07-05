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
    <div className="flex flex-1 w-full flex-col bg-zinc-50 items-center justify-between md:py-32 md:px-16 py-16 px-4 text-xl md:font-bold">
      {/* <div className="fixed w-full top-0 left-0 z-10 bg-purple-200">
        <button className="cursor-pointer pt-3 pl-3 md:hidden">
          <Image src="/burger.svg" width={40} height={40} alt=""></Image>
        </button>
      </div> */}
      <div className="md:w-full w-[80%] md:flex md:flex-row gap-2">
        <div className="w-full">
          <h1 className="w-full text-center text-black text-2xl font-bold md:pb-5">Ballroom</h1>
          <div className="w-full">
            <LinkBar links={ballroomlinks}/>
          </div>
        </div>
        <br />
        <div className="w-full">
          <h1 className="w-full text-center text-black text-2xl font-bold md:pb-5">Latin</h1>
          <div className="w-full">
            <LinkBar links={latinlinks}/>
          </div>
        </div>
      </div>
    </div>
  );
}


{/* <div className="md:w-full w-[80%]">
        <h1 className="w-full text-center text-black text-2xl font-bold">Ballroom</h1>
        <div className="md:flex md:flex-row w-full">
          <LinkBar links={ballroomlinks}/>
        </div>
        <br />
        <h1 className="w-full text-center text-black text-2xl font-bold">Latin</h1>
        <div className="w-full">
          <LinkBar links={latinlinks}/>
        </div>
      </div> */}
