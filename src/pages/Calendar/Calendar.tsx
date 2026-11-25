import "./Calendar.scss";
import { CALENDAR_URL } from "@/config/const";

export default function Calendar() {

	return (
		<div className="Calendar">
			<iframe
				src={CALENDAR_URL}
				title="Club calendar"
				style={{ border: 0 }}
				width="800"
				height="600"
			/>
		</div>
	);
}