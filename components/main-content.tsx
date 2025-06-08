"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Users,
  MapPin,
  TestTube,
  Building2,
  BadgeIcon as Police,
  HeartPulse,
  MessageSquare,
  Info,
  Home,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react"
import { ChatInterface } from "@/components/chat-interface"
import { EmergencyCard } from "@/components/emergency-card"
import { HospitalCard } from "@/components/hospital-card"
import { PoliceStationCard } from "@/components/police-station-card"
import { FamilyMemberCard } from "@/components/family-member-card"
import { GpsLocationCard } from "@/components/gps-location-card"
import { DashboardStats } from "@/components/dashboard-stats"

interface MainContentProps {
  activeSection: string
}

export function MainContent({ activeSection }: MainContentProps) {
  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardContent />
      case "family":
        return <FamilyContent />
      case "gps":
        return <GpsContent />
      case "gpstest":
        return <GpsTestContent />
      case "hospital":
        return <HospitalContent />
      case "police":
        return <PoliceContent />
      case "emergency":
        return <EmergencyContent />
      case "feedback":
        return <FeedbackContent />
      case "reports":
        return <ReportsContent />
      case "analytics":
        return <AnalyticsContent />
      case "settings":
        return <SettingsContent />
      case "about":
        return <AboutContent />
      default:
        return <DashboardContent />
    }
  }

  return (
    <main className="flex-1 overflow-auto">
      <div className="min-h-full bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 p-6">
        <div className="mx-auto max-w-7xl space-y-6">{renderContent()}</div>
      </div>
    </main>
  )
}

function ReportsContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
        <FileText className="h-8 w-8 text-teal-600" />
        Reports & Analytics
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardTitle>Incident Reports</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Incidents</span>
                <Badge className="bg-red-500">47</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Resolved</span>
                <Badge className="bg-green-500">42</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Pending</span>
                <Badge className="bg-yellow-500">5</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
            <CardTitle>Response Times</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Average Response</span>
                <span className="font-bold">4.2 min</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Fastest Response</span>
                <span className="font-bold">1.8 min</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Target Time</span>
                <span className="font-bold">5.0 min</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AnalyticsContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
        <BarChart3 className="h-8 w-8 text-teal-600" />
        System Analytics
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardTitle>Usage Statistics</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span>Daily Active Users</span>
                <span className="font-bold">2,847</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Emergency Calls</span>
                <span className="font-bold">156</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>GPS Tracking Active</span>
                <span className="font-bold">98.7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>System Uptime</span>
                <span className="font-bold">99.9%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span>Server Response Time</span>
                <span className="font-bold">120ms</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Database Queries/sec</span>
                <span className="font-bold">1,247</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>API Success Rate</span>
                <span className="font-bold">99.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Error Rate</span>
                <span className="font-bold">0.2%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function SettingsContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
        <Settings className="h-8 w-8 text-teal-600" />
        System Settings
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-gray-600 to-gray-700 text-white">
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Emergency Alerts</span>
                <Badge className="bg-green-500">Enabled</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>SMS Notifications</span>
                <Badge className="bg-green-500">Enabled</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Email Updates</span>
                <Badge className="bg-yellow-500">Disabled</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Push Notifications</span>
                <Badge className="bg-green-500">Enabled</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
            <CardTitle>Privacy Settings</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Location Sharing</span>
                <Badge className="bg-green-500">Enabled</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Data Analytics</span>
                <Badge className="bg-green-500">Enabled</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Third-party Access</span>
                <Badge className="bg-red-500">Disabled</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Auto-backup</span>
                <Badge className="bg-green-500">Enabled</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to CuraDrive - Road Safety & Emergency Response System</p>
        </div>
        <Badge className="bg-green-500 text-white">System Online</Badge>
      </div>

      <DashboardStats />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-sm">Accident detected on NH-46</span>
                <Badge variant="destructive">Active</Badge>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-sm">GPS signal weak - Sector 7</span>
                <Badge variant="outline">Resolved</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Emergency contact updated</span>
                <Badge className="bg-green-500">Info</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">GPS Tracking</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600">Active</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Emergency Network</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600">Connected</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Sensor Array</span>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm text-yellow-600">Updating</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-2">
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Emergency Alert</Button>
              <Button variant="outline" className="w-full border-teal-500 text-teal-600 hover:bg-teal-50">
                Update Location
              </Button>
              <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50">
                Contact Family
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function FamilyContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <Users className="h-8 w-8 text-teal-600" />
          Family Members
        </h1>
        <Button className="bg-teal-600 hover:bg-teal-700">Add Member</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FamilyMemberCard
          name="Rajesh Kumar"
          relation="Father"
          phone="9876543210"
          imageUrl="/placeholder.svg?height=100&width=100"
        />
        <FamilyMemberCard
          name="Sunita Devi"
          relation="Mother"
          phone="9123456780"
          imageUrl="/placeholder.svg?height=100&width=100"
        />
        <FamilyMemberCard
          name="Amit Kumar"
          relation="Brother"
          phone="9898765432"
          imageUrl="/placeholder.svg?height=100&width=100"
        />
        <FamilyMemberCard
          name="Priya Sharma"
          relation="Sister"
          phone="9876512345"
          imageUrl="/placeholder.svg?height=100&width=100"
        />
        <FamilyMemberCard
          name="Dr. Anil Gupta"
          relation="Family Doctor"
          phone="9123987654"
          imageUrl="/placeholder.svg?height=100&width=100"
        />
      </div>
    </div>
  )
}

function GpsContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <MapPin className="h-8 w-8 text-teal-600" />
          GPS Location
        </h1>
        <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
          Refresh Location
        </Button>
      </div>
      <GpsLocationCard />
    </div>
  )
}

function GpsTestContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
        <TestTube className="h-8 w-8 text-teal-600" />
        GPS Test Mode
      </h1>
      <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
        <CardHeader className="bg-gradient-to-r from-teal-600 to-teal-500 text-white">
          <CardTitle>System Diagnostics</CardTitle>
          <CardDescription className="text-teal-50">Testing GPS and sensor functionality</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-medium">GPS Signal</span>
              <Badge className="bg-green-500">Strong</Badge>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-medium">Sensor Status</span>
              <Badge className="bg-green-500">Active</Badge>
            </div>
            <div className="flex items-center justify-between border-b pb-2">
              <span className="font-medium">Communication</span>
              <Badge className="bg-green-500">Connected</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Battery</span>
              <Badge className="bg-green-500">98%</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function HospitalContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <Building2 className="h-8 w-8 text-teal-600" />
          Nearby Hospitals
        </h1>
        <div className="flex gap-2">
          <Input placeholder="Search hospitals..." className="max-w-xs bg-white/80" />
          <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
            Filter
          </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <HospitalCard
          name="Nagpur Hospital"
          distance="2.4km"
          contact="0755-2678901"
          specialties={["Emergency", "Trauma", "ICU"]}
          imageUrl="/placeholder.svg?height=200&width=300"
        />
        <HospitalCard
          name="Maruti Multispeciality Hospital"
          distance="2.7km"
          contact="0755-2789012"
          specialties={["Cardiology", "Neurology", "Orthopedics"]}
          imageUrl="/placeholder.svg?height=200&width=300"
        />
        <HospitalCard
          name="Laxmi Multispeciality Hospital"
          distance="2.7km"
          contact="0755-2890123"
          specialties={["Pediatrics", "Surgery", "Emergency"]}
          imageUrl="/placeholder.svg?height=200&width=300"
        />
        <HospitalCard
          name="ANANT SGREE HOSPITAL"
          distance="7.2km"
          contact="0755-2901234"
          specialties={["Gynecology", "Orthopedics", "ENT"]}
          imageUrl="/placeholder.svg?height=200&width=300"
        />
        <HospitalCard
          name="Career Hospital Bhopal"
          distance="10km"
          contact="0755-3012345"
          specialties={["Cardiology", "Oncology", "Nephrology"]}
          imageUrl="/placeholder.svg?height=200&width=300"
        />
        <HospitalCard
          name="AIIMS Bhopal"
          distance="12km"
          contact="0755-3123456"
          specialties={["All Specialties", "Trauma Center", "Research"]}
          imageUrl="/placeholder.svg?height=200&width=300"
        />
        <HospitalCard
          name="Chirayu Medical College"
          distance="15km"
          contact="0755-4567890"
          specialties={["Medical Education", "Research", "Multi-specialty"]}
          imageUrl="/placeholder.svg?height=200&width=300"
        />
        <HospitalCard
          name="Bansal Hospital"
          distance="8.5km"
          contact="0755-5678901"
          specialties={["Cardiac Surgery", "Neurosurgery", "Oncology"]}
          imageUrl="/placeholder.svg?height=200&width=300"
        />
      </div>
    </div>
  )
}

function PoliceContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <Police className="h-8 w-8 text-teal-600" />
          Police Stations
        </h1>
        <div className="flex gap-2">
          <Input placeholder="Search stations..." className="max-w-xs bg-white/80" />
          <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
            Filter
          </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PoliceStationCard
          name="Police Station Anand Nagar"
          distance="4.4km"
          contact="755 275 2627"
          mapUrl="https://maps.app.goo.gl/HvjVLbUHnyCLJ4jd8"
          imageUrl="/placeholder.svg?height=200&width=300"
        />
        <PoliceStationCard
          name="Bilkhiriya Police Station J. K."
          distance="6.4km"
          contact="755 292 3500"
          mapUrl="https://maps.app.goo.gl/Q71jMRkJC9x5qZnH8"
          imageUrl="/placeholder.svg?height=200&width=300"
        />
        <PoliceStationCard
          name="Piplani Police Station"
          distance="6.8km"
          contact="755 267 7326"
          mapUrl="https://maps.app.goo.gl/5s1PidJ7SZrZmHLn7"
          imageUrl="/placeholder.svg?height=200&width=300"
        />
        <PoliceStationCard
          name="Police Station Ashoka Garden"
          distance="11km"
          contact="755 268 1900"
          mapUrl="https://maps.app.goo.gl/HzhBR1izoELzqfsMA"
          imageUrl="/placeholder.svg?height=200&width=300"
        />
        <PoliceStationCard
          name="Habibganj Police Station"
          distance="13km"
          contact="755 278 3456"
          mapUrl="https://maps.app.goo.gl/example1"
          imageUrl="/placeholder.svg?height=200&width=300"
        />
        <PoliceStationCard
          name="MP Nagar Police Station"
          distance="9.2km"
          contact="755 289 4567"
          mapUrl="https://maps.app.goo.gl/example2"
          imageUrl="/placeholder.svg?height=200&width=300"
        />
        <PoliceStationCard
          name="Kolar Police Station"
          distance="16km"
          contact="755 290 5678"
          mapUrl="https://maps.app.goo.gl/example3"
          imageUrl="/placeholder.svg?height=200&width=300"
        />
        <PoliceStationCard
          name="Shahpura Police Station"
          distance="14km"
          contact="755 301 6789"
          mapUrl="https://maps.app.goo.gl/example4"
          imageUrl="/placeholder.svg?height=200&width=300"
        />
      </div>
    </div>
  )
}

function EmergencyContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
        <HeartPulse className="h-8 w-8 text-teal-600" />
        Emergency Contacts
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <EmergencyCard title="Ambulance" number="102" icon="ambulance" color="bg-red-500" />
        <EmergencyCard title="Fire" number="101" icon="fire" color="bg-orange-500" />
        <EmergencyCard title="Police" number="100" icon="police" color="bg-blue-600" />
        <EmergencyCard title="Women Helpline" number="1091" icon="phone" color="bg-pink-500" />
        <EmergencyCard title="Child Helpline" number="1098" icon="phone" color="bg-green-500" />
        <EmergencyCard title="National Emergency" number="112" icon="phone" color="bg-purple-500" />
        <EmergencyCard title="Disaster Management" number="1070" icon="phone" color="bg-indigo-500" />
        <EmergencyCard title="Tourist Helpline" number="1363" icon="phone" color="bg-cyan-500" />
        <EmergencyCard title="Railway Enquiry" number="139" icon="phone" color="bg-gray-600" />
      </div>
    </div>
  )
}

function FeedbackContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
        <MessageSquare className="h-8 w-8 text-teal-600" />
        Feedback & AI Chat
      </h1>
      <ChatInterface />
    </div>
  )
}

function AboutContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
        <Info className="h-8 w-8 text-teal-600" />
        About CuraDrive
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-teal-600 to-teal-500 text-white">
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-700">
                CuraDrive is dedicated to providing quick access to essential emergency contacts, location tracking, and
                important local resources. Our mission is to make sure you stay informed and safe, anytime, anywhere.
              </p>
              <p className="text-gray-700">
                Through innovative sensor technology and real-time communication systems, we aim to reduce emergency
                response times and save lives during critical situations.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-teal-600 to-teal-500 text-white">
            <CardTitle>Government Initiative</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-700">
                CuraDrive is a proud initiative under the Smart Cities Mission, aimed at leveraging technology to
                enhance public safety and emergency response systems across the nation.
              </p>
              <p className="text-gray-700">
                Developed with care and user convenience in mind, CuraDrive aims to simplify critical information access
                during emergencies and everyday needs.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
