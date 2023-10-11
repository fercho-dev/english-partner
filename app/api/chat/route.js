import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { functions, runFunction } from './functions';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function POST(req) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json()

  // check if the conversation requires a function call to be made
  const initialResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0613",
    messages,
    stream: true,
    functions,
    function_call: "auto",
  });

  const stream = OpenAIStream(initialResponse, {
    experimental_onFunctionCall: async (
      { name, arguments: args },
      createFunctionCallMessages,
    ) => {
      const result = await runFunction(name, args);
      const newMessages = createFunctionCallMessages(result);
      return openai.chat.completions.create({
        model: "gpt-3.5-turbo-0613",
        stream: true,
        messages: [...messages, ...newMessages],
      });
    },
  });

  // Respond with the stream
  return new StreamingTextResponse(stream);

  // // Ask OpenAI for a streaming chat completion given the prompt
  // const response = await openai.createChatCompletion({
  //   model: 'gpt-3.5-turbo',
  //   stream: true,
  //   messages
  // })
  // // Convert the response into a friendly text-stream
  // const stream = OpenAIStream(response)
  // // Respond with the stream
  // return new StreamingTextResponse(stream)
}
