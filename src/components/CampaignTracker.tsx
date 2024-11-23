/**
 * The Campaign Tracker Component; based on the Bootstrap Progress Bar.
 */
import { useEffect, useState } from 'react';

export default function CampaignTracker() {
	const [campaign, setCampaign] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/api/campaigns');
				const data = await response.json();
				console.log(data);
				setCampaign(data[0]);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		></div>
	);
}
