'use client'

import { Input } from '../components/Input'
import { Message } from '../components/Message'
import { useChat } from 'ai/react'
import { useEffect } from 'react'
import { getFeaturePrompt } from '../prompts'

export function Conversation({ feature }) {
  const featurePrompt = getFeaturePrompt(feature)
  const firstPrompt = {"role": "user", "content": featurePrompt}
  const { messages, input, handleInputChange, handleSubmit, append } = useChat()

  useEffect(() => {
    const fetchFirstPrompt = async () => {
      try {
        await append(firstPrompt)
      } catch (error) {
        alert(`Error fetching data: ${error}`);
      }
    };
    fetchFirstPrompt();
  }, []);

  return (
    <section className="w-full flex flex-col min-h-screen p-4">
      <div className="w-full max-w-xl self-center">
        {messages.map((m, index) => {
          if(index !== 0) {
            return <Message
              key={m.id}
              userName={m.role === 'user' ? 'Yo: ' : 'Partner: '}
              text={m.content} />
          }
        })}
      </div>
      <Input value={input} valueHandler={handleInputChange} submitHandler={handleSubmit} />
    </section>
  )
}
