import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Edit, Trash2 } from "lucide-react"

interface FamilyMemberCardProps {
  name: string
  relation: string
  phone: string
  imageUrl: string
}

export function FamilyMemberCard({ name, relation, phone, imageUrl }: FamilyMemberCardProps) {
  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300">
      <CardContent className="p-0">
        <div className="flex items-center p-4">
          <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-teal-500">
            <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-gray-600">{relation}</p>
            <div className="flex items-center text-gray-600 mt-1">
              <Phone className="h-4 w-4 mr-1" />
              <span>{phone}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button size="icon" variant="ghost" className="h-8 w-8 text-gray-500 hover:text-teal-600">
              <Edit className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8 text-gray-500 hover:text-red-600">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-3 flex justify-between">
          <Button variant="outline" size="sm" className="border-teal-500 text-teal-600 hover:bg-teal-50">
            <Phone className="h-4 w-4 mr-2" />
            Call
          </Button>
          <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
            Send Alert
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
