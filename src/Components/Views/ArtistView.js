// These components will be making separate API calls from the app

// component to serve specific data about our artist

import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Buttons from '../Buttons'

function ArtistView() {
    const [artistData, setArtistData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:4000/album/${id}`
            const response = await fetch(url)
            const data = await response.json()
            const albums = data.results.filter((item) => item.collectionType === 'Album')
            // console.log(data);
            // console.log(albums);
            setArtistData(albums)
        }
        fetchData()
    },[id])
    const albumDisplay = artistData.map(album => {
        return (
            <div key={album.collectionId}>
                {/* <p>{album.collectionName}</p> */}
                <Link to={`/album/${album.collectionId}`}>{album.collectionName}</Link>

            </div>
        )
    })

    return (
        <div>
            <p>Artist Data Goes Here!</p>
            <p>ID: {id}</p>
            <Buttons />
            {albumDisplay}
        </div>
    )
}
export default ArtistView