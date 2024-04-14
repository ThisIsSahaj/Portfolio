import React from "react";
import { GoVerified } from "react-icons/go";
import { SiBitcoin, SiGithub, SiLinkedin, SiPatreon, SiTwitter, SiWhatsapp, SiYoutube } from "react-icons/si";
export default function Projects() {
	const links = [
		{
			title: "AnCrypt",
			Icon: SiBitcoin,
			href: "https://github.com/ThisIsSahaj",
			text: "AnCrypt",
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
