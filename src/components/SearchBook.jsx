import React, {useState} from "react";
import SearchBookResult from "./BookDisplay"

const SearchBook = props => {
    const books = props.books;
    const [search, setSearch] = useState("");
    const [result, setResult] = useState("");
    
    const onSubmit = e =>{
        const book = books.filter(e=> e.id === search);
        const firstBook = book[0];

        setResult(
            book.length !== 0 
            ? <SearchBookResult book = {firstBook}/>
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
                <input type="text" onChange={handleSearch} placeholder="Book"/>
                <button type="submit" className="searchButton">
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