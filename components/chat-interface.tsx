"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send, User } from "lucide-react"

type Message = {
  sender: "user" | "ai"
  text: string
  timestamp: Date
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hello! How can I assist you with CuraDrive today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      sender: "user",
      text: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      let response = "I'm sorry, I didn't understand that. Please try again."

      const lowerInput = input.toLowerCase()
      if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        response = "Hello! How can I assist you today?"
      } else if (lowerInput.includes("help")) {
        response = "Sure, I can help you! You can ask about hospital lists, police stations, or emergency contacts."
      } else if (lowerInput.includes("contact")) {
        response = "You can reach our support through the feedback section or send us an email for assistance."
      } else if (lowerInput.includes("issue") || lowerInput.includes("problem")) {
        response = "Sorry to hear that. Please describe your issue, and we will try to resolve it quickly."
      } else if (lowerInput.includes("thank")) {
        response = "You're welcome! Let me know if there's anything else I can help you with."
      } else if (lowerInput.includes("location")) {
        response = "You can view your current GPS location in the 'GPS Location' section."
      } else if (lowerInput.includes("hospital")) {
        response =
          "You can find the list of nearby hospitals in the 'Hospitals' tab. The closest one is Nagpur Hospital at 2.4km from your location."
      } else if (lowerInput.includes("police")) {
        response =
          "The nearest police station is Anand Nagar Police Station, about 4.4km away. You can find contact details in the 'Police' tab."
      } else if (lowerInput.includes("emergency")) {
        response =
          "For emergencies, please dial 112 (National Emergency Number), 100 (Police), 101 (Fire), or 102 (Ambulance)."
      } else if (lowerInput.includes("sensor")) {
        response =
          "Our sensors are working perfectly! They detect accidents, monitor vehicle conditions, and automatically alert emergency services when needed."
      } else if (lowerInput.includes("family")) {
        response =
          "You can manage your family contacts in the Family Members section. Currently, you have 5 family members registered for emergency notifications."
      } else if (lowerInput.includes("dashboard")) {
        response =
          "The dashboard shows real-time statistics including local emergency services, nearby hospitals, and connected police stations in your area."
      }

      const aiMessage: Message = {
        sender: "ai",
        text: response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          CuraDrive Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`
                    max-w-[80%] rounded-lg p-3 
                    ${message.sender === "user" ? "bg-teal-500 text-white" : "bg-gray-100 text-gray-800"}
                  `}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {message.sender === "ai" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    <span className="font-medium">{message.sender === "ai" ? "CuraDrive Assistant" : "You"}</span>
                    <span className="text-xs opacity-70">{formatTime(message.timestamp)}</span>
                  </div>
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t p-4">
        <div className="flex w-full gap-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} className="bg-teal-600 hover:bg-teal-700">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
