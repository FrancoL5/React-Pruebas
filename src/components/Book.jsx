import React from "react";

const Book = props => {
	const book = props.book;
	return (
		<li>
			{book.title},{" " + book.author},{" " + book.year}
		</li>
	);
};
export default Book;
