import { useEffect, useState } from "react"
import { ProductCard } from "~/components/ProductCard"
import type { Product } from "~/types/Product"

// TODO - #3 - Transfer HTML to Component --> for the loop section

export function Welcome() {
  const [productList, setProductList] = useState<Product[]>([
    {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image:
        "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg",
      rating: {
        rate: 0,
        count: 0,
      },
    },
  ])

  // on component/view creation
  useEffect(() => {
    console.log("Created - Hello world!")

    // Fetch
    async function fetchData() {
      const result = await fetch("https://fakestoreapi.com/products")
      const products: Product[] = await result.json()

      setProductList(products)
    }

    fetchData()
  }, []) // RUN ONCE

  // TODO - Sort list after price
  function sortProductListAfterPrice() {
    const sortedProductListAfterPrice: Product[] = []

    for (let i = 0; i < productList.length; i++) {}

    setProductList(sortedProductListAfterPrice)
  }

  return (
    <div>
      {/* Loop Through Products */}
      {productList.map(
        ({ id, title, price, description, category, image, rating }) => (
          <ProductCard
            key={id} // React needs the KEY
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        )
      )}
    </div>
  )
}
