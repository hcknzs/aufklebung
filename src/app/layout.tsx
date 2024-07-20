import "./globals.css";
import "@fontsource/ibm-plex-mono/400-italic.css";
import "@fontsource/ibm-plex-mono/600-italic.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/300-italic.css";
import "@fontsource/bagel-fat-one";

import type { Metadata } from "next";
import Link from "next/link";

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
			<body>
				<Link href="/">HOME</Link>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
