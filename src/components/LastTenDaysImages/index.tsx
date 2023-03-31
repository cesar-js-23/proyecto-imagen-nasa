import { Image } from '../../types/index';

type LastTenDaysImagesProps = {
    images: Image[]
}

const LastTenDaysImages = ({ images }: LastTenDaysImagesProps) => {
    return (
        <div>
            <h2>Ultimos 10 dias</h2>
            {images?.map((image, index) =>
                <div key={index}>
                    <img src={image.url} alt={image.title} />
                    <h2>{image.title}</h2>
                </div>
            )}
        </div>
    )
}

export default LastTenDaysImages
