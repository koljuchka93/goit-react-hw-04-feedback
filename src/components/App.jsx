import { Component } from 'react';
import { FeedBackOptions } from "./FeedBackOptions/FeedBackOptions";
import { Notification } from "./Notification/Notification";
import { Section}  from "./Section/Section";
import { Statistics} from "./Statistics/Statistics";

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	};

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		const result = good + neutral + bad;
		return result;
	};

	countPositiveFeedbackPercentage = () => {
		const result = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / result;
		return Math.round(percentage);
	};

	onLeaveFeedback = option => {
		this.setState(state => ({
			[option]: state[option] + 1,
		}));
	};

	render() {
		const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();

		const objKey = Object.keys(this.state);

		return (
			<>
				<Section title = "Please leave feedback">
					<FeedBackOptions options = {objKey} onLeaveFeedback = {this.onLeaveFeedback} />
				</Section>

				{total === 0 ? (
					<Notification message = "No feedback given" />
				) : (
					<Section title = "Statistics">
						<Statistics
							good = {good}
							neutral = {neutral}
							bad = {bad}
							total = {total}
							positivePercentage = {positivePercentage}
						/>
					</Section>
				)}
			</>
		);
	}
}
