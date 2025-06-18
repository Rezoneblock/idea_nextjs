import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jetBrainsMono = localFont({
	src: "./fonts/JetBrainsMono-VariableFont_wght.ttf",
});

export const metadata: Metadata = {
	title: "Gordeev",
	description: "By Gordeev Timur",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={jetBrainsMono.className}>{children}</body>
		</html>
	);
}
