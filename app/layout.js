import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import GoogleAnalytics from './GoogleAnalytics';

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body>
        <GoogleAnalytics />
        {children}
			</body>
		</html>
	);
}
