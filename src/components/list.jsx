import React from "react";
import Book from "./Book";

const List = books => (
	<ul>
		{" "}
		{books.data.map(book =>  <Book key ={book.id} book={book} /> )}{" "}
	</ul>
);

export default List;
