import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Chat() {
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const messagesEndRef = useRef(null)

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! I'm Taniya AI. Ask me anything about Taniya's professional background."
    }
  ])

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [messages, isLoading])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()

    // Create user message
    const newUserMessage = {
      role: 'user',
      text: userMessage
    }

    // Add user message to screen
    setMessages((prev) => [
      ...prev,
      newUserMessage
    ])

    // Clear input
    setInput('')

    // Start loading
    setIsLoading(true)

    try {
      const API_URL = import.meta.env.VITE_API_URL

      console.log('API URL:', API_URL)
      console.log('User message:', userMessage)

      /*
       * Convert frontend messages into
       * the format expected by FastAPI.
       *
       * IMPORTANT:
       * We send the COMPLETE conversation.
       */

      const conversationHistory = [
        ...messages.map((message) => ({
          role: message.role,
          content: message.text
        })),
        {
          role: 'user',
          content: userMessage
        }
      ]

      console.log(
        'Conversation being sent:',
        conversationHistory
      )

      // Send conversation to backend
      const response = await fetch(
        `${API_URL}/chat`,
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            messages: conversationHistory
          })
        }
      )

      console.log(
        'Backend status:',
        response.status
      )

      if (!response.ok) {
        throw new Error(
          `Backend returned ${response.status}`
        )
      }

      // Read backend response
      const data = await response.json()

      console.log(
        'AI response:',
        data
      )

      if (!data.response) {
        throw new Error(
          'AI response is missing'
        )
      }

      // Add AI response
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: data.response
        }
      ])

    } catch (error) {

      console.error(
        'Chat error:',
        error
      )

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'Sorry, I could not connect to the AI backend.'
        }
      ])

    } finally {

      setIsLoading(false)

    }
  }

  return (
    <section id="chat">

      {/* Heading */}

      <div className="chat-heading">

        <p>AI ASSISTANT</p>

        <h2>
          Talk to Taniya AI
        </h2>

        <span>
          Ask me about Taniya's skills,
          projects, education, or experience.
        </span>

      </div>

      {/* Chat Box */}

      <div className="chat-box">

        {/* Messages */}

        <div className="chat-messages">

          {messages.map(
            (message, index) => (

              <div
                key={index}
                className={
                  message.role === 'user'
                    ? 'message user-message'
                    : 'message ai-message'
                }
              >

                {/* Avatar */}

                <div className="message-avatar">

                  {message.role === 'user'
                    ? 'You'
                    : 'AI'}

                </div>

                {/* Message */}

                <div className="message-content">

                  {message.role === 'assistant' ? (

                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                    >
                      {message.text.replace(
                        /<br\s*\/?>/gi,
                        '\n'
                      )}
                    </ReactMarkdown>

                  ) : (

                    <p>
                      {message.text}
                    </p>

                  )}

                </div>

              </div>

            )
          )}

          {/* Typing indicator */}

          {isLoading && (

            <div className="message ai-message">

              <div className="message-avatar">
                AI
              </div>

              <div className="message-content typing-indicator">

                <span></span>
                <span></span>
                <span></span>

              </div>

            </div>

          )}

          {/* Auto scroll */}

          <div ref={messagesEndRef} />

        </div>

        {/* Input */}

        <div className="chat-input-area">

          <input
            type="text"
            value={input}

            onChange={(e) =>
              setInput(e.target.value)
            }

            onKeyDown={(e) => {

              if (e.key === 'Enter') {
                handleSend()
              }

            }}

            placeholder="Ask me about Taniya..."

            disabled={isLoading}
          />

          <button
            onClick={handleSend}
            disabled={isLoading}
          >

            {isLoading
              ? 'Thinking...'
              : 'Send'}

          </button>

        </div>

      </div>

    </section>
  )
}

export default Chat
