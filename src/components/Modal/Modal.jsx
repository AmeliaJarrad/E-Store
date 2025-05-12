import classes from './Modal.module.scss';
import Button from '../Button/Button';
import { useEffect } from 'react';

export default function Modal({ children, onClose, heading }) {
  const onBackgroundClick = () => {
    console.log('Clicked background');
    onClose();
  };

  const onContentClick = (e) => {
    e.stopPropagation();
    console.log('clicked content');
  };

  useEffect(() => {
    const escapeKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', escapeKeyPress);
    return () => document.removeEventListener('keydown', escapeKeyPress);
  }, []);

  return (
    <div className={classes.modal_background} onClick={onBackgroundClick}>
      <div className={classes.modal_content} onClick={onContentClick}>
        <div className={classes.modal_heading}>
          <h2>{heading}</h2>{' '}
          <Button
            style={{ padding: 0, backgroundColor: 'transparent' }}
            onClick={() => onClose()}
          >
            X
          </Button>
        </div>
        <div className={classes.modal_content_inner}>{children}</div>
      </div>
    </div>
  );
}