import Image from "next/image"

const products = [
  { id: 1, title: "Neon City", price: 9.99, description: "A vibrant cityscape pulsing with neon energy." },
  { id: 2, title: "Sakura Dreams", price: 12.99, description: "Serene cherry blossoms in a dreamy landscape." },
  {
    id: 3,
    title: "Cyber Samurai",
    price: 14.99,
    description: "A futuristic warrior blending tradition with technology.",
  },
  { id: 4, title: "Mecha Uprising", price: 11.99, description: "Giant robots engage in an epic battle." },
  { id: 5, title: "Ethereal Garden", price: 10.99, description: "A mystical garden filled with otherworldly flora." },
  { id: 6, title: "Astro Idol", price: 13.99, description: "A pop star performer in a cosmic concert setting." },
]

export default function Product({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    return <div className="h-screen mx-auto px-6 py-16 text-center">Product not found</div>
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <Image
            src={`/placeholder.png?text=${product.title}`}
            alt={product.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

