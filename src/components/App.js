import React, { useState, useEffect } from "react";

function App() {
    const [dogs, setDogs] = useState(null)


    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(r => r.json())
            .then((data) => {
                setDogs(data.message)
            });

    }, []);

    if (!dogs) return <p>Loading...</p>;

    return (
        <img alt="A Random Dog" src={dogs} />
    )
}

export default App
