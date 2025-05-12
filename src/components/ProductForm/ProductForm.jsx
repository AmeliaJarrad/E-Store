import { useRef } from 'react';

import classes from './ProductForm.module.scss';



export default function ProductForm({
  style = {},
  onSubmit ,
  mode = 'Create',
  defaults = {
    Category: ['Beds'],
    Description: '',
    Price: '',
    Quantity: '',
    imgURL: '',
    isFavourite: false,
    isFeatured: false,
  },
}) {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues)
    onSubmit(formValues);
    form.reset();
  };
  let Category = [
    
    'Beds', 
    'Curtains & Drapes', 
    'Decorative', 
    'Heating & Lighting', 
    'Rugs & Carpets', 
    'Seating', 
    'Soft Furnishing', 
    'Storage', 
    'Surfaces', 
    'Tents' 
]
  return (
    <form
      style={style}
      onSubmit={handleSubmit}
      className={classes.form}
      ref={formRef}
    >
      <div className={classes.field}>
        <label htmlFor="Category">Category</label>
        <select
          id="categoryInput"
          defaultValue={"chooser"}
          type="select"
          name="Category"
          required
          
          
          >
            <option disabled={true} value="chooser">--Choose an option --</option>
            {Category.map((e, index) => <option key={index} 
            value={e} >{e}</option>)}
        
          </select>
        <small className={classes.error_text}></small>
      </div>
      <div className={classes.field}>
        <label htmlFor="descriptionInput">Description</label>
        <textarea
          id="descriptionInput"
          name="Description"
          defaultValue={defaults.Description}
          required
        ></textarea>
        <small className={classes.error_text}></small>
      </div>

      //here I gotta put a controlled component checkbox, which will render
      //Variants fields of:
      // Name: Price: Quantity: isFavourite: and isFeatured: 





      <div className={classes.field}>
        <label htmlFor="nameInput">Name</label>
        <input
          id="nameInput"
          type="text"
          name="Name"
          defaultValue={defaults.Name}
          required
        />
        <small className={classes.error_text}></small>
      </div>
      <div className={classes.field}>
        <label htmlFor="priceInput">Price</label>
        <input
          id="priceInput"
          type="number"
          name="Price"
          defaultValue={defaults.Price}
          required
        />
        <small className={classes.error_text}></small>
      </div>
      <div className={classes.field}>
        <label htmlFor="quantityInput">Quantity</label>
        <input
          id="quantityInput"
          type="number"
          name="Quantity"
          defaultValue={defaults.Quantity}
          required
        />
        <small className={classes.error_text}></small>
      </div>
      <div className={classes.field}>
        <label htmlFor="imageInput">Image Url</label>
        <input
          id="imageInput"
          type="url"
          name="imgURL"
          defaultValue={defaults.imgURL}
          required
        />
        <small className={classes.error_text}></small>
      </div>
      <div className={classes.field}>
        <label htmlFor="favInput">isFavourite </label>
        <input
          id="favInput"
          type="checkbox"
          name="isFavourite"
          defaultChecked={false}
          value={true || false}
          
        />
        <small className={classes.error_text}></small>
      </div>
      <div className={classes.field}>
        <label htmlFor="featInput"> isFeatured </label>
        <input
          id="featInput"
          type="checkbox"
          name="isFeatured"
          defaultChecked={false}
          value={true || false}
          
        />
        <small className={classes.error_text}></small>
      </div>

      <button>{mode} Product </button>
    </form>
  );
}