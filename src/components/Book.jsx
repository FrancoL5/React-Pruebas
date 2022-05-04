import React from "react";

const Book = props => {
	const book = props.book;
	return (
		<div>
			<p>
				{book.title},{" " + book.author},{" " + book.year}
			</p>
		</div>
	);
};
export default Book;
