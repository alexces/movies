import { useQuery } from "@tanstack/react-query";
import apiClient from "../httpClients/apiClient";

export type MovieResult = {
    title: string
    poster_path: string
    id: number
}

export type MoviesSearchResult = {
    page: number
    total_pages: number
    total_results: number
    results: MovieResult[]
}

function useMovies(searchTerm: string, page: number) {
    const query = useQuery({
        queryKey: ['movies', searchTerm, page],
        queryFn: async ({ signal }) => {
            const searchParams = new URLSearchParams({
                query: searchTerm,
                include_adult: "false",
                page: page.toString(),
                api_key: import.meta.env.VITE_API_TOKEN,
            });
            const response = await apiClient.get<MoviesSearchResult>(`/search/movie?${searchParams.toString()}`, { signal });
            return response.data;
        }
    })

    return query;
}

export default useMovies;