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

    const progressBarWidth = () => {
        if (!campaign) return 20;

        const progress = (campaign.raised / campaign.goal) * 100;
        return progress > 20 ? progress : 20;
    };

    return (
        <div
            className="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            {campaign && (
                <div className="progress-bar" style={{ width: `${progressBarWidth()}%` }}>
                    {(campaign.raised / campaign.goal) * 100}% of ${campaign.goal}
                </div>
            )}
        </div>
    );
}