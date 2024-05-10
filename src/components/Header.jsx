export function Header() {
	return (
		<>
			<header
				class='flex flex-row justify-center
 sm:flex-row sm:justify-between
 lg:ml-5 mt-3'
			>
				<div
					class='rounded-full overflow-hidden flex items-center justify-center
 sm:fixed sm:top-5 sm:left-5 sm:bg-zinc-900/90 z-10'
				>
					<img class='' src='/misimagenes/navImgDegradeByN.png' alt='' />
				</div>

				<nav
					class='z-50
    flex flex-col gap-4 items-center  
    sm:flex-row sm:gap-6 sm:h-fit sm:rounded-s-3xl sm:p-3 sm:pl-6 sm:fixed sm:top-5 sm:right-0 sm:bg-zinc-900/90
    lg:gap-12
    '
				>
					<a
						class=' text-gray-500/90 text-base hover:cursor-pointer hover:text-orange-500  border-b border-transparent hover:border-gray-500 ease-in duration-600 transition-all'
						href='#top'
					>
						{" "}
						Inicio
					</a>
					<a
						class=' text-gray-500/90 text-base hover:cursor-pointer hover:text-orange-500  border-b-trasnparent hover:border-b ease-in duration-600 transition-all'
						href='#experiencia'
					>
						{" "}
						Experiencia{" "}
					</a>
					<a
						class=' text-gray-500/90 text-base hover:cursor-pointer hover:text-orange-500  border-b-trasnparent hover:border-b ease-in duration-600 transition-all'
						href='#proyectos'
					>
						{" "}
						Poyectos{" "}
					</a>
					<a
						class=' text-gray-500/90 text-base hover:cursor-pointer hover:text-orange-500  border-b-trasnparent hover:border-b ease-in duration-600 transition-all'
						href='#about'
					>
						{" "}
						<span class='flex flex-nowrap'>Sobre mi </span>{" "}
					</a>
					<a
						class=' text-gray-500/90 text-base hover:cursor-pointer hover:text-orange-500  border-b-trasnparent hover:border-b ease-in duration-600 transition-all'
						href='#contact'
					>
						{" "}
						Contacto
					</a>
				</nav>
			</header>
		</>
	);
}
