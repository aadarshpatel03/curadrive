import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone } from "lucide-react"

interface PoliceStationCardProps {
  name: string
  distance: string
  contact: string
  mapUrl: string
  imageUrl: string
}

export function PoliceStationCard({ name, distance, contact, mapUrl, imageUrl }: PoliceStationCardProps) {
  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div className="absolute top-2 right-2">
          <Badge className="bg-blue-600">{distance}</Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <Phone className="h-4 w-4 mr-2" />
          <span>{contact}</span>
        </div>
      </CardContent>
      <CardFooter className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 flex justify-between">
        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
          <Phone className="h-4 w-4 mr-2" />
          Call
        </Button>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <MapPin className="h-4 w-4 mr-2" />
            View Map
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
