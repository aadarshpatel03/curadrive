import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone } from "lucide-react"
import { getRandomHospitalImage } from "@/lib/hospital-images"

interface HospitalCardProps {
  name: string
  distance: string
  contact: string
  specialties: string[]
  imageUrl?: string // Make imageUrl optional
}

export function HospitalCard({ name, distance, contact, specialties, imageUrl }: HospitalCardProps) {
  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300">
      <div className="relative h-48">
        <Image 
          src={imageUrl || getRandomHospitalImage()} 
          alt={name} 
          fill 
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-teal-500">{distance}</Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <Phone className="h-4 w-4 mr-2" />
          <span>{contact}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {specialties.map((specialty, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100">
              {specialty}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 flex justify-between">
        <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
          <Phone className="h-4 w-4 mr-2" />
          Call
        </Button>
        <Button className="bg-teal-600 hover:bg-teal-700">
          <MapPin className="h-4 w-4 mr-2" />
          Directions
        </Button>
      </CardFooter>
    </Card>
  )
}
