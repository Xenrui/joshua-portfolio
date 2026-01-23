import StackIcon from "tech-stack-icons";

const TechCard = ({ tech: { label, iconName, feat } }) => {
	return (
		<div className="px-8 py-3 bg-white/10 rounded-xl flex flex-col items-center justify-center gap-1 border border-white/10">
			<h5 className="text-xs md:text-sm font-bold text-white/70 text-nowrap font-inter">{label}</h5>
			<div className="h-8 md:h-12 w-8 md:w-12">
				<StackIcon name={iconName} />
			</div>
		</div>
	);
};

export default TechCard;
