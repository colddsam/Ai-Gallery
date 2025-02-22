import Image from "next/image"
import Link from "next/link"

const galleryItems = [
  { id: 1, title: "Neon City", price: 9.99 },
  { id: 2, title: "Sakura Dreams", price: 12.99 },
  { id: 3, title: "Cyber Samurai", price: 14.99 },
  { id: 4, title: "Mecha Uprising", price: 11.99 },
  { id: 5, title: "Ethereal Garden", price: 10.99 },
  { id: 6, title: "Astro Idol", price: 13.99 },
]

export default function Gallery() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">AI Anime Wallpaper Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image src={`/placeholder.png?text=${item.title}`} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-4 bg-black">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
              <Link
                href={`/product/${item.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

