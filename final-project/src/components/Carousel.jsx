import { useState } from "react"
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const photos = [
        {
          id: 'p1',
          title: 'Photo One',
          url: 'https://www.kindacode.com/wp-content/uploads/2022/08/1.png',
        },
        {
          id: 'p2',
          title: 'Photo Two',
          url: 'https://www.kindacode.com/wp-content/uploads/2022/08/2.png',
        },
        {
          id: 'p3',
          title: 'Photo Three',
          url: 'https://www.kindacode.com/wp-content/uploads/2022/08/3.jpg',
        },
        {
          id: 'p4',
          title: 'Photo Four',
          url: 'https://www.kindacode.com/wp-content/uploads/2022/08/4.jpg',
        },
      ];
      

    const next = () => {
        currentIndex > photos.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    }

    const prev = () => {
        currentIndex < 0 ? setCurrentIndex(photos.length - 1) : setCurrentIndex(currentIndex - 1);
    }

    return (
        <>
            <div className='slider-container'>
                {photos.map((photo) => {
                    <div
                    key={photo.id}
        
                    // if the photo is the current photo, show it
                    className={
                      photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'
                    }
                  >
                    <img src={photo.url} alt={photo.title} className='photo' />
                    <div className='caption'>{photo.title}</div>
                  </div>
                })}
            </div>
            <button onClick={prev} className="prev">&lt</button>
            <div>
                <img src="src/assets/images/jeans.jpg" style={{ width: '200px', height: '300px'}}></img>
            </div>
            <button onClick={next} className="next">&gt</button>

        </>
    )
}

export default Carousel;