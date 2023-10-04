'use client'

import React from "react";
import { useSearchParams } from 'next/navigation'
import { Header } from '../components/Header'
import { Conversation } from '../components/Conversation'

function Chat() {
  const searchParams = useSearchParams()
  const query = searchParams.get('feature')

  return <div>
    <Header />
    <Conversation feature={query} />
  </div>
}

export default Chat;
