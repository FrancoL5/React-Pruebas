import React, { Fragment, useState } from "react";
import List from "./List";



function ListBooks (props) {
	const listBooks = props.listBooks;
	const [list, setList] = useState([]);
	const [counter, setCounter] = useState(0);
	
	const handleListAdd = () =>
		counter === listBooks.length 
		?	(setCounter(0), setList([]))
		:	(setList([...list, listBooks[counter]]),
			setCounter(counter + 1))

	return (
		<Fragment>
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