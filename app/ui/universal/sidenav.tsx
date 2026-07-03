import Link from "next/link";
import Dropdown from "./dropdown";

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