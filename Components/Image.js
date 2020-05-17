import React from 'react'

function Image({downloads,likes,largeImageUrl}) {
    return (
        <div className="search-img"> 
            <img src={largeImageUrl} alt=""/>
            <h1>Total Downloads:{downloads}</h1>
            <h3>Total Likes:{likes}</h3>
        </div>
    )
}

export default Image
