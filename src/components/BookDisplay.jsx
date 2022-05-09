import React from "react";

const SearchBookResult = props => {
	const { title, author, genre, year, cost, price, id } = props.book;
	return (
		<>
			<li>Título: {title}</li>
			<li>Autor: {author}</li>
			<li>Género: {genre}</li>
			<li>Año: {year}</li>
			<li>Costo: {cost}$</li>
			<li>Precio: {price}$</li>
			<li>ID: {id}</li>
		</>
	);
};
export default SearchBookResult;
