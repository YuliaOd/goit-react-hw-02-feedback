import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return <ul className={css.list}>
        {options.map(feedback => (
        <li key={feedback} className={css.item}>
            <button className={css.button} name={feedback} 
            type='button' 
            onClick={() => onLeaveFeedback (feedback)}>
                {feedback}
           
            </button>
            </li>))}
            </ul>
};
  





FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    
}


