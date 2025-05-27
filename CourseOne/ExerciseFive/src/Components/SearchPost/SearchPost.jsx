import { useEffect, useState } from "react";

const SearchPost = () => {
    const [query, setQuery] = useState("");
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
        .then((response ) => response.json())
        .then((data) => setPost(data))
        .catch((error) => console.error("Error fetching data: ", error))
    }, [query])

    return(
        <div>
            <h1>Botón de búsqueda</h1>
            <input
                type="texy"
                placeholder="Buscar por titulo"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <ul>
                {
                    post.map((post) => (
                        <li key={post.id} > {post.title} </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SearchPost;