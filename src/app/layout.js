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
				<div className="grid max-w-5xl grid-cols-5 mx-auto bg-background ">
					{children}
					<Navbar />
				</div>
				<Footer />
			</body>
		</html>
	);
}
