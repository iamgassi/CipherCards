type ProductCardProps = {
  title: string
  description: string
  imageUrl: string
}

export default function ProductCard({ title, description, imageUrl }: ProductCardProps) {
  return (
    <div
      className="
        max-w-sm w-full 
        bg-white rounded-xl 
        shadow-md hover:shadow-lg 
        transition-shadow duration-200 
        overflow-hidden 
        flex flex-col
      "
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-bold text-center mb-2">
          {title}
        </h2>

        <p className="text-sm text-gray-600 text-center">
          {description}
        </p>

        <button
          className="
            mt-4 
            w-full 
            bg-blue-600 text-white 
            font-medium 
            py-2 
            rounded-md 
            hover:bg-blue-700 
            transition-colors
          "
        >
          View More
        </button>
      </div>
    </div>
  )
}
