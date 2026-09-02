'use client';
import Link from 'next/link'
import Dropdown from './dropdown'
import { useState } from 'react';

const ballroomlinks = [
  { name: 'Waltz', href: '/ballroom/waltz'},
  { name: 'Tango', href: '/ballroom/tango'},
  { name: 'Viennese', href: '/ballroom/viennese'},
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


export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <div className="fixed top-0 left-0">
        <div className={`py-5 px-10 flex flex-row w-screen overflow-hidden bg-neutral-950/95 transition-all duration-700 ${isOpen ? 'h-50' : 'h-11'}`} >
          <div className="pr-20">
            <Link href='/' className="block hover:font-bold">
              Home
            </Link>
          </div>
          <div className="pr-20">
            <button onClick={() => setIsOpen(!isOpen)} className="hover:font-bold cursor-pointer"> Ballroom </button>
            {ballroomlinks.map((link => {
                return (
                    <div key= {link.name}>
                        <Link href={link.href} className="text-sm hover:font-bold">
                            {link.name}            
                        </Link>
                    </div>
                );
            }))}
          </div>
          <div>
            <button onClick={() => setIsOpen(!isOpen)} className="hover:font-bold cursor-pointer"> Latin </button>
            {latinlinks.map((link => {
                return (
                    <div key= {link.name}>
                        <Link href={link.href} className="text-sm hover:font-bold">
                            {link.name}            
                        </Link>
                    </div>
                );
            }))}
          </div>
        </div>
      </div> */}
      <div>
	<Link href="/">Home</Link>
      </div>
    </>
  )
}
