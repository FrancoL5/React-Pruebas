import React from "react";
import ListBooks from "./components/ListBooks";
import SearchBook from "./components/SearchBook";
import "./components/componentsStyle.css"
import listBooks from "./data/data.json";

function App() {

	return (
		<div className="appMainDiv">
			<SearchBook books={listBooks} />
			<ListBooks listBooks = {listBooks}/>
		</div>
	);
}

export default App;
