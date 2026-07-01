'use client'
import Link from "next/link";
import { useState } from "react";

// Defining datatype of parameters
type DropdownLink = { name: string; href: string };

type DropdownProps = {
  title: string;
  height: number;
  links: DropdownLink[];
};

export default function Dropdown({title, height, links}: DropdownProps) {
    // State to know if dropdown is open or closed
    const [isOpen, setIsOpen] = useState(false);

    return (
        // On click, transition height of div to open and display links
        <div className="overflow-hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="hover:font-bold cursor-pointer"> {title} </button>
            <div className={`transition-all duration-700 ${isOpen ? 'h-'+height : 'h-0'}`} >
                {links.map((link => {
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
    );
}