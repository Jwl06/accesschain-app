"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Star, ShipWheelIcon as Wheelchair, Eye, Ear, Heart, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

// Mock data for featured places
const featuredPlaces = [
  {
    id: 1,
    name: "Central Library",
    type: "Library",
    rating: 4.5,
    reviewCount: 23,
    address: "123 Main St, Downtown",
    accessibilityScore: 85,
    features: ["Wheelchair Access", "Audio Books", "Large Print"],
  },
  {
    id: 2,
    name: "Sunrise Mall",
    type: "Shopping Center",
    rating: 4.2,
    reviewCount: 45,
    address: "456 Commerce Ave",
    accessibilityScore: 78,
    features: ["Wheelchair Access", "Accessible Parking", "Elevators"],
  },
  {
    id: 3,
    name: "Bean There Cafe",
    type: "Restaurant",
    rating: 4.7,
    reviewCount: 18,
    address: "789 Coffee Lane",
    accessibilityScore: 92,
    features: ["Wheelchair Access", "Braille Menu", "Wide Aisles"],
  },
]

const stats = [
  { icon: MapPin, label: "Places Reviewed", value: "1,247" },
  { icon: Users, label: "Community Members", value: "3,892" },
  { icon: Star, label: "Reviews Submitted", value: "5,634" },
  { icon: TrendingUp, label: "Accessibility Score Avg", value: "82%" },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Wheelchair className="h-8 w-8 text-sky-500" />
              <span className="text-2xl font-bold text-gray-900">AccessChain</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/places" className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
                Places
              </Link>
              <Link href="/add-review" className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
                Add Review
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-sky-600 font-medium transition-colors">
                About
              </Link>
            </div>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white" asChild>
              <Link href="/add-review">Share Review</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 gradient-hero">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-medium">
              <Wheelchair className="h-10 w-10 text-sky-500" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Design out the daily struggle.
              <span className="block text-sky-600">Share accessibility insights.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Help build a more accessible world by sharing your experiences at public places. Together, we can make
              every space welcoming for everyone.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative glass-effect rounded-2xl p-2 shadow-medium">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for places, cafes, libraries, malls..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-xl border-0 bg-transparent focus:ring-2 focus:ring-sky-500"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-xl bg-sky-500 hover:bg-sky-600">
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button
              size="lg"
              className="text-lg px-10 py-4 rounded-full btn-hover-lift bg-sky-500 hover:bg-sky-600 text-white"
              asChild
            >
              <Link href="/places">Explore Places</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-4 rounded-full btn-hover-lift border-sky-300 text-sky-600 hover:bg-sky-50 bg-transparent"
              asChild
            >
              <Link href="/add-review">Share Your Experience</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-sky-50 to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-medium">
                  <stat.icon className="h-8 w-8 text-sky-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Places */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Accessible Places</h2>
            <p className="text-xl text-gray-600">Discover highly-rated accessible venues in your community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPlaces.map((place) => (
              <Card
                key={place.id}
                className="hover:shadow-strong transition-all duration-300 cursor-pointer border-sky-100 card-shadow-lg rounded-2xl"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-sky-100 text-sky-700">
                      {place.type}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{place.rating}</span>
                      <span className="text-gray-500">({place.reviewCount})</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{place.name}</CardTitle>
                  <CardDescription className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {place.address}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Accessibility Score</span>
                      <span className="text-sm font-bold text-emerald-600">{place.accessibilityScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full"
                        style={{ width: `${place.accessibilityScore}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {place.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-sky-200 text-sky-700">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-sky-300 text-sky-600 hover:bg-sky-50 bg-transparent"
              asChild
            >
              <Link href="/places">View All Places</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How AccessChain Works</h2>
            <p className="text-xl text-gray-600">Simple steps to make a difference</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-medium">
                <Search className="h-10 w-10 text-sky-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">1. Find Places</h3>
              <p className="text-gray-600">
                Search for public places like cafes, libraries, malls, and more in your area.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-medium">
                <Heart className="h-10 w-10 text-sky-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">2. Share Experience</h3>
              <p className="text-gray-600">
                Rate accessibility features and share your honest experience to help others.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-medium">
                <Users className="h-10 w-10 text-sky-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">3. Help Community</h3>
              <p className="text-gray-600">
                Your reviews help create a more accessible world for everyone in the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wheelchair className="h-8 w-8 text-sky-400" />
                <span className="text-2xl font-bold">AccessChain</span>
              </div>
              <p className="text-gray-400">Making the world more accessible, one review at a time.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/places" className="hover:text-white transition-colors">
                    Places
                  </Link>
                </li>
                <li>
                  <Link href="/add-review" className="hover:text-white transition-colors">
                    Add Review
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Accessibility</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Wheelchair className="h-4 w-4 mr-2" />
                  Mobility
                </li>
                <li className="flex items-center">
                  <Eye className="h-4 w-4 mr-2" />
                  Vision
                </li>
                <li className="flex items-center">
                  <Ear className="h-4 w-4 mr-2" />
                  Hearing
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">help@accesschain.com</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AccessChain. Making accessibility accessible.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
