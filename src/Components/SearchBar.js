import { useState } from "react"

function SearchBar({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <form onSubmit={(e) => handleSearch(e, searchTerm)} >
            <input type='text'
                placeholder="Enter your search term here"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input type='submit' />
        </form>
    )
}

export default SearchBar