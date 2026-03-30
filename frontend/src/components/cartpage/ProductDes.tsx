

type ProductDes={
    title:string
    price:number
    quantity:number
}

const ProductDes = ({title,price,quantity}:ProductDes) => {
  return (
      <div className="col-span-7">
     <div className="flex flex-col">
    <h3 className="font-bold">{title}</h3>
    <h6>Quantity:{quantity}</h6>
    <p className="text-red-400">PKR {price}</p>
     </div>
    </div>
  )
}

export default ProductDes