import React from 'react';
import Link from 'next/link';
import {
	FaBars,
	FaSun,
	FaMoon,
	FaTwitter,
	FaFacebookSquare,
	FaYoutube,
} from 'react-icons/fa';

const Navbar = ({ switchTheme, theme }) => {
	const [navbarOpen, setNavbarOpen] = React.useState(false);

	return (
		<nav className='fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-white shadow dark:bg-gray-800'>
			<div class='container flex flex-wrap items-center justify-between px-4 mx-auto bg-white dark:bg-gray-800'>
				<div className='relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start'>
					<Link href='/'>
						<a className='inline-block py-2 mr-4 font-bold leading-relaxed text-gray-600 text-gray-800 uppercase whitespace-no-wrap hover:opacity-75 text-md dark:text-white'>
							FSCE.org
						</a>
					</Link>
					<button
						className='text-xl leading-none bg-transparent bg-white border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none dark:bg-gray-800 hover:opacity-75 dark:text-white'
						type='button'
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<FaBars />
					</button>
				</div>
				<div
					className={
						'lg:flex flex-grow items-center bg-white dark:bg-gray-800 lg:bg-transparent lg:shadow-none' +
						(navbarOpen ? ' block' : ' hidden')
					}
					id='example-navbar-warning'
				>
					<ul className='flex flex-col list-none lg:flex-row'>
						<li className='flex items-center'>
							<Link href='/'>
								<a className='flex items-center px-3 py-4 text-sm font-bold text-gray-800 uppercase dark:text-white hover:opacity-75 lg:py-2 dark:hover:text-gray-300'>
									Home
								</a>
							</Link>
						</li>
						<li className='flex items-center'>
							<Link href='/about'>
								<a className='flex items-center px-3 py-4 text-sm font-bold text-gray-800 uppercase dark:text-white hover:opacity-75 lg:py-2 dark:hover:text-gray-300'>
									About Us
								</a>
							</Link>
						</li>
						<li className='flex items-center'>
							<Link href='/blog/hello-world'>
								<a className='flex items-center px-3 py-4 text-sm font-bold text-gray-800 uppercase dark:text-white hover:opacity-75 lg:py-2 dark:hover:text-gray-300'>
									Blog Post
								</a>
							</Link>
						</li>
					</ul>
					<div className='items-center flex-grow lg:flex'>
						<ul className='flex ml-auto list-none lg:flex-row'>
							<li className='flex items-center'>
								<Link href='/'>
									<a
										className='flex items-center px-3 py-2 text-xs font-bold leading-snug uppercase '
										href='#pablo'
									>
										<FaFacebookSquare className='text-lg text-gray-800 hover:opacity-75 dark:text-white' />
									</a>
								</Link>
							</li>
							<li className='flex items-center'>
								<Link href='/'>
									<a
										className='flex items-center px-3 py-2 text-xs font-bold leading-snug uppercase '
										href='#pablo'
									>
										<FaTwitter className='text-lg text-gray-800 hover:opacity-75 dark:text-white' />
									</a>
								</Link>
							</li>
							<li className='flex items-center'>
								<Link href='/'>
									<a
										className='flex items-center px-3 py-2 text-xs font-bold leading-snug uppercase '
										href='#pablo'
									>
										<FaYoutube className='text-lg text-gray-800 hover:opacity-75 dark:text-white' />
									</a>
								</Link>
							</li>
							<li className='flex items-center'>
								<button
									onClick={switchTheme}
									className='px-3 py-2 bg-transparent border-transparent cursor-pointer focus:outline-none'
								>
									{theme === 'light' ? (
										<FaMoon className='text-lg text-gray-700 hover:opacity-75' />
									) : (
										<FaSun className='text-lg text-white hover:opacity-75' />
									)}
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
