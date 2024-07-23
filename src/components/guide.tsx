import { cn } from "@/lib/utils";

const emphasized = "bg-white px-1 text-primary-500 font-bold";

const Li = ({ children }: { children: React.ReactNode }) => (
	<li className="mt-3">{children}</li>
);

export const Guide: React.FC<{ className?: string }> = (props) => {
	return (
		<div
			className={cn(
				"prose mb-5 mt-5 flex flex-col gap-4 lg:mb-10",
				props.className,
			)}
		>
			<ol className="list-decimal pl-5">
				<Li>
					<span className={emphasized}>Anpassen!</span>
				</Li>
				<Li>
					<span className={emphasized}>Herunterladen!</span> — Am
					einfachsten auf dein Handy oder einen USB-Stick / SD-Karte
				</Li>
				<Li>
					<span className={emphasized}>Drucken!</span> — Am
					einfachsten geht das in einem Drogeriemarkt in deiner Nähe.
					Achte auf das Format (rund oder eckig) und die Größe!
				</Li>
				<Li>
					<span className={emphasized}>Aufkleben!</span> — In der
					Stadt, auf den Laptop, oder wo auch immer du
					möchtest&nbsp;:-)
				</Li>
				<Li>
					<span className={emphasized}>Teilen!</span> — Zeigt uns eure
					Kreationen auf{" "}
					<a
						href="https://www.instagram.com/aufklebung.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary-500 underline"
					>
						📸 Instagram
					</a>
					!
				</Li>
			</ol>
		</div>
	);
};
