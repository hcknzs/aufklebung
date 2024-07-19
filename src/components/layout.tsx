import { ReactNode } from "react";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<main>
			<div className="flex min-h-screen flex-col items-center justify-center gap-8">
				{children}
			</div>
		</main>
	);
};
