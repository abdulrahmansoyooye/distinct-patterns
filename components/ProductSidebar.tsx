'use client'

import * as React from 'react'
import { Filter } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const categories = [
  'Ready Made',
  'Fabric',
  'Sneakers',
  'T-Shirt',
  'Shirt',
  'Pant',
  'Sports',
  'Short Pant'
]

const colors = [
  { name: 'Blue', hex: '#3B82F6' },
  { name: 'Red', hex: '#EF4444' },
  { name: 'Pink', hex: '#EC4899' },
  { name: 'Green', hex: '#10B981' },
  { name: 'Orange', hex: '#F97316' },
  { name: 'Light Blue', hex: '#0EA5E9' }
]

export default function ProductFilterSidebar() {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])
  const [selectedColors, setSelectedColors] = React.useState<string[]>([])
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    )
  }

  const FilterContent = React.forwardRef<HTMLDivElement>((props, ref) => (
    <div ref={ref} className="space-y-6" {...props}>
      <div>
        <h3 className="text-lg font-semibold mb-4">Filter by category</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category} className="flex items-center">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <label htmlFor={category} className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Choose Color</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map(color => (
            <button
              key={color.name}
              className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                selectedColors.includes(color.name) ? 'ring-2 ring-black dark:ring-white' : ''
              }`}
              style={{ backgroundColor: color.hex }}
              onClick={() => toggleColor(color.name)}
              aria-label={`Select ${color.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  ))

  FilterContent.displayName = 'FilterContent'

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden [@media(min-width:950px)]:block w-64 p-4">
        <FilterContent />
      </div>

      {/* Drawer for smaller screens */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-4 right-4 h-14 w-14 rounded-full [@media(min-width:950px)]:hidden"
          >
            <Filter className="h-6 w-6" />
            <span className="sr-only">Open filters</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <FilterContent />
        </SheetContent>
      </Sheet>
    </>
  )
}