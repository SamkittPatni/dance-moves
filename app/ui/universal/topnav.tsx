'use client';
import Link from 'next/link'
import { useRouter, usePathname } from "next/navigation";
import Dropdown from './dropdown'
import { useState } from 'react';
import {ChevronDoubleLeftIcon} from "@heroicons/react/24/outline";

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
  const router = useRouter();
  const pathname = usePathname();
  if (pathname === '/') {
    return (
      <>
        <div className="flex items-center">
          <Link href="/">Home</Link>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <div className="flex items-center">
          <ChevronDoubleLeftIcon className="absolute w-6 h-6 left-5 transition-all duration-150 ease-in-out hover:scale-120" onClick={() => router.back()}>&lt;</ChevronDoubleLeftIcon>
          <Link className="transition-all duration-150 ease-in-out hover:scale-110" href="/">Home</Link>
        </div>
      </>
    )
  }
}
