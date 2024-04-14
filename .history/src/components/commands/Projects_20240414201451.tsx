import React from "react";
import { GiGlobe, GiPerson } from "react-icons/gi";
import { SiBitcoin, SiGnometerminal, SiGravatar, SiWindowsterminal } from "react-icons/si";
export default function Projects() {
	const links = [
		{
			title: "AnCrypt",
			Icon: SiBitcoin,
			href: "https://ancrypt.onrender.com/",
			text: "A cryptocurrency tracking website",
		},
		{
			title: "SnappCode",
			Icon: SiWindowsterminal,
			href: "https://snappcode.netlify.app/",
			text: "Take beautiful screenshots of you code",
		},
		{
			title: "Terminal Portfolio",
			Icon: GiPerson,
			href: "https://thisissahaj.vercel.app/",
			text: "My terminal based portfolio",
		},
	
		
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-2 text-yellow-200">
								<Icon />
                            <a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1  "
							>
								<h1>{title}</h1>
                                </a>
                    

							</div>
							
						</div>
					);
				})}
			</div>
		</div>
	);

}
