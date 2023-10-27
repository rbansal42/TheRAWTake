import { textOnRed } from "../components";

const hero = () => {
	return (
		<div id="app__hero">
			<div className="bg-bg-pattern flex flex-col items-center gap-16 bg-repeat py-20">
        {textOnRed({text: "A Startup for Startups"})}
				<div className="font-Avenir cursor-default items-center self-center text-center align-middle text-7xl uppercase leading-snug">
					Your extended <br />
					communications team
				</div>
			</div>
		</div>
	);
};

export default hero;
