"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, RefreshCw } from "lucide-react"

export function GpsLocationCard() {
  const [location, setLocation] = useState<{ lat: string; lon: string } | null>(null)
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchLocation = () => {
    setStatus("loading")

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(4)
          const lon = position.coords.longitude.toFixed(4)
          setLocation({ lat, lon })
          setStatus("success")
          setLastUpdated(new Date())
        },
        (error) => {
          console.error("Error getting location:", error)
          setStatus("error")
        },
      )
    } else {
      setStatus("error")
    }
  }

  useEffect(() => {
    fetchLocation()
  }, [])

  const formatTime = (date: Date | null) => {
    if (!date) return ""
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Current Location
          </div>
          <Badge variant="outline" className="bg-white/10 text-white border-white/20">
            {status === "loading" ? "Updating..." : status === "success" ? "Active" : "Error"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          {status === "loading" && (
            <div className="flex flex-col items-center justify-center py-8">
              <RefreshCw className="h-8 w-8 text-teal-600 animate-spin mb-4" />
              <p className="text-gray-600">Fetching your current location...</p>
            </div>
          )}

          {status === "error" && (
            <div className="py-8">
              <p className="text-red-600 font-medium mb-2">Unable to fetch location</p>
              <p className="text-gray-600">Please check your GPS settings and try again.</p>
            </div>
          )}

          {status === "success" && location && (
            <div className="py-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-500 text-sm mb-1">Latitude</p>
                  <p className="text-2xl font-bold text-teal-700">{location.lat}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-500 text-sm mb-1">Longitude</p>
                  <p className="text-2xl font-bold text-teal-700">{location.lon}</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-500 text-sm mb-1">Address</p>
                <p className="text-gray-700">Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-3 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          {lastUpdated ? `Last updated: ${formatTime(lastUpdated)}` : "Not updated yet"}
        </div>
        <Button onClick={fetchLocation} className="bg-teal-600 hover:bg-teal-700" disabled={status === "loading"}>
          <RefreshCw className={`h-4 w-4 mr-2 ${status === "loading" ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </CardFooter>
    </Card>
  )
}
