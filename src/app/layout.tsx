import "./globals.css";
import "@fontsource/ibm-plex-mono/400-italic.css";
import "@fontsource/ibm-plex-mono/600-italic.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/600.css";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Aufklebung",
};

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body className="bg-lime font-plex">
				<div className="m-auto flex max-w-screen-sm flex-col gap-4">
					<header className="relative flex aspect-video justify-center pt-[20vw] align-middle sm:pt-32">
						<Image
							className="absolute left-0 top-0 z-[-1] rotate-180"
							src="/tiles-bottom.png"
							width="1500"
							height="796"
							alt=""
						/>
						<Link href="/">
							<span className="sr-only">Zur Startseite</span>
							<Image
								width="140"
								height="140"
								src="/logo.svg"
								alt=""
								className="mt-8 block w-[20vw] max-w-32"
							/>
						</Link>
					</header>

					<main>{children}</main>

					<hr className="m-auto my-6 w-[calc(100%-60px)] border border-teal-200" />

					<footer className="relative m-auto flex aspect-video w-full max-w-screen-sm flex-col items-center justify-end gap-6 pb-[25vw] sm:min-h-48 sm:pb-36">
						<Image
							className="absolute bottom-0 z-[-1] w-full"
							src="/tiles-bottom.png"
							width="1500"
							height="796"
							alt=""
						/>

						<a
							href="https://bluespotsproductions.de/impressum"
							target="_blank"
							rel="noopener noreferrer"
						>
							Impressum & Datenschutz
						</a>

						<Image
							className=""
							src="/signet.svg"
							width="158"
							height="39"
							alt=""
						/>
					</footer>
				</div>
			</body>
			<Script
				data-goatcounter="https://aufklebung.goatcounter.com/count"
				src="//gc.zgo.at/count.js"
				strategy="lazyOnload"
			/>
		</html>
	);
};

export default RootLayout;
