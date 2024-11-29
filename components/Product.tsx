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
      rating: 3.5,
      image: icon,
      colors: ["purple", "blue", "orange"],
    },
    {
      id: 2,
      name: "Cultural Attire",
      price: "$199.99",
      rating: 2.8,
      image: icon,
      colors: ["teal", "gold", "red"],
    },
    {
      id: 3,
      name: "Ceremonial Robe",
      price: "$179.99",
      rating: 3.7,
      image: icon,
      colors: ["orange", "green", "blue"],
    },
    {
      id: 4,
      name: "Ceremonial Robe",
      price: "$179.99",
      rating: 5.7,
      image: icon,
      colors: ["orange", "green", "blue"],
    },
    {
      id: 5,
      name: "Ceremonial Robe",
      price: "$179.99",
      rating: 4.7,
      image: icon,
      colors: ["orange", "green", "blue"],
    },
    {
      id: 6,
      name: "Ceremonial Robe",
      price: "$179.99",
      rating: 1.7,
      image: icon,
      colors: ["orange", "green", "blue"],
    },
    {
      id: 7,
      name: "Ceremonial Robe",
      price: "$179.99",
      rating: 5.7,
      image: icon,
      colors: ["orange", "green", "blue"],
    },
    {
      id: 8,
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
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-muted text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="gap-1 flex">
                        
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