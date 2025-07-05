"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ShipWheelIcon as Wheelchair, Star, MapPin, Eye, Ear, Navigation, Plus, Check } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const placeTypes = [
  "Restaurant",
  "Library",
  "Shopping Center",
  "Recreation",
  "Healthcare",
  "Grocery Store",
  "Government",
  "Transportation",
  "Other",
]

const accessibilityFeatures = [
  "Wheelchair Access",
  "Accessible Parking",
  "Elevator Access",
  "Wide Aisles",
  "Accessible Restroom",
  "Braille Signage",
  "Audio Announcements",
  "Sign Language Services",
  "Large Print Materials",
  "Good Lighting",
  "Clear Pathways",
  "Accessible Seating",
  "Automatic Doors",
  "Ramp Access",
  "Accessible Checkout",
]

const accessibilityCategories = [
  {
    key: "mobility",
    label: "Mobility Access",
    icon: Wheelchair,
    description: "Wheelchair access, ramps, elevators, wide doorways",
  },
  {
    key: "vision",
    label: "Vision Support",
    icon: Eye,
    description: "Large print, Braille, good lighting, clear signage",
  },
  {
    key: "hearing",
    label: "Hearing Support",
    icon: Ear,
    description: "Sign language, audio loops, visual alerts",
  },
  {
    key: "cognitive",
    label: "Cognitive Support",
    icon: Navigation,
    description: "Clear navigation, simple layout, helpful staff",
  },
]

export default function AddReviewPage() {
  const searchParams = useSearchParams()
  const placeId = searchParams.get("place")

  const [formData, setFormData] = useState({
    placeName: "",
    placeType: "",
    address: "",
    phone: "",
    website: "",
    overallRating: 0,
    accessibilityRatings: {
      mobility: 0,
      vision: 0,
      hearing: 0,
      cognitive: 0,
    },
    features: [] as string[],
    reviewText: "",
    wouldRecommend: "",
    visitDate: "",
    isNewPlace: !placeId,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFeatureToggle = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }))
  }

  const handleAccessibilityRating = (category: string, rating: number) => {
    setFormData((prev) => ({
      ...prev,
      accessibilityRatings: {
        ...prev.accessibilityRatings,
        [category]: rating,
      },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Save to localStorage (mock database)
    const reviews = JSON.parse(localStorage.getItem("accesschain-reviews") || "[]")
    const newReview = {
      id: Date.now(),
      ...formData,
      submittedAt: new Date().toISOString(),
    }
    reviews.push(newReview)
    localStorage.setItem("accesschain-reviews", JSON.stringify(reviews))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100">
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
                <Link href="/add-review" className="text-blue-600 font-medium">
                  Add Review
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-sky-600 font-medium">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Review Submitted!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for sharing your accessibility experience. Your review helps make the world more accessible for
              everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="rounded-full btn-hover-lift">
                <Link href="/places">Browse Places</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full btn-hover-lift bg-transparent">
                <Link href="/add-review">Add Another Review</Link>
              </Button>
            </div>
          </div>
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
              <Link href="/add-review" className="text-blue-600 font-medium">
                Add Review
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-sky-600 font-medium">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Share Your Accessibility Experience</h1>
          <p className="text-lg text-gray-600">Help others by reviewing the accessibility of public places</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Place Information */}
          <Card className="border-0 border-sky-100 shadow-soft rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-t-2xl">
              <CardTitle className="flex items-center space-x-2 text-white">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span>Place Information</span>
              </CardTitle>
              <CardDescription>
                {formData.isNewPlace ? "Add a new place to review" : "Review an existing place"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Checkbox
                  id="isNewPlace"
                  checked={formData.isNewPlace}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isNewPlace: !!checked }))}
                />
                <Label htmlFor="isNewPlace">This is a new place not yet on AccessChain</Label>
              </div>

              {formData.isNewPlace && (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="placeName">Place Name *</Label>
                      <Input
                        id="placeName"
                        value={formData.placeName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, placeName: e.target.value }))}
                        placeholder="e.g., Central Library"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="placeType">Place Type *</Label>
                      <Select
                        value={formData.placeType}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, placeType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select place type" />
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
                  </div>

                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                      placeholder="123 Main St, City, State"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
                        placeholder="www.example.com"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <Label htmlFor="visitDate">When did you visit?</Label>
                <Input
                  id="visitDate"
                  type="date"
                  value={formData.visitDate}
                  onChange={(e) => setFormData((prev) => ({ ...prev, visitDate: e.target.value }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Overall Rating */}
          <Card className="border-0 border-sky-100 shadow-soft rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-t-2xl">
              <CardTitle className="flex items-center space-x-2 text-white">
                <Star className="h-6 w-6 text-blue-600" />
                <span>Overall Rating</span>
              </CardTitle>
              <CardDescription>How would you rate your overall experience?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, overallRating: rating }))}
                    className="p-2 rounded-full hover:bg-sky-50 transition-colors"
                  >
                    <Star
                      className={`h-10 w-10 transition-colors ${rating <= formData.overallRating ? "fill-yellow-400 text-yellow-400" : "text-slate-300 hover:text-sky-300"}`}
                    />
                  </button>
                ))}
                <span className="ml-4 text-lg font-medium">
                  {formData.overallRating > 0 &&
                    `${formData.overallRating} star${formData.overallRating !== 1 ? "s" : ""}`}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Accessibility Ratings */}
          <Card className="border-0 border-sky-100 shadow-soft rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-t-2xl">
              <CardTitle className="flex items-center space-x-2 text-white">
                <Wheelchair className="h-6 w-6 text-blue-600" />
                <span>Accessibility Ratings</span>
              </CardTitle>
              <CardDescription>Rate different aspects of accessibility (1-5 stars)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {accessibilityCategories.map((category) => (
                <div key={category.key}>
                  <div className="flex items-center space-x-2 mb-2">
                    <category.icon className="h-5 w-5 text-blue-600" />
                    <Label className="text-base font-medium">{category.label}</Label>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => handleAccessibilityRating(category.key, rating)}
                        className="p-1 hover:bg-sky-50 rounded-full transition-colors"
                      >
                        <Star
                          className={`h-6 w-6 ${rating <= formData.accessibilityRatings[category.key as keyof typeof formData.accessibilityRatings] ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-sky-300"}`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {formData.accessibilityRatings[category.key as keyof typeof formData.accessibilityRatings] > 0 &&
                        `${formData.accessibilityRatings[category.key as keyof typeof formData.accessibilityRatings]} star${formData.accessibilityRatings[category.key as keyof typeof formData.accessibilityRatings] !== 1 ? "s" : ""}`}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Accessibility Features */}
          <Card className="border-0 border-sky-100 shadow-soft rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-t-2xl">
              <CardTitle className="flex items-center space-x-2 text-white">
                <Plus className="h-6 w-6 text-blue-600" />
                <span>Accessibility Features</span>
              </CardTitle>
              <CardDescription>Select all accessibility features available at this place</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-3">
                {accessibilityFeatures.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      id={feature}
                      checked={formData.features.includes(feature)}
                      onCheckedChange={() => handleFeatureToggle(feature)}
                    />
                    <Label htmlFor={feature} className="text-sm">
                      {feature}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Written Review */}
          <Card className="border-0 border-sky-100 shadow-soft rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-t-2xl">
              <CardTitle className="flex items-center space-x-2 text-white">Your Experience</CardTitle>
              <CardDescription>Share details about your visit and accessibility experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="reviewText">Review *</Label>
                <Textarea
                  id="reviewText"
                  value={formData.reviewText}
                  onChange={(e) => setFormData((prev) => ({ ...prev, reviewText: e.target.value }))}
                  placeholder="Describe your experience with accessibility at this place. What worked well? What could be improved? Be specific to help others..."
                  rows={6}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Recommendation */}
          <Card className="border-0 border-sky-100 shadow-soft rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-t-2xl">
              <CardTitle className="flex items-center space-x-2 text-white">Recommendation</CardTitle>
              <CardDescription>Would you recommend this place to others with accessibility needs?</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={formData.wouldRecommend}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, wouldRecommend: value }))}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="recommend-yes" />
                  <Label htmlFor="recommend-yes">Yes, I would recommend this place</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="maybe" id="recommend-maybe" />
                  <Label htmlFor="recommend-maybe">Maybe, with some reservations</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="recommend-no" />
                  <Label htmlFor="recommend-no">No, I would not recommend this place</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || !formData.reviewText || formData.overallRating === 0}
              className="px-12 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-full btn-hover-lift text-lg"
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
