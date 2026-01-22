import { Geist, Geist_Mono, Oswald, Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
});

export const metadata = {
	title: "Joshua Delos Reyes - Web Developer",
	description: "A portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${oswald.variable} ${roboto.variable} ${inter.variable} antialiased`}>
				<div className="mx-auto max-w-6xl bg-background flex flex-col md:flex-row gap-6 px-6">
					<div className="flex-1">{children}</div>
					<div className="w-full md:w-64">
						<Navbar />
					</div>
				</div>
				<Footer />
			</body>
		</html>
	);
}
