// 'use client'
import "./globals.css"
import { ToastProvider } from "@/lib/ToastContext"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="is">
		<body>

			<ToastProvider>

			<div className='wrapper'>
				<Header />
				{children}
			</div>

			<Footer />
			</ToastProvider>
		
		</body>
		</html>
	);
}