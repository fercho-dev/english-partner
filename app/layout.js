import "@/styles/globals.css";
import GoogleAnalytics from './GoogleAnalytics';

export const metadata = {
	title: 'English Partner',
  description: 'Aprende inglés con una IA como tu compañero de conversación',
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: 'English Partner',
    description: 'Aprende inglés con una IA como tu compañero de conversación',
    images: [
      {
        url: 'https://i.imgur.com/1QcdIAN.png',
        width: 800,
        height: 600,
        alt: 'English Partner - Aprende inglés con una IA',
      },
      {
        url: 'https://i.imgur.com/1QcdIAN.png',
        width: 1800,
        height: 1600,
        alt: 'English Partner - Aprende inglés con una IA',
      },
    ],
    type: 'website',
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
