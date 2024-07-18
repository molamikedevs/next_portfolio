import type { Metadata } from "next";
import { Jost } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from './privider'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Molamike Devs Portfolio',
	description: 'Modern portfolio',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={jost.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
