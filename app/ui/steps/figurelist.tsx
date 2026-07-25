import Link from "next/link";

type FigureListProps = {
    steps: { name: string; href: string }[];
};

export default function FigureList({ steps }: FigureListProps) {
    return (
        <>
        <div className="text-lg">
            <ul>
                {steps.map((step) => (
                    <li key={step.name}>
                        <Link href={step.href}>{step.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}