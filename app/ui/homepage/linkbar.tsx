import Link from "next/link";

// Defining datatype of parameters
type DropdownLink = { name: string; href: string };

type DropdownProps = {
  links: DropdownLink[];
};

export default function LinkBar({links}: DropdownProps) {
    // For each item in list, return a link
    return (
        <>
            {links.map((link => {
                return (
                    <div key= {link.name} className="w-full rounded-xl md:rounded-3xl bg-black text-white py-2 md:py-8 items-center text-center my-2 md:mx-1">
                        <Link href={link.href} className="transition-all duration-150 ease-in-out flex items-center justify-center w-full hover:scale-110">
                            {link.name}            
                        </Link>
                    </div>
                );
            }))}
        </>
    );
}