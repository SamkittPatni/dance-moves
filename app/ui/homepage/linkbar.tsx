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
                    <div key= {link.name} className="w-full bg-white/90 text-black py-2  items-center text-center my-2 py-5 text-2xl font-medium">
                        <Link href={link.href} className="transition-all duration-150 ease-in-out flex items-center justify-center w-full hover:scale-110 hover:text-black">
                            {link.name}
                        </Link>
                    </div>
                );
            }))}
        </>
    );
}
