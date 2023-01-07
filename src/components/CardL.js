import basil from "../images/basil.webp"

const CardL = (productName, productDescription, productImage) => {
  return (
    <>
      <div className="border border-grey-900 flex bg-amber-600/50 text-light text-center rounded-md outline outline-amber-600/50 outline-1">
          <img className="float-left" width="200" src={basil} alt={productName} />
          <div className="text-extralight float-right rounded-md">
            <div className="font-medium text-lg">Basil</div>
            <div className="font-extralight text-sm py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, laudantium blanditiis corporis doloribus eos tempore fuga natus, enim nulla est, beatae maiores accusamus hic aspernatur porro? Voluptate accusamus sint commodi.</div>
        </div>
      </div>
    </>
  )
}

export default CardL