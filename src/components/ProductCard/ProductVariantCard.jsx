
import classes from './ProductCard.module.scss';
import { Link } from 'react-router';
import Button from '../Button/Button';


 const ProductVariantCard = ({ variant, category, description, id }) => {
    const {imgURL, Name, Price, Quantity, isFavourite, isFeatured } = variant
    return (
        <article className={classes.card}>
            
           
            
            {/* <p>{description}</p> */}
            <h3> {category} </h3>
            <h3>{Name}</h3>
            <img src={imgURL} alt={Name} />
            <h5> Quantity in Stock: {Quantity}</h5>
            <h5> Price: {Price} gold</h5>
            {/* <p> Favourite: {isFavourite ? 'Yes' : 'No'}</p>
            <p> Featured: {isFeatured ? 'Yes' : 'No'}</p> */}
            <Link to={id}>See More</Link>
            
        
        
    
        </article>
      );

}



    export default ProductVariantCard;
