import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import NewContact from "./views/newContact.js";
import ListContact from "./views/listContact.js";
import EditContact from "./views/editContact.js";



const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/* <Navbar />
					<ListContact /> */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/newContact" element={<NewContact/>} />
						<Route path="/listContact" element={<ListContact/>} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/editContact/:theid" element={<EditContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
