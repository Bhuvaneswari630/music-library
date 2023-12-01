import GalleryItem from "./GalleryItem"
import { useContext } from "react"
import { DataContext } from '../../contexts/DataContext'
// function Gallery({ data }) {
function Gallery() {
    const data = useContext(DataContext)
    const display = data.map((item, i) => {
        return <GalleryItem key={`${item.trackId}-${i}`} item={item} />
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery