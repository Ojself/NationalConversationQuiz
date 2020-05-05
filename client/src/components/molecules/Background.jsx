import React from 'react'

const allImages = [
  './assets/top_imgs/top_img_00@2x.png',
  './assets/top_imgs/top_img_1@2x.png',
  './assets/top_imgs/top_img_2@2x.png',
  './assets/top_imgs/top_img_3@2x.png',
  './assets/top_imgs/top_img_4@2x.png',
  './assets/top_imgs/top_img_5@2x.png',
  './assets/top_imgs/top_img_6@2x.png',
  './assets/top_imgs/top_img_7@2x.png',
  './assets/top_imgs/top_img_8@2x.png',
  './assets/top_imgs/top_img_9@2x.png',
  './assets/top_imgs/top_img_10@2x.png',
  './assets/results_imgs/Budget_Bobby@2x.png',
  './assets/results_imgs/Laudback_Lee@2x.png',
  './assets/results_imgs/Savvy_Sam@2x.png',
]

const Background = (props) => {
  const propsImage = props.src
  console.log(props.src)
  return (
    <div className="d-flex justify-content-center">
      {allImages.map((img, i) => {
        return (
          <img
            key={i}
            style={
              propsImage.includes(img)
                ? backgroundStyle.show
                : backgroundStyle.hide
            }
            src={img}
            alt="Header Image"
          />
        )
      })}
      {/* <img style={backgroundStyle} src={imageSrc} alt="Header Image" /> */}
    </div>
  )
}

const backgroundStyle = {
  hide: {
    width: '0%',
    height: '0%',
  },
  show: {
    width: '100%',
    height: 'auto',
    maxHeight: '30%',
  },
}

export default Background
