import React from "react";
import { Button, Form, Input } from 'reactstrap';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <section className="shadow-sm searchBar">

            <Form className="row">
                <Input onChange={props.handleInputChange} type="text" name="booksearch" placeholder="Please enter a book title to search!" className="searchBox ml-3 col" value={props.searchInput} />
                {" "}
                <Button onClick={props.handleFormSubmit} className="searchBtn mr-3">Search</Button>

            </Form>
        </section>
    )
}

export default SearchBar;