import React from 'react'
import ProductFilterSidebar from '@/components/ProductSidebar'
import Allproducts from '@/components/Product'
const Product = () => {
  return (
    <div className='p-10'>
      <div className="flex">
        <div className="">
          {/* side bar */}
        <ProductFilterSidebar/>
        </div>
        <div className="flex-1 justify-between m-auto">
          {/* Products */}
        <Allproducts/>
        </div>
        {/* Our best seller  */}
        {/* Footer */}
      </div>
    </div>
  )
}

export default Product