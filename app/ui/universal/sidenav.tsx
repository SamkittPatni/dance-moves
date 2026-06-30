import Link from "next/link";

// name: 'Home', href: '/';
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
            <Link href='/'>
                Home
            </Link>
            <p>Ballroom</p>
            <div className="pl-5">
                {ballroomlinks.map((link => {
                    return (
                        <div key= {link.name}>
                            <Link href={link.href}>
                                {link.name}            
                            </Link>
                        </div>
                    );
                }))}
            </div>
            <p>Latin</p>
            <div className="pl-5">
                {latinlinks.map((link => {
                    return (
                        <div key= {link.name}>
                            <Link href={link.href}>
                                {link.name}            
                            </Link>
                        </div>
                    );
                }))}
            </div>
        </>
    );
}