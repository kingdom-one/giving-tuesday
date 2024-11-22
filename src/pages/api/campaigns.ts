import type { APIRoute } from 'astro';
import dotenv from 'dotenv';

dotenv.config();

export const GET: APIRoute = async ({ request }) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.GIVEBUTTER_API_KEY}`,
    }
  };

  try {
    const response = await fetch('https://api.givebutter.com/v1/campaigns', options);
    const result = await response.json();
    const data = result.data;

    // Filter campaigns by specified titles
    const slugs = ["K1GivingTuesday2024"];
    const filteredData = data.filter((campaign: any) => slugs.includes(campaign.slug));

    return new Response(JSON.stringify(filteredData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error fetching data from external API' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};