import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const featuredTokens = [
  {
    id: 1,
    title: "Shek token",
    creator: "Shek",
    price: "10 SOL",
    image: "/shek.jpg?height=300&width=400"  // Using placeholder since we can't use external images
  },
  {
    id: 2,
    title: "kash Token",
    creator: "Kash",
    price: "15 SOL",
    image: "/kash.jpg?height=300&width=400"
  },
  {
    id: 3,
    title: "Kirat Token",
    creator: "Harkirat",
    price: "12 SOL",
    image: "/harkirat.png?height=300&width=400"
  }
]

export default function FeaturedTokens() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-600">
          Featured Tokens
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTokens.map((token) => (
            <Card 
              key={token.id} 
              className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <Image
                    src={token.image}
                    alt={`Featured Token ${token.title}`}
                    width={400}
                    height={300}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10 -mt-20 p-6">
                <CardTitle className="mb-2 text-2xl font-bold text-white">
                  {token.title}
                </CardTitle>
                <p className="text-sm mb-4 bg-gray-800/80 text-gray-200 inline-block px-2 py-1 rounded-md">
                  By {token.creator}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-400 font-semibold">{token.price}</span>
                  <Button 
                    size="sm" 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/50"
                  >
                    View Token
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}