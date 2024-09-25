import { debounce } from 'lodash';
import { useMemo } from 'react';

type SearchProps = {
    onSubmit: (searchTerm: string) => void
}

function Search({ onSubmit }: SearchProps) {
    // I added the type of e after the interview
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        onSubmit(e.target.value);

    const debouncedResults = useMemo(() => {
        return debounce(handleChange, 700);
    }, []);

    return (
        <div>
            Title: <input type="text" onChange={debouncedResults} />
        </div>
    )
};

export default Search;