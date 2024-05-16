import { AnimatedTitle } from "./AnimatedTitle";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

	// Insertar datos con debounce
	const insertDataDebounced = debounce((e) => {
		e.preventDefault();
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	}, 300); // Aquí puedes ajustar el tiempo de debounce

	const sendEmail = async () => {
		try {
			await emailjs.send(
				"service_voe2pxj", // Reemplaza 'YOUR_SERVICE_ID' con tu Service ID de EmailJS
				"template_nvnng4k", // Reemplaza 'YOUR_TEMPLATE_ID' con tu Template ID de EmailJS
				{
					from_name: formData.email,
					to_email: "juanpabloriglos@gmail.com", // Cambia esto por la dirección de correo electrónico a la que deseas enviar el mensaje
					subject: formData.subject,
					body: formData.body,
					email: formData.email,
				},
				"7LMagtTZiKrQnJb0s" // Reemplaza 'YOUR_USER_ID' con tu User ID (que ahora seria publick_key) de EmailJS
			);
			console.log(" Correo electrónico enviado con éxito");
			// Mostrar mensaje de éxito al usuario usando Swal.fire
			toast.success(
				"Enviado con éxito. A la brevedad nos estaremos comunicando con usted."
			);
		} catch (error) {
			console.error("ACAAAA - > Error al enviar el correo electrónico:", error);
			// Mostrar mensaje de error al usuario usando Swal.fire
			toast.error(
				"Error al enviar su consulta. A la brevedad lo estaremos solucionando, disculpe las molestias."
			);
		}
		setFormData({
			email: "",
			subject: "",
			body: "",
		});
	};

	return (
		<>
			<header className='-mt-24 flex flex-nowrap gap-4 z-40'>
				<AnimatedTitle />
			</header>

			<form className='space-y-8' onSubmit={sendEmail}>
				<div>
					<label
						for='email'
						className='block mb-2 text-sm font-medium text-gray-300'
					>
						Inserta tu email
					</label>
					<input
						onChange={insertDataDebounced}
						type='email'
						id='email'
						className=' border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light'
						placeholder='invitadoRealmenteAsombrado@gmail.com'
						required
					/>
				</div>
				<div>
					<label
						for='subject'
						className='block mb-2 text-sm font-medium text-gray-400 dark:text-gray-300'
					>
						Por favor, describe en pocas palabras el motivo del contacto{" "}
					</label>
					<input
						onChange={insertDataDebounced}
						type='text'
						id='subject'
						className='block p-3 w-full text-sm  rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light'
						placeholder='Déjame saber como puedo ayudarte'
						required
					/>
				</div>
				<div>
					<label
						for='body'
						className='block mb-2 text-sm font-medium text-gray-400'
					>
						Deja tu mensaje aquí.
					</label>
					<textarea
						onChange={insertDataDebounced}
						id='body'
						rows='6'
						className='block p-2.5 w-full text-s  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500'
						required
						placeholder='Querido Juan Pablo, hermoso Porfolio, despues de verlo necesito contratarte, digo... contactarte por...'
					></textarea>
				</div>
				<button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-orange-500 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-800'>
					<span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0'>
						Envíame tu mensaje!
					</span>
				</button>
			</form>
			<ToastContainer />
		</>
	);
}
