import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
}

export function ProductCard({ image, name, category }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-4">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-serif text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{category}</p>
      </div>
    </div>
  );
}