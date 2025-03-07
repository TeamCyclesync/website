'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const faqList = [
	{
		isActive: true,
		question: "What is Easy Frontend?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		isActive: false,
		question: "Who is Easy Frontend for?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		isActive: false,
		question: "How does Easy Frontend work?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		isActive: false,
		question: "How often does your team upload resources?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		isActive: false,
		question: "Can I get a refund if I cancel my subscription?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		isActive: false,
		question: "Can I use Easy Frontend designs in my portfolio?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	{
		isActive: false,
		question: "Can I buy Easy Frontend extended license?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
];

const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(faq.isActive || false);

	const toggleFaq = () => setIsOpen(!isOpen);

	return (
		<div className={isOpen && "active"}>
			<a
				href="#!"
				className="btn px-0 py-4 w-full text-start flex justify-between items-center"
				onClick={toggleFaq}
			>
				<span>{faq.question}</span>
				<FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
			</a>
			<div
				className={`${
					isOpen ? "block" : "hidden"
				} border-l-2 border-blue-600 mb-4`}
			>
				<div className="px-6">
					<p className="opacity-50">{faq.answer}</p>
				</div>
			</div>
		</div>
	);
};

FaqItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

const Faqs = () => {
	return (
		<section className="ezy__faq12 light py-14 md:py-24 bg-transparent dark:bg-[#0b1727] text-zinc-900 dark:text-white mx-auto">
			<div className="container px-16 md:px-8">
				<div className="grid grid-cols-12 justify-center mb-12">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-11 text-center">
						<h2 className="md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] tracking-tighter font-semibold text-white text-shadow-200 tracking-wide">
							Frequently Asked Questions
						</h2>
						<p className="md:text-[1rem] mx-auto text-[0.875rem] leading-5 sm:max-md:w-[600px] md:max-w-[650px] text-shadow-200 text-white">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at, aliquid blanditiis eligendi
							qui.Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores
						</p>
					</div>
				</div>

				<div className="grid grid-cols-12">
					<div className="col-span-12 md:col-span-8 md:col-start-3">
						<div className="bg-purple-400 sm:bg-gradient-to-b from-pink-300 via-yellow-300 to-amber-300 rounded-md shadow dark:shadow-none dark:bg-[#1E2735] p-6">
							{faqList.map((faq, i) => (
								<FaqItem faq={faq} key={i} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Faqs;
