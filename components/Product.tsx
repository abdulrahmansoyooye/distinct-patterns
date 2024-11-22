import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from 'lucide-react'
import Image from "next/image";
import icon from "@/public/Image.svg";

export default function Allproducts() {
  const products = [
    {
      id: 1,
      name: "Traditional Garment",
      price: "$149.99",
      rating: 4.5,
      image: icon,
      colors: ["purple", "blue", "orange"],
    },
    {
      id: 2,
      name: "Cultural Attire",
      price: "$199.99",
      rating: 4.8,
      image: icon,
      colors: ["teal", "gold", "red"],
    },
    {
      id: 3,
      name: "Ceremonial Robe",
      price: "$179.99",
      rating: 4.7,
      image: icon,
      colors: ["orange", "green", "blue"],
    },
    {
      id: 3,
      name: "Ceremonial Robe",
      price: "$179.99",
      rating: 4.7,
      image: icon,
      colors: ["orange", "green", "blue"],
    },
    {
      id: 3,
      name: "Ceremonial Robe",
      price: "$179.99",
      rating: 4.7,
      image: icon,
      colors: ["orange", "green", "blue"],
    },
    {
      id: 3,
      name: "Ceremonial Robe",
      price: "$179.99",
      rating: 4.7,
      image: icon,
      colors: ["orange", "green", "blue"],
    },
    {
      id: 3,
      name: "Ceremonial Robe",
      price: "$179.99",
      rating: 4.7,
      image: icon,
      colors: ["orange", "green", "blue"],
    },
    {
      id: 3,
      name: "Ceremonial Robe",
      price: "$179.99",
      rating: 4.7,
      image: icon,
      colors: ["orange", "green", "blue"],
    },
    // Add more products as needed
  ]

  return (
    <div className="min-h-screen m-auto container bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <h1 className="text-2xl font-bold">ALL PRODUCTS</h1>
        </div>
      </header>
      <div className="container px-4 py-6 md:px-6 lg:px-8">
        <div>
          {/* Product Grid */}
          <div className="">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden border-none">
                  <CardContent className="p-0">
                  <Image
                      src={product.image}
                      alt={product.name}
                      className="h-[300px] w-full object-cover"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-2 p-4">
                    <div className="flex w-full items-center justify-between">
                      <h3 className="font-semibold">{product.name}</h3>
                      <span className="text-sm">{product.price}</span>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-primary text-primary"
                                : "fill-muted text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex gap-1">
                        {product.colors.map((color) => (
                          <div
                            key={color}
                            className="h-4 w-4 rounded-full border"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                    
                  </CardFooter>
                  <Button className="w-full rounded-t-none p-6 ">Add to Cart</Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}