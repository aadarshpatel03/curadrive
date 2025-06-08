import { Card, CardContent } from "@/components/ui/card"
import { Ambulance, Phone, BadgeIcon as Police, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmergencyCardProps {
  title: string
  number: string
  icon: "ambulance" | "fire" | "police" | "phone"
  color: string
}

export function EmergencyCard({ title, number, icon, color }: EmergencyCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "ambulance":
        return <Ambulance className="h-6 w-6 text-white" />
      case "fire":
        return <Flame className="h-6 w-6 text-white" />
      case "police":
        return <Police className="h-6 w-6 text-white" />
      case "phone":
      default:
        return <Phone className="h-6 w-6 text-white" />
    }
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:border-teal-500">
      <CardContent className="p-0">
        <div className="flex items-center">
          <div className={`${color} p-4 flex items-center justify-center`}>{getIcon()}</div>
          <div className="p-4 flex-1">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-2xl font-bold text-red-600">{number}</p>
          </div>
          <div className="p-4">
            <Button variant="outline" className="border-red-500 text-red-600 hover:bg-red-50">
              <Phone className="h-4 w-4 mr-2" />
              Call
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
