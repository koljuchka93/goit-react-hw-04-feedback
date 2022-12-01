import { useState } from 'react';
import { FeedBackOptions } from "./FeedBackOptions/FeedBackOptions";
import { Notification } from "./Notification/Notification";
import { Section}  from "./Section/Section";
import { Statistics} from "./Statistics/Statistics";

export function App () {
	const [good, setGood] = useState(0);
  	const [neutral, setNeutral] = useState(0);
  	const [bad, setBad] = useState(0);

	  const addFeedBack = option => {
		switch (option) {
		  case 'good':
			setGood(prevGood => prevGood + 1);
			break;
		  case 'neutral':
			setNeutral(prevNeutral => prevNeutral + 1);
			break;
		  case 'bad':
			setBad(prevBad => prevBad + 1);
			break;
		  default:
			return;
		}
	  };

	const countTotalFeedback = () => {
		return good + neutral + bad;
	};

	const countPositiveFeedbackPercentage = () => {
		return Math.round((good / countTotalFeedback()) * 100) || 0;
	};

	return (
		<>
			<Section title = "Please leave feedback">
				<FeedBackOptions options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addFeedBack} />
			</Section>

			{countTotalFeedback() ? (
				<Notification message = "No feedback given" />
			) : (
				<Section title = "Statistics">
					<Statistics
						good = {good}
						neutral = {neutral}
						bad = {bad}
						total = {countTotalFeedback()}
						positivePercentage = {countPositiveFeedbackPercentage()}
					/>
				</Section>
			)}
		</>
	);
}

