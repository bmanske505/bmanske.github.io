import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
	const location = useLocation();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<nav className="sticky top-0 z-10 milky border-y-[3px] py-6 items-center flex justify-center gap-20">
			<Link
				to="/"
				onClick={scrollToTop}
				className={`box-depress radio secondary uppercase ${location.pathname === "/" ? "active" : ""}`}>
				<span>About</span>
			</Link>

			<Link
				to="/projects"
				onClick={scrollToTop}
				className={`box-depress radio secondary uppercase ${location.pathname === "/projects" ? "active" : ""}`}>
				<span>Projects</span>
			</Link>
		</nav>
	);
};

export default Navbar;
