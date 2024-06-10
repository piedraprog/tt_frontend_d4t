import { Sidebar } from "../components/sidebar";

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="h-full bg-gray-50">
			<body>
				<div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
					<Sidebar/>
					<div className="flex flex-col">
						{children}
					</div>
				</div>

			</body>
		</html>
	);
}
