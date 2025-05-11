import { useRef } from 'react';
import classes from './ProductForm.module.scss';

export default function ProductForm({
  style = {},
  onSubmit,
  mode = 'Create',
  defaults = {
    Category: ['Beds'],
    Description: '',
    Price: '',
    Quantity: '',
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
    onSubmit(formValues);
    form.reset();
  };
  let Category = ['Beds', 
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
          type="select"
          name="category">
            
            {Category.map((e, index) => <option key={index} 
            value={e} >{e}</option>)}
        
          </select>
        <small className={classes.error_text}></small>
      </div>
      <div className={classes.field}>
        <label htmlFor="descriptionInput">Description</label>
        <textarea
          id="descriptionInput"
          name="description"
          defaultValue={defaults.Description}
        ></textarea>
        <small className={classes.error_text}></small>
      </div>
      <div className={classes.field}>
        <label htmlFor="directorInput">Director</label>
        <input
          id="directorInput"
          type="text"
          name="director"
          defaultValue={defaults.director}
        />
        <small className={classes.error_text}></small>
      </div>
      <div className={classes.field}>
        <label htmlFor="yearInput">Year</label>
        <input
          id="yearInput"
          type="number"
          name="year"
          defaultValue={defaults.year}
        />
        <small className={classes.error_text}></small>
      </div>
      <div className={classes.field}>
        <label htmlFor="ratingInput">Rating</label>
        <input
          id="ratingInput"
          type="number"
          name="rating"
          step={0.1}
          defaultValue={defaults.rating}
        />
        <small className={classes.error_text}></small>
      </div>
      <div className={classes.field}>
        <label htmlFor="imageInput">Image Url</label>
        <input
          id="imageInput"
          type="url"
          name="imgUrl"
          defaultValue={defaults.imgUrl}
        />
        <small className={classes.error_text}></small>
      </div>
      <div className={classes.field}>
        <label htmlFor="reviewInput">Review</label>
        <textarea
          id="reviewInput"
          name="review"
          defaultValue={defaults.review}
        ></textarea>
        <small className={classes.error_text}></small>
      </div>

      <button>{mode} Movie</button>
    </form>
  );
}