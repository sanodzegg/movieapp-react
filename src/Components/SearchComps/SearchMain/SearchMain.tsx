import { useEffect, useState } from 'react';
import "./SearchMain.css";
import { search } from '../../../getData';
import SearchedCard from '../SearchedCard/SearchedCard';

interface dataTypes {
    data: object[]
}

export default function SearchMain() {
    const term = new URLSearchParams(window.location.search);

    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState<dataTypes[]>([]);
    const [type, setType] = useState("");

    const handleSearch = async () => {
        const got = await search(searchQuery);
        if(got) {
            setData(got.data);
            setType(got.type);
        }
    }

    useEffect(() => {
        if(searchQuery !== "") {
            handleSearch();
        }
    }, [searchQuery]);

    useEffect(() => {
        const searchTerm = term.get("q");

        if(searchTerm) {
            setSearchQuery(searchTerm);
        }
    }, [term]);

    return (
        <div className="searchViewWrapper">
            <h1>Searched Movies</h1>
            {data && <SearchedCard data={data} type={type} />}
        </div>
    );
}
