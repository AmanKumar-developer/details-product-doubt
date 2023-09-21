// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {imageUrl, price, rating, brand, title} = productDetails
  return (
    <div className="similar-product-item-container">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="similar-product-image"
      />
      <p className="similar-product-title">{title}</p>
      <p className="similar-product-brand">{brand}</p>
      <div className="price-and-rating-container">
        <p className="similar-product-price">Rs {price}/-</p>
        <div className="similar-product-rating-container">
          <p className="similar-product-rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star-image"
          />
        </div>
      </div>
    </div>
  )
}

export default SimilarProductItem
