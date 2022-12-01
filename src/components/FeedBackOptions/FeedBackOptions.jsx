import PropTypes from 'prop-types';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<>
			{options.map(option => (
				<button key={option} type="button" name={option} onClick={() => onLeaveFeedback(option)}>
					{option}
				</button>
			))}
		</>
	);
};

FeedBackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};