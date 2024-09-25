import { useState } from "react";
import useMovies from "../hooks/useMovies";
import Movies from "./Movies";
import Pagination from "./Pagination";
type DisplaySearchProps = {
    searchTerm: string
}

function DisplaySearch({ searchTerm }: DisplaySearchProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const query = useMovies(searchTerm, currentPage);
    const results = query.data;
    const movies = results?.results ?? [];

    return (
        <>
            <h1>
                Results for {searchTerm}
            </h1>

            {query.isSuccess && movies.length > 0 && results ? <>
                <Pagination currentPage={currentPage} totalPages={results.total_pages} onPageChange={(page) => {
                    setCurrentPage(page)
                }} /><Movies movies={movies} /></> : "No movies to display"}
        </>);

}

export default DisplaySearch;