import React, {useState} from "react";
import BookDisplay from "./BookDisplay";
const Book = props => {
	const book = props.book;
	const [show, setShow] = useState(false)

	const handleBookDisplay = () => {
		setShow(!show)
	}

	return (
		<li>
			<p className="pDisplayText" onClick={handleBookDisplay}>
				{book.title},{" " + book.author},{" " + book.year}
			</p>
			{
			show ? 	
				<div className="bookDisplay">
					<BookDisplay book={book}/>
				</div>
				:	
				<></>
			}
		</li>
	);
}
export default Book;