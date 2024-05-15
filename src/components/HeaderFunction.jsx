import { useState } from "react";
import "./HeaderFunction.css";
export function HeaderFunction() {
	const [viewNav, setViewNav] = useState(false);
	console.log(viewNav);
	return (
		<header
			className=' flex flex-col justify-center items-center transition-all duration-500
 sm:flex-row sm:justify-between sm:p-0
 lg:ml-5 mt-3'
		>
			<div
				className={`animate-border-colors  mb-3 border-2   border-transparent rounded-full overflow-hidden flex items-center justify-center
 sm:mb-0 sm:fixed sm:top-5 sm:left-5 sm:bg-zinc-900/90 z-10 sm:border-0 
 `}
			>
				<img
					className='hover:cursor-pointer'
					src='/misimagenes/navImgDegradeByN.png'
					alt=''
					onClick={() => setViewNav(!viewNav)}
				/>
			</div>
			<span
				className={`-mt-2 sm:hidden ${
					viewNav ? "hidden " : "flex "
				}text-gray-500/90 text-base hover:text-orange-500  border-b border-transparent hover:border-gray-500 ease-in duration-600 transition-all`}
			>
				{" "}
				Menu{" "}
			</span>
			<nav
				className={`z-50 w-1/2

    ${!viewNav ? "hidden " : "flex "}flex-col gap-4 items-center  
    sm:w-auto sm:flex sm:flex-row sm:gap-6 sm:h-fit sm:rounded-s-3xl sm:p-3 sm:pl-6 sm:fixed sm:top-5 sm:right-0 sm:bg-zinc-900/90
    lg:gap-12`}
			>
				<a
					className=' text-gray-500/90 text-base hover:cursor-pointer hover:text-orange-500  border-b border-transparent hover:border-gray-500 ease-in duration-600 transition-all'
					href='#top'
				>
					{" "}
					Inicio
				</a>
				<a
					className=' text-gray-500/90 text-base hover:cursor-pointer hover:text-orange-500  border-b-trasnparent hover:border-b ease-in duration-600 transition-all'
					href='#experiencia'
				>
					{" "}
					Experiencia{" "}
				</a>
				<a
					className=' text-gray-500/90 text-base hover:cursor-pointer hover:text-orange-500  border-b-trasnparent hover:border-b ease-in duration-600 transition-all'
					href='#proyectos'
				>
					{" "}
					Proyectos{" "}
				</a>
				<a
					className=' text-gray-500/90 text-base hover:cursor-pointer hover:text-orange-500  border-b-trasnparent hover:border-b ease-in duration-600 transition-all'
					href='#about'
				>
					{" "}
					<span className='flex flex-nowrap'>Sobre Mí </span>{" "}
				</a>
				<a
					className=' text-gray-500/90 text-base hover:cursor-pointer hover:text-orange-500  border-b-trasnparent hover:border-b ease-in duration-600 transition-all'
					href='#contact'
				>
					{" "}
					Contacto
				</a>
			</nav>
		</header>
	);
}
