import React, { Fragment, useState } from "react";
import List from "./List";
import SearchBook from "./SearchBook";
import listBooks from "../data/data.json";

function ListBooks() {
	const [list, setList] = useState([]);
	const [counter, setCounter] = useState(0);
	
	const handleListAdd = function () {
		if(counter === listBooks.length){ 
			setCounter(0);
			setList([])
		}else{
			setList([...list, listBooks[counter]]);
			setCounter(counter + 1);
		}
	};

	return (
		<Fragment>
			<SearchBook books={listBooks} />
			<List data={list} />
			<button 
				className={counter === listBooks.length 
					? "redButton"
					: ""}
				onClick={handleListAdd}> 
				➕ 
			</button>
		</Fragment>
	);
}

export default ListBooks;