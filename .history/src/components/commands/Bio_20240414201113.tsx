import { GoVerified } from "react-icons/go";
import { SiGithub, SiLinkedin, SiTwitter, SiWhatsapp } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/ThisIsSahaj",
			text: "@ThisIsSahaj",
		},
		{
			title: "LinkedIn",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/this-is-sahaj-jain/",
			text: "@thisissahajjain",
		},
		{
			title: "Twitter",
			Icon: SiTwitter,
			href: "https://twitter.com/thisissahaj",
			text: "@thisissahaj",
		},
		{
			title: "Community",
			Icon: SiWhatsapp,
			href: "https://chat.whatsapp.com/EfbFZbjjLlt5aSJp4KSdnv",
			text: "The Cyborgs",
		},
		
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://avatars.githubusercontent.com/u/118066299?s=400&u=ba6757d43034d05d5f426c2c07f43aa0f3d48e04&v=4"
					alt="Sahaj Jain"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Sahaj Jain</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join the world 21 years ago.</p>
				</div>
			</div>
			<p>
				Hi there, I am a Front-end developer and I like to learn new things related to coding.
				Other than coding, I also love doing Web & Graphic Designing, and some beatboxing when it's showtime!
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
