// src/pages/Home.js
import React from 'react';
import Resume from '../assets/pdf/NaveenPallaganiResumeSD.pdf';
function Home() {
	return (
		<div className="relative w-full min-h-screen overflow-hidden">

			{/* Content */}
			<div className="relative z-10 w-full p-6 backdrop-blur-sm">
				<h1 className='text-3xl md:text-6xl font-bold my-4 mb-8 text-center font-sourceSans'>
					WHO I AM ?
				</h1>
				<p className='text-sm md:text-lg mb-4 text-center font-Merriweather'>
					Hi, I'm <strong>Naveen Kumar Pallagani</strong>, a passionate software developer with a strong foundation in
					<strong> web development, backend engineering, and problem-solving</strong>. I hold a <strong>Bachelor’s degree
						in Electronics and Communication Engineering</strong> from <em>Anil Neerukonda Institute of Technology & Sciences, Visakhapatnam</em>,
					and a <strong>Diploma in Electronics and Communication Engineering</strong> from <em>AANM & VVRSR Polytechnic, Andhra Pradesh</em>.
					My academic background, combined with hands-on experience, has helped me build a strong technical skill set across various technologies.
				</p>

				<p className='text-sm md:text-lg mb-4 text-center font-Merriweather'>
					I have experience working with modern web development frameworks like <strong>React.js, Next.js, and Node.js</strong>,
					along with backend technologies such as <strong>Express.js and Django</strong>. As a <strong>Junior Software Developer
						at Codezlabs Pvt. Ltd.</strong>, I have designed and developed <strong>scalable applications</strong>, integrated <strong>RESTful APIs</strong>,
					and optimized <strong>user experiences</strong> through responsive UI design. My expertise in <strong>data structures, algorithms,
						and problem-solving</strong> further strengthens my ability to develop efficient and robust software solutions.
				</p>

				<p className='text-sm md:text-lg text-center font-Merriweather'>
					As I continue to grow in the field of <strong>software development</strong>, I am driven by <strong>curiosity, innovation, and a
						commitment to excellence</strong>. I thrive on <strong>solving complex problems</strong> and am eager to leverage my skills
					to <strong>build impactful software solutions</strong> that enhance user experiences and drive efficiency.
				</p>
				{/* profile image */}
				<div className='relative h-[450px] md:h-[650px] flex justify-center items-center mt-8 py-8'>
					<div
						className="absolute h-full inset-0 bg-cover bg-center -z-30 blur-sm opacity-60"
						style={{ backgroundImage: `url(./assets/images/profile-pic.jpeg)` }}
					/>
					<img
						src="./assets/images/profile-pic.jpeg"
						alt="profile pic"
						className='w-[300px] sm:hover:w-[350px] md:w-[450px] md:hover:w-[550px]  rounded-2xl shadow-lg transition-all duration-500 ease-in-out'
					/>
				</div>

			</div>
			<div className='w-full flex justify-center mb-12 mt-6'>
				<a
					target='_blank'
					href={Resume}
					className='mx-auto bg-blue-500 text-white font-bold py-4 px-8 rounded-md shadow-lg hover:bg-blue-600 transition duration-300'
				>
					Veiw Resume
				</a>
			</div>
		</div>
	);
}

export default Home;
