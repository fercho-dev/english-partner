import { NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const baseURL = 'https://www.googleapis.com/youtube/v3/search';

export async function GET(request) {
  const keyword = request.nextUrl.searchParams.get('keyword');
  const maxResults = request.nextUrl.searchParams.get('maxResults');
  const relevanceLanguage = request.nextUrl.searchParams.get('relevanceLanguage');

  try {
    const response = await fetch(`${baseURL}?part=snippet&maxResults=${maxResults}&q=${encodeURIComponent(keyword)}&type=video&relevanceLanguage=${relevanceLanguage}&videoEmbeddable=true&key=${YOUTUBE_API_KEY}`);

    if (!response.ok) {
        throw new Error(`YouTube API responded with ${response.statusText}`);
    }

    const data = await response.json();

    const videos = data.items.map(item => ({
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url,
        videoURL: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    }));

    return NextResponse.json(videos);
  } catch (error) {
      return NextResponse.json({ message: `Internal Server Error: ${error}` }, { status: 500 })
  }
}
