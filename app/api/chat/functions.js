
export const functions = [
  {
    "name": "get_youtube_vids",
    "description":
      "Get the top most related youtube videos about a keyword and enhance the conversation. Returns title, videoURL to each video.",
    "parameters": {
      "type": "object",
      "properties": {
        "keyword": {
          "type": "string",
          "description": "The keyword that will be used to search videos. It can be a word or multiple words.",
        },
        "maxResults": {
          "type": "number",
          "description": "The maximum number of videos to return.",
        },
      },
      "required": ['keyword', 'maxResults'],
    },
  },
  // more functions ...
];

async function get_youtube_vids(keyword, maxResults) {
  const response = await fetch(
    `${process.env.HOST_DOMAIN || 'http://localhost:3000'}/api/youtube?keyword=${encodeURIComponent(keyword)}&maxResults=${maxResults}`
  );
  const vids = await response.json();
  return JSON.stringify(vids);
}

export async function runFunction(name, args) {
  const { keyword, maxResults } = args;
  switch (name) {
    case "get_youtube_vids":
      return await get_youtube_vids(keyword, maxResults);
     // more functions ...
  }
}
