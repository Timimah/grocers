import cinnamon from "../images/cinnamon.webp"

const CardG = (productName, productDescription, productImage) => {
    return (
      <>
        <div className="border ring-amber-600/50 bg-amber-600/50 text-light text-center rounded-md outline outline-amber-600/50 outline-1">
            <img width="100%"src={cinnamon} alt={productName} />
            <div className="text-extralight rounded-md">
              <div className="font-medium text-lg">Cinnamon</div>
              <div className="font-extralight text-sm py-2">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </>
    )
  }

export default CardG