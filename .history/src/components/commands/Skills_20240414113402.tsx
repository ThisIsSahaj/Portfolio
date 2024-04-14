import ProgressBar from "../ProgressBar";
import {
	SiExpress,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiReact,
			// barWidth: "w-90%",
			percentageValue: "30%",
			text: "React",
		},
		{
			Icon: SiTailwindcss,
			barWidth: "w-85%",
			percentageValue: "45%",
			text: "Tailwindcss",
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
