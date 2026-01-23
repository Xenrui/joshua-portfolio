import StackIcon from "tech-stack-icons";

const TechBadge = ({ tech: { label, iconName, feat } }) => {
	return (
		<div className="bg-white/10 border border-white/20 px-3 py-1 rounded-full flex gap-1 items-center">
			<div className="h-5 w-5">
				<StackIcon name={iconName} />
			</div>
			<span className="font-medium text-xs text-white/80">{label}</span>
		</div>
	);
};

export default TechBadge;
