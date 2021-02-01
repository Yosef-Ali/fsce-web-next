import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import Navbar from '../components/NavBar';

export default function Home() {
	const [isMounted, setIsMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const switchTheme = () => {
		if (isMounted) {
			setTheme(theme === 'light' ? 'dark' : 'light');
		}
	};

	return (
		<div>
			<Head>
				<title>FSCE</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar switchTheme={switchTheme} theme={theme} />
		</div>
	);
}
