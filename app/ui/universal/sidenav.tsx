import Link from "next/link";
import Dropdown from "./dropdown";

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

export default function SideNav() {
    return  (
        <>
            <Link href='/' className="hover:font-bold">
                Home
            </Link>
            <Dropdown title="Ballroom" height={30} links={ballroomlinks}/>
            <Dropdown title="Latin" height={30} links={latinlinks}/>
        </>
    );
}