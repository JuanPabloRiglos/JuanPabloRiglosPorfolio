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
	const [isSending, setIsSending] = useState(false);

	// Insertar datos con debounce
	const insertDataDebounced = debounce((e) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	}, 300);

	const sendEmail = async (e) => {
		e.preventDefault();
		setIsSending(true);

		try {
			await emailjs.send(
				"service_voe2pxj",
				"template_nvnng4k",
				{
					from_name: formData.email,
					to_email: "juanpabloriglos@gmail.com",
					subject: formData.subject,
					body: formData.body,
					email: formData.email,
				},
				"7LMagtTZiKrQnJb0s"
			);

			toast.success(
				"Enviado con éxito. A la brevedad nos estaremos comunicando con usted.",
				{
					position: "bottom-right",
					autoClose: 5000,
					theme: "dark",
				}
			);

			setFormData({
				email: "",
				subject: "",
				body: "",
			});

			// Reset form inputs visually
			e.target.reset();
		} catch (error) {
			console.error("Error al enviar el correo electrónico:", error);
			toast.error(
				"Error al enviar su consulta. A la brevedad lo estaremos solucionando, disculpe las molestias.",
				{
					position: "bottom-right",
					autoClose: 5000,
					theme: "dark",
				}
			);
		} finally {
			setIsSending(false);
		}
	};

	return (
		<>
			<header className='-mt-24 flex flex-nowrap gap-4 z-40 contact-header'>
				<AnimatedTitle />
			</header>

			<form className='contact-form space-y-6' onSubmit={sendEmail}>
				<div className="input-group">
					<label
						htmlFor='email'
						className='input-label'
					>
						Tu email
					</label>
					<div className="input-wrapper">
						<input
							onChange={insertDataDebounced}
							type='email'
							id='email'
							className='styled-input'
							placeholder='tucorreo@ejemplo.com'
							required
						/>
						<div className="input-border"></div>
					</div>
				</div>

				<div className="input-group">
					<label
						htmlFor='subject'
						className='input-label'
					>
						Asunto
					</label>
					<div className="input-wrapper">
						<input
							onChange={insertDataDebounced}
							type='text'
							id='subject'
							className='styled-input'
							placeholder='Cuéntame brevemente de qué se trata'
							required
						/>
						<div className="input-border"></div>
					</div>
				</div>

				<div className="input-group">
					<label
						htmlFor='body'
						className='input-label'
					>
						Mensaje
					</label>
					<div className="input-wrapper">
						<textarea
							onChange={insertDataDebounced}
							id='body'
							rows='6'
							className='styled-input styled-textarea'
							placeholder='Escribe aquí tu mensaje...'
							required
						></textarea>
						<div className="input-border"></div>
					</div>
				</div>

				<button
					type="submit"
					className='submit-button'
					disabled={isSending}
				>
					<span className='button-gradient'></span>
					<span className='button-content'>
						{isSending ? (
							<>
								<svg className="spinner" viewBox="0 0 24 24">
									<circle className="spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
								</svg>
								Enviando...
							</>
						) : (
							<>
								Enviar mensaje
								<svg className="send-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
								</svg>
							</>
						)}
					</span>
				</button>
			</form>

			<ToastContainer />

			<style jsx>{`
				.contact-header {
					animation: fadeIn 0.6s ease-out forwards;
				}

				.contact-form {
					animation: fadeIn 0.8s ease-out forwards;
					animation-delay: 0.2s;
					opacity: 0;
				}

				.input-group {
					position: relative;
				}

				.input-label {
					display: block;
					margin-bottom: 0.5rem;
					font-size: 0.875rem;
					font-weight: 500;
					color: rgba(209, 213, 219, 0.9);
					transition: color 0.3s ease;
				}

				.input-wrapper {
					position: relative;
				}

				.styled-input {
					width: 100%;
					padding: 0.875rem 1rem;
					background: rgba(31, 41, 55, 0.6);
					border: 1px solid rgba(75, 85, 99, 0.4);
					border-radius: 0.5rem;
					color: white;
					font-size: 0.9375rem;
					transition: all 0.3s ease;
					backdrop-filter: blur(8px);
					position: relative;
					z-index: 1;
				}

				.styled-input::placeholder {
					color: rgba(156, 163, 175, 0.6);
				}

				.styled-input:focus {
					outline: none;
					background: rgba(31, 41, 55, 0.8);
					border-color: rgba(249, 115, 22, 0.6);
					box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1),
					            0 0 20px rgba(249, 115, 22, 0.2);
				}

				.styled-input:focus + .input-border {
					opacity: 1;
				}

				.input-border {
					position: absolute;
					inset: 0;
					border-radius: 0.5rem;
					padding: 1px;
					background: linear-gradient(
						135deg,
						rgba(249, 115, 22, 0.4),
						rgba(168, 85, 247, 0.4)
					);
					-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
					-webkit-mask-composite: xor;
					mask-composite: exclude;
					opacity: 0;
					transition: opacity 0.3s ease;
					pointer-events: none;
				}

				.styled-textarea {
					resize: vertical;
					min-height: 150px;
				}

				.submit-button {
					position: relative;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					padding: 0.875rem 2rem;
					background: rgba(17, 24, 39, 0.8);
					border: 1px solid rgba(249, 115, 22, 0.4);
					border-radius: 0.5rem;
					color: rgb(251, 146, 60);
					font-weight: 600;
					font-size: 0.9375rem;
					cursor: pointer;
					overflow: hidden;
					transition: all 0.3s ease;
					backdrop-filter: blur(8px);
				}

				.submit-button:disabled {
					opacity: 0.7;
					cursor: not-allowed;
				}

				.submit-button:not(:disabled):hover {
					border-color: rgba(249, 115, 22, 0.7);
					box-shadow: 0 8px 24px rgba(249, 115, 22, 0.3);
					transform: translateY(-2px);
				}

				.button-gradient {
					position: absolute;
					inset: 0;
					background: linear-gradient(
						135deg,
						rgba(249, 115, 22, 0.2),
						rgba(168, 85, 247, 0.2)
					);
					opacity: 0;
					transition: opacity 0.3s ease;
				}

				.submit-button:not(:disabled):hover .button-gradient {
					opacity: 1;
				}

				.button-content {
					position: relative;
					display: flex;
					align-items: center;
					gap: 0.5rem;
				}

				.send-icon {
					width: 1.25rem;
					height: 1.25rem;
					transition: transform 0.3s ease;
				}

				.submit-button:not(:disabled):hover .send-icon {
					transform: translateX(4px) translateY(-4px);
				}

				.spinner {
					width: 1.25rem;
					height: 1.25rem;
					animation: spin 1s linear infinite;
				}

				.spinner-circle {
					stroke-dasharray: 60;
					stroke-dashoffset: 40;
					animation: spinCircle 1.5s ease-in-out infinite;
				}

				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes spin {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}

				@keyframes spinCircle {
					0% {
						stroke-dashoffset: 60;
					}
					50% {
						stroke-dashoffset: 0;
					}
					100% {
						stroke-dashoffset: -60;
					}
				}
			`}</style>
		</>
	);
}
