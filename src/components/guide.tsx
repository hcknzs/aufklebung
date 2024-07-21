import { cn } from "@/lib/utils";

export const Guide: React.FC<{ className?: string }> = (props) => {
	return (
		<div
			className={cn(
				"mb-5 mt-5 flex flex-col gap-4 lg:mb-10",
				props.className,
			)}
		>
			<h1 className="font-bold">Das ist zu tun:</h1>
			<ol className="list-decimal pl-5">
				<li>
					<span className="bg-primary px-1 text-white">
						Sticker anpassen
					</span>
				</li>
				<li>
					<span className="bg-primary px-1 text-white">
						Sticker herunterladen
					</span>{" "}
					- auf dein Handy oder Stick
				</li>
				<li>
					<span className="bg-primary px-1 text-white">
						Sticker ausdrucken
					</span>{" "}
					- Am einfachsten geht das in deinem nächsten Drogeriemarkt
				</li>
				<li>
					<span className="bg-primary px-1 text-white">
						Sticker aufkleben
					</span>{" "}
					- In der Stadt, auf den Laptop, oder wo auch immer du
					möchtest
				</li>
			</ol>
		</div>
	);
};
