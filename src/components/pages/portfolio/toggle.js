import React, { useState, useEffect} from 'react';

export default function Toggle() {
    const [showLinks, setShowLinks] = useState(false);

    useEffect(() => {

    })

    return (
        <div>
            <a href="#">GitHub Repo</a>
            <a href="#">Deployed App</a>
        </div>
    )
}