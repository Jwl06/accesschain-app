"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Star, ShipWheelIcon as Wheelchair } from "lucide-react"
import Link from "next/link"

// Mock data for places
const mockPlaces = [
  {
    id: 1,
    name: "Central Library",
    type: "Library",
    rating: 4.5,
    reviewCount: 23,
    address: "123 Main St, Downtown",
    accessibilityScore: 85,
    features: ["Wheelchair Access", "Audio Books", "Large Print", "Accessible Parking"],
    distance: "0.5 miles",
  },
  {
    id: 2,
    name: "Sunrise Mall",
    type: "Shopping Center",
    rating: 4.2,
    reviewCount: 45,
    address: "456 Commerce Ave",
    accessibilityScore: 78,
    features: ["Wheelchair Access", "Accessible Parking", "Elevators", "Wide Aisles"],
    distance: "1.2 miles",
  },
  {
    id: 3,
    name: "Bean There Cafe",
    type: "Restaurant",
    rating: 4.7,
    reviewCount: 18,
    address: "789 Coffee Lane",
    accessibilityScore: 92,
    features: ["Wheelchair Access", "Braille Menu", "Wide Aisles", "Accessible Restroom"],
    distance: "0.8 miles",
  },
  {
    id: 4,
    name: "City Park Recreation Center",
    type: "Recreation",
    rating: 4.3,
    reviewCount: 31,
    address: "321 Park Avenue",
    accessibilityScore: 88,
    features: ["Wheelchair Access", "Accessible Playground", "Paved Paths", "Audio Announcements"],
    distance: "2.1 miles",
  },
  {
    id: 5,
    name: "Metro Hospital",
    type: "Healthcare",
    rating: 4.6,
    reviewCount: 67,
    address: "555 Health Drive",
    accessibilityScore: 95,
    features: ["Wheelchair Access", "Sign Language Interpreters", "Accessible Parking", "Braille Signage"],
    distance: "1.8 miles",
  },
  {
    id: 6,
    name: "Downtown Grocery",
    type: "Grocery Store",
    rating: 3.9,
    reviewCount: 28,
    address: "147 Market Street",
    accessibilityScore: 72,
    features: ["Wheelchair Access", "Wide Aisles", "Accessible Checkout"],
    distance: "0.3 miles",
  },
]

const placeTypes = [
  "All Types",
  "Restaurant",
  "Library",
  "Shopping Center",
  "Recreation",
  "Healthcare",
  "Grocery Store",
]

export default function PlacesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("All Types")
  const [sortBy, setSortBy] = useState("rating")
  const [filteredPlaces, setFilteredPlaces] = useState(mockPlaces)

  useEffect(() => {
    let filtered = mockPlaces

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (place) =>
          place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          place.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          place.type.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by type
    if (selectedType !== "All Types") {
      filtered = filtered.filter((place) => place.type === selectedType)
    }

    // Sort places
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "accessibility":
          return b.accessibilityScore - a.accessibilityScore
        case "distance":
          return Number.parseFloat(a.distance) - Number.parseFloat(b.distance)
        case "reviews":
          return b.reviewCount - a.reviewCount
        default:
          return 0
      }
    })

    setFilteredPlaces(filtered)
  }, [searchQuery, selectedType, sortBy])

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Wheelchair className="h-8 w-8 text-sky-500" />
              <span className="text-2xl font-bold text-gray-900">AccessChain</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-sky-600 font-medium">
                Home
              </Link>
              <Link href="/places" className="text-blue-600 font-medium">
                Places
              </Link>
              <Link href="/add-review" className="text-gray-700 hover:text-sky-600 font-medium">
                Add Review
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-sky-600 font-medium">
                About
              </Link>
            </div>
            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white">
              <Link href="/add-review">Share Review</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Accessible Places</h1>
          <p className="text-gray-600">Discover and review accessible venues in your community</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-soft border-sky-100 p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search places..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Place Type" />
                </SelectTrigger>
                <SelectContent>
                  {placeTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort */}
            <div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="accessibility">Most Accessible</SelectItem>
                  <SelectItem value="distance">Nearest</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPlaces.length} places
            {selectedType !== "All Types" && ` in ${selectedType}`}
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => (
            <Card
              key={place.id}
              className="hover:shadow-strong transition-all duration-300 cursor-pointer border-sky-100 card-shadow-lg rounded-2xl overflow-hidden"
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
                <CardTitle className="text-xl">{place.name}</CardTitle>
                <CardDescription>
                  <div className="flex items-center mb-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {place.address}
                  </div>
                  <div className="text-sm text-gray-500">{place.distance} away</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Accessibility Score</span>
                    <span
                      className={`text-sm font-bold ${
                        place.accessibilityScore >= 90
                          ? "text-emerald-600"
                          : place.accessibilityScore >= 75
                            ? "text-yellow-600"
                            : "text-red-600"
                      }`}
                    >
                      {place.accessibilityScore}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-3 rounded-full ${
                        place.accessibilityScore >= 90
                          ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                          : place.accessibilityScore >= 75
                            ? "bg-gradient-to-r from-amber-400 to-amber-500"
                            : "bg-gradient-to-r from-rose-400 to-rose-500"
                      }`}
                      style={{ width: `${place.accessibilityScore}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {place.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {place.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{place.features.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    className="flex-1 rounded-full btn-hover-lift bg-sky-500 hover:bg-sky-600 text-white"
                    asChild
                  >
                    <Link href={`/places/${place.id}`}>View Details</Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full btn-hover-lift bg-transparent border-sky-300 text-sky-600 hover:bg-sky-50"
                    asChild
                  >
                    <Link href={`/add-review?place=${place.id}`}>Review</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No places found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white">
              <Link href="/add-review">Add a New Place</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
