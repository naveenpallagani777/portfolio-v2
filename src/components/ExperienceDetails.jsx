import { useState } from "react";
import { FaLinkedin, FaCode, FaServer, FaTools } from "react-icons/fa";

const categoryIcons = {
	language: <FaCode className="inline mr-1 text-sky-600" />,
	frontend: <FaCode className="inline mr-1 text-sky-600" />,
	backend: <FaServer className="inline mr-1 text-sky-600" />,
	devops: <FaTools className="inline mr-1 text-sky-600" />,
};

const ExperienceDetails = ({ exp }) => {
	const [expandedIndexes, setExpandedIndexes] = useState([]);

	const toggleExpand = (index) => {
		setExpandedIndexes((prev) =>
			prev.includes(index)
				? prev.filter((i) => i !== index)
				: [...prev, index]
		);
	};

	return (
		<div className="bg-white rounded-2xl pb-6 pt-5 px-5 mb-8 text-slate-900 transition duration-300">
			{/* Header */}
			<div className="flex items-center mb-5">
				<img
					src={exp.logo}
					alt={`${exp.company} logo`}
					className="w-14 h-14 md:w-14 md:h-14 rounded-lg object-cover mr-5 border-2 border-sky-500 shadow"
				/>
				<div className="flex-1">
					<div className="flex items-center justify-between">
						<h2 className="text-xl md:text-3xl font-semibold text-left my-0 font-sourceSans">
							{exp.company}
						</h2>
						<a
							href={exp.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sky-400 hover:text-sky-500 transition-colors"
							aria-label="LinkedIn"
						>
							<FaLinkedin className="text-2xl" />
						</a>
					</div>
					<p className="text-sm text-slate-600">{exp.location}</p>
				</div>
			</div>

			<hr className="mb-4 h-0.75 bg-black" />

			{/* Positions */}
			{exp.positions.map((position, index) => {
				const isExpanded = expandedIndexes.includes(index);

				return (
					<div key={index} className="flex mb-1 group">
						<div className="flex flex-col items-center relative top-2 mr-4">
							<div className="w-3 h-3 bg-sky-500 rounded-full shadow-md"></div>
							{index < exp.positions.length - 1 && (
								<div className="flex-grow bg-sky-500 w-0.5 mt-1 rounded-full"></div>
							)}
						</div>
						<div className="flex-1">
							<h3 className="text-md md:text-lg font-semibold">{position.title}</h3>
							<p className="text-xs md:text-sm text-slate-600 italic">
								{position.duration}
							</p>

							<div className="mt-2 text-sm md:text-base text-slate-700 transition-all duration-300 ease-in-out">
								<p className={`${!isExpanded ? "line-clamp-2" : ""}`}>
									{position.description}
								</p>
								<button
									onClick={() => toggleExpand(index)}
									className="text-sky-400 hover:underline text-sm mt-1"
								>
									{isExpanded ? "...less" : "...more"}
								</button>
							</div>
						</div>
					</div>
				);
			})}

			{/* Tech Stack */}
			<div className="mt-6">
				<h4 className="text-lg font-semibold">Technologies</h4>
				<div className="space-y-1">
					{Object.entries(exp.technologies).map(([category, items], catIndex) => (
						<p key={catIndex} className="text-sm text-slate-700">
							<span className="font-medium capitalize text-sky-600">{category}:</span>{" "}
							{items.join(",  ")}
						</p>
					))}
				</div>
			</div>

		</div>
	);
};

export default ExperienceDetails;
