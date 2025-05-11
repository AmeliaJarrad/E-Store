
import classes from './ProductCard.module.scss';
import { Link } from 'react-router';


 const ProductVariantCard = ({ variant, category, description, id }) => {
    const {imgURL, Name, Price, Quantity, isFavourite, isFeatured } = variant
    return (
        <article className={classes.card}>
            
            <img src={imgURL} alt={Name} className={classes.image} />
        <div className={classes.info}>
            <h3>{Name}</h3>
            <p>{description}</p>
            <p>Category: {category}</p>
            <p> Price: {Price} gold</p>
            <p> Quantity: {Quantity}</p>
            <p> Favourite: {isFavourite ? 'Yes' : 'No'}</p>
            <p> Featured: {isFeatured ? 'Yes' : 'No'}</p>
            <Link to={id}>See More</Link>
        </div>
        
    
        </article>
      );

}



    export default ProductVariantCard;
