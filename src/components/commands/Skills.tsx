import ProgressBar from "../ProgressBar";
import {
	SiExpress,
	SiFigma,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiReact,
			barWidth: "w-1/4",
			percentageValue: "25%",
			text: "React",
		},
		{
			Icon: SiTailwindcss,
			barWidth: "w-2/6",
			percentageValue: "33%",
			text: "Tailwindcss",
		},
		{
			Icon: SiFigma,
			barWidth: "w-3/4",
			percentageValue: "75%",
			text: "Figma",
		},
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
