import React from 'react'
import "./searchBar.css"
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function SearchBar() {
  return (
    <div id="search-bar">
        <InputGroup>
          <FormControl
            placeholder="Search by State"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
        </div>
  )
}

export default SearchBar