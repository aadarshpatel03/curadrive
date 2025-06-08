import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Users, Building2, BadgeIcon as Police, MapPin } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Active Users",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Hospitals Connected",
      value: "156",
      change: "+3.2%",
      trend: "up",
      icon: Building2,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Police Stations",
      value: "89",
      change: "+1.8%",
      trend: "up",
      icon: Police,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Emergency Responses",
      value: "1,234",
      change: "-2.1%",
      trend: "down",
      icon: MapPin,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="flex items-center space-x-2 text-xs">
              {stat.trend === "up" ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
              <Badge
                variant="outline"
                className={`${
                  stat.trend === "up"
                    ? "border-green-200 text-green-700 bg-green-50"
                    : "border-red-200 text-red-700 bg-red-50"
                }`}
              >
                {stat.change}
              </Badge>
              <span className="text-gray-500">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
