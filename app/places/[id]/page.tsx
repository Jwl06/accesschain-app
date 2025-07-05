"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  MapPin,
  Star,
  ShipWheelIcon as Wheelchair,
  Phone,
  Clock,
  Globe,
  ThumbsUp,
  ThumbsDown,
  Eye,
  Ear,
  Car,
  Navigation,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Mock data for place details
const mockPlaceDetails = {
  1: {
    id: 1,
    name: "Central Library",
    type: "Library",
    rating: 4.5,
    reviewCount: 23,
    address: "123 Main St, Downtown",
    phone: "(555) 123-4567",
    website: "www.centrallibrary.com",
    hours: "Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM",
    accessibilityScore: 85,
    features: [
      "Wheelchair Access",
      "Audio Books",
      "Large Print",
      "Accessible Parking",
      "Elevator Access",
      "Braille Signage",
    ],
    description:
      "A modern public library serving the downtown community with extensive accessibility features and resources for all patrons.",
    accessibilityDetails: {
      mobility: 90,
      vision: 85,
      hearing: 80,
      cognitive: 85,
    },
    reviews: [
      {
        id: 1,
        author: "Sarah M.",
        avatar: "/placeholder-user.jpg",
        rating: 5,
        date: "2 weeks ago",
        helpful: 12,
        content:
          "Excellent accessibility features! The elevator is always working, and the staff is incredibly helpful. The large print section is well-organized and the audio book collection is extensive.",
        accessibilityRating: {
          mobility: 5,
          vision: 5,
          hearing: 4,
          cognitive: 5,
        },
      },
      {
        id: 2,
        author: "Mike R.",
        avatar: "/placeholder-user.jpg",
        rating: 4,
        date: "1 month ago",
        helpful: 8,
        content:
          "Great wheelchair accessibility throughout the building. The only issue is that some of the computer stations could be better positioned for wheelchair users.",
        accessibilityRating: {
          mobility: 4,
          vision: 5,
          hearing: 4,
          cognitive: 4,
        },
      },
      {
        id: 3,
        author: "Emma L.",
        avatar: "/placeholder-user.jpg",
        rating: 5,
        date: "3 weeks ago",
        helpful: 15,
        content:
          "As someone with visual impairment, I appreciate the Braille signage and the helpful staff who always offer assistance. The audio book section is fantastic!",
        accessibilityRating: {
          mobility: 5,
          vision: 5,
          hearing: 4,
          cognitive: 5,
        },
      },
    ],
  },
}

const accessibilityCategories = [
  { key: "mobility", label: "Mobility", icon: Wheelchair, description: "Wheelchair access, ramps, elevators" },
  { key: "vision", label: "Vision", icon: Eye, description: "Large print, Braille, good lighting" },
  { key: "hearing", label: "Hearing", icon: Ear, description: "Sign language, audio loops, visual alerts" },
  { key: "cognitive", label: "Cognitive", icon: Navigation, description: "Clear signage, simple navigation" },
]

export default function PlaceDetailPage() {
  const params = useParams()
  const placeId = Number.parseInt(params.id as string)
  const [place, setPlace] = useState(mockPlaceDetails[placeId as keyof typeof mockPlaceDetails])

  if (!place) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Place not found</h2>
          <p className="text-gray-600 mb-4">The place you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/places">Back to Places</Link>
          </Button>
        </div>
      </div>
    )
  }

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
              <Link href="/places" className="text-gray-700 hover:text-sky-600 font-medium">
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
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/places" className="hover:text-blue-600">
                Places
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{place.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Place Header */}
            <Card className="border-0 shadow-soft rounded-2xl border-sky-100">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="text-sm">
                    {place.type}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xl font-semibold">{place.rating}</span>
                    <span className="text-gray-500">({place.reviewCount} reviews)</span>
                  </div>
                </div>
                <CardTitle className="text-3xl mb-2">{place.name}</CardTitle>
                <CardDescription className="text-lg">{place.description}</CardDescription>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span>{place.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span>{place.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span>{place.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-gray-400" />
                    <a href={`https://${place.website}`} className="text-blue-600 hover:underline">
                      {place.website}
                    </a>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Accessibility Score */}
            <Card className="border-0 shadow-soft rounded-2xl border-sky-100">
              <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-t-2xl">
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Wheelchair className="h-6 w-6 text-white" />
                  <span>Accessibility Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium">Overall Accessibility Score</span>
                    <span className="text-2xl font-bold text-green-600">{place.accessibilityScore}%</span>
                  </div>
                  <Progress value={place.accessibilityScore} className="h-4 rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {accessibilityCategories.map((category) => (
                    <div key={category.key} className="flex items-start space-x-3">
                      <category.icon className="h-6 w-6 text-sky-500 mt-1" />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium">{category.label}</h4>
                          <span className="text-sm font-semibold">
                            {place.accessibilityDetails[category.key as keyof typeof place.accessibilityDetails]}%
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                        <Progress
                          value={place.accessibilityDetails[category.key as keyof typeof place.accessibilityDetails]}
                          className="h-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="border-0 shadow-soft rounded-2xl border-sky-100">
              <CardHeader>
                <CardTitle>Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {place.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="border-0 shadow-soft rounded-2xl border-sky-100">
              <CardHeader>
                <CardTitle>Reviews ({place.reviewCount})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {place.reviews.map((review) => (
                    <div key={review.id}>
                      <div className="bg-gradient-to-r from-sky-50 to-sky-100 rounded-2xl p-6 mb-6">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.author} />
                            <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-medium">{review.author}</h4>
                                <div className="flex items-center space-x-2">
                                  <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-700 mb-3">{review.content}</p>

                            {/* Accessibility Ratings */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                              {accessibilityCategories.map((category) => (
                                <div key={category.key} className="text-center">
                                  <category.icon className="h-4 w-4 mx-auto mb-1 text-sky-500" />
                                  <div className="text-xs text-gray-600">{category.label}</div>
                                  <div className="flex justify-center">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-3 w-3 ${i < review.accessibilityRating[category.key as keyof typeof review.accessibilityRating] ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <button className="flex items-center space-x-1 hover:text-green-600">
                                <ThumbsUp className="h-4 w-4" />
                                <span>Helpful ({review.helpful})</span>
                              </button>
                              <button className="flex items-center space-x-1 hover:text-red-600">
                                <ThumbsDown className="h-4 w-4" />
                                <span>Not helpful</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {review.id !== place.reviews[place.reviews.length - 1].id && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 shadow-soft rounded-2xl border-sky-100">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full rounded-full btn-hover-lift bg-sky-500 hover:bg-sky-600 text-white mb-3"
                  asChild
                >
                  <Link href={`/add-review?place=${place.id}`}>Write a Review</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full btn-hover-lift border-sky-300 text-sky-600 hover:bg-sky-50 bg-transparent mb-3"
                >
                  <Car className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full btn-hover-lift border-sky-300 text-sky-600 hover:bg-sky-50 bg-transparent"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* Accessibility Quick View */}
            <Card className="border-0 shadow-soft rounded-2xl border-sky-100">
              <CardHeader>
                <CardTitle>Accessibility at a Glance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {accessibilityCategories.map((category) => (
                    <div key={category.key} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <category.icon className="h-4 w-4 text-sky-500" />
                        <span className="text-sm">{category.label}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < Math.round(place.accessibilityDetails[category.key as keyof typeof place.accessibilityDetails] / 20) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Similar Places */}
            <Card className="border-0 shadow-soft rounded-2xl border-sky-100">
              <CardHeader>
                <CardTitle>Similar Places</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Wheelchair className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">East Branch Library</h4>
                      <p className="text-xs text-gray-600">0.8 miles away</p>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">4.3 (18 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Wheelchair className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Community Center</h4>
                      <p className="text-xs text-gray-600">1.2 miles away</p>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">4.1 (25 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
