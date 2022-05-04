import React, { Fragment, useState } from "react";
import List from "./list";
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
			<List data={list} />
			<button onClick={handleListAdd}>➕</button>
		</Fragment>
	);
}

export default ListBooks;