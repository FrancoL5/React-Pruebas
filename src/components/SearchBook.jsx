import React, {useState} from "react";

const SearchBook = props => {
    const books = props.books;
    const [search, setSearch] = useState("");
    const [result, setResult] = useState("");
    
    const onSubmit = e =>{
        const book = books.filter(e=> e.id === search);
        const firstBook = book[0];
        setResult(
            book.length !== 0 
            ? <>
            <li>Título: {firstBook.title}</li>  
            <li>Autor: {firstBook.author}</li>
            <li>Género: {firstBook.genre}</li>
            <li>Año: {firstBook.year}</li> 
            <li>Costo: {firstBook.cost}$</li>
            <li>Precio: {firstBook.price}$</li>
            <li> ID: {firstBook.id}</li>
            </>
            : "no se encontró"
            );
        e.preventDefault();
    }

    const handleSearch = e => {
        setSearch("-" + e.target.value + "-");
    }

    return (
        <>
            <form onSubmit={onSubmit} className="searchForm">
                <input type="text" onChange={handleSearch}/>
                <button type="submit">
                    search
                </button>
                <br/>
                    <div className="pSearchResult">
                        <p> { result } </p>
                    </div>
            </form>
        </>
    )
}

export default SearchBook;