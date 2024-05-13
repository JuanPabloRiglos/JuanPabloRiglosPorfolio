import { AnimatedTitle } from "./AnimatedTitle";
import { useState } from "react";

// Función debounce personalizada
function debounce(func, delay) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func.apply(this, args), delay);
	};
}

export function Contact() {
	const [formData, setFormData] = useState({
		email: "",
		subject: "",
		body: "",
	});
	const [finalData, setFinalData] = useState(null);

	// Insertar datos con debounce
	const insertDataDebounced = debounce((e) => {
		e.preventDefault();
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	}, 300); // Aquí puedes ajustar el tiempo de debounce

	const sendEmail = () => {
		const email = "juanpabloriglos@gmail.com";
		const subject = encodeURIComponent(formData.subject);
		const body = encodeURIComponent(formData.body);
		const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
		window.location.href = mailtoLink;
	};

	return (
		<>
			<header class='-mt-24 flex flex-nowrap gap-4 z-40'>
				<AnimatedTitle />
			</header>

			<form action='#' class='space-y-8' onSubmit={sendEmail}>
				<div>
					<label
						for='email'
						class='block mb-2 text-sm font-medium text-gray-300'
					>
						Inserta tu email
					</label>
					<input
						onChange={insertDataDebounced}
						type='email'
						id='email'
						class=' border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light'
						placeholder='name@flowbite.com'
						required
					/>
				</div>
				<div>
					<label
						for='subject'
						class='block mb-2 text-sm font-medium text-gray-400 dark:text-gray-300'
					>
						Por favor, describe en pocas palabras el motivo del contacto{" "}
					</label>
					<input
						onChange={insertDataDebounced}
						type='text'
						id='subject'
						class='block p-3 w-full text-sm  rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light'
						placeholder='Let us know how we can help you'
						required
					/>
				</div>
				<div class=''>
					<label
						for='body'
						class='block mb-2 text-sm font-medium text-gray-400'
					>
						Deja tu mensaje aqui.
					</label>
					<textarea
						onChange={insertDataDebounced}
						id='body'
						rows='6'
						class='block p-2.5 w-full text-s  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500'
						required
						placeholder='Querido Juan Pablo, hermoso Porfolio, despues de verlo necesito contratarte, digo... contactarte por...'
					></textarea>
				</div>
				<button class='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-orange-500 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-800'>
					<span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0'>
						Enviame tu mensaje!
					</span>
				</button>
			</form>
		</>
	);
}
