type Image={
    imagesrc:string
    title:string
}
const Image = ({imagesrc,title}:Image) => {
  return (
    <div className="col-span-2">
     <img src={imagesrc} alt={title} />
    </div>
  )
}

export default Image;