'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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

export default function Burger() {
    // State to know if dropdown is open or closed
    const [isOpen, setIsOpen] = useState(false);

    return (
        // On click, transition height of div to open and display links
        <div className="fixed top-0 left-0 z-50 md:hidden pointer-events-auto">
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="relative z-50 cursor-pointer pt-1 pl-1">
                <Image src="/burger.svg" width={40} height={40} alt=""></Image>
            </button>
            <div className={`overflow-hidden bg-gray-500 pl-1 w-30 transition-all duration-700 ${isOpen ? 'h-85' : 'h-0'}`} >
                <Link href='/' className="block hover:font-bold">
                    Home
                </Link>
                <div>
                    Ballroom
                    {ballroomlinks.map((link => {
                        return (
                            <div key= {link.name} className="pl-5">
                                <Link href={link.href} className="hover:font-bold">
                                    {link.name}            
                                </Link>
                            </div>
                        );
                    }))}
                </div>
                <div>
                    Latin
                    {latinlinks.map((link => {
                        return (
                            <div key= {link.name} className="pl-5">
                                <Link href={link.href} className="hover:font-bold">
                                    {link.name}            
                                </Link>
                            </div>
                        );
                    }))}
                </div>
            </div>
        </div>
    );
}