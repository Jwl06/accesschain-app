"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShipWheelIcon as Wheelchair, Heart, Users, Eye, Ear, Navigation, Globe, Shield, Zap } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Users,
    title: "Community-Driven",
    description:
      "Built by and for people with disabilities and their allies, ensuring authentic experiences and insights.",
  },
  {
    icon: Shield,
    title: "Trusted Reviews",
    description: "Verified reviews from real users who understand accessibility needs and challenges firsthand.",
  },
  {
    icon: Globe,
    title: "Comprehensive Coverage",
    description: "From restaurants to libraries, malls to parks - we cover all types of public spaces.",
  },
  {
    icon: Zap,
    title: "Easy to Use",
    description: "Simple, accessible interface designed with universal design principles in mind.",
  },
]

const stats = [
  { number: "10,000+", label: "Places Reviewed" },
  { number: "25,000+", label: "Community Members" },
  { number: "50,000+", label: "Reviews Submitted" },
  { number: "95%", label: "User Satisfaction" },
]

const accessibilityTypes = [
  {
    icon: Wheelchair,
    title: "Mobility Access",
    description: "Wheelchair accessibility, ramps, elevators, wide doorways, and accessible parking spaces.",
  },
  {
    icon: Eye,
    title: "Vision Support",
    description:
      "Large print materials, Braille signage, good lighting, high contrast displays, and audio descriptions.",
  },
  {
    icon: Ear,
    title: "Hearing Support",
    description: "Sign language interpretation, hearing loops, visual alerts, and captioned content.",
  },
  {
    icon: Navigation,
    title: "Cognitive Support",
    description: "Clear navigation, simple layouts, helpful staff, and easy-to-understand information.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              <Link href="/about" className="text-sky-600 font-medium">
                About
              </Link>
            </div>
            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white">
              <Link href="/add-review">Share Review</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-hero relative">
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Building a More Accessible World
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AccessChain is a community-driven platform that empowers people to share and discover accessibility
              information about public places, making the world more inclusive for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To create a world where accessibility information is readily available, helping people with disabilities
              make informed decisions about where to go and what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white shadow-medium rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:shadow-strong transition-all duration-300">
                  <feature.icon className="h-10 w-10 text-sky-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-sky-100 to-sky-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Making a difference in communities worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Cover</h2>
            <p className="text-xl text-gray-600">Comprehensive accessibility information across multiple categories</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {accessibilityTypes.map((type, index) => (
              <Card
                key={index}
                className="border-sky-100 shadow-soft rounded-2xl hover:shadow-medium transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <type.icon className="h-8 w-8 text-blue-600" />
                    <span>{type.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Started */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Started</h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              AccessChain was born from a simple yet powerful idea: that everyone deserves to know what to expect when
              visiting public places. Too often, people with disabilities face uncertainty about whether a restaurant,
              library, or store will be accessible to them.
            </p>

            <p className="text-xl leading-relaxed mb-6">
              Our founders, who have lived experience with disability, recognized that while legal requirements exist
              for accessibility, the real-world experience can vary greatly. What's needed is honest, detailed
              information from people who understand these challenges firsthand.
            </p>

            <p className="text-xl leading-relaxed">
              Today, AccessChain has grown into a thriving community where people share their experiences, help others
              make informed decisions, and work together to create a more accessible world for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-sky-100 shadow-soft rounded-2xl hover:shadow-medium transition-all duration-300 text-center">
              <CardHeader>
                <CardTitle className="text-center">Authenticity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We believe in honest, real experiences shared by people who understand accessibility needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-100 shadow-soft rounded-2xl hover:shadow-medium transition-all duration-300 text-center">
              <CardHeader>
                <CardTitle className="text-center">Inclusivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Our platform welcomes all types of disabilities and accessibility needs, creating space for every
                  voice.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-100 shadow-soft rounded-2xl hover:shadow-medium transition-all duration-300 text-center">
              <CardHeader>
                <CardTitle className="text-center">Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  We empower people to make informed decisions and advocate for better accessibility in their
                  communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600 text-white relative">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8">
            Help us build a more accessible world by sharing your experiences and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-sky-500 hover:bg-sky-600 text-white">
              <Link href="/add-review">Share Your Experience</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sky-600 bg-transparent"
              asChild
            >
              <Link href="/places">Explore Places</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wheelchair className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">AccessChain</span>
              </div>
              <p className="text-gray-400">Making the world more accessible, one review at a time.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/places" className="hover:text-white">
                    Places
                  </Link>
                </li>
                <li>
                  <Link href="/add-review" className="hover:text-white">
                    Add Review
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
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
