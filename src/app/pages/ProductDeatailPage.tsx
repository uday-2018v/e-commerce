import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Heart,
  Star,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { products } from "../data/products";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../contexts/CartContext";
import { toast } from "sonner";

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">उत्पाद नहीं मिला</h2>
          <Button onClick={() => navigate("/products")}>
            वापस जाएं
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(
      `${quantity} ${product.name} कार्ट में जोड़ा गया!`,
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Button
          variant="outline"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          ← वापस जाएं
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h1 className="text-4xl mt-4 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  (245 समीक्षाएं)
                </span>
              </div>
              <p className="text-5xl font-bold text-blue-600 mb-6">
                ₹{product.price.toLocaleString("hi-IN")}
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">
                  उत्पाद विवरण
                </h3>
                <p className="text-gray-700 mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ मुफ्त डिलीवरी</li>
                  <li>✓ 7 दिन की वापसी नीति</li>
                  <li>✓ सुरक्षित भुगतान</li>
                  <li>✓ 1 साल की वारंटी</li>
                </ul>
              </CardContent>
            </Card>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="font-semibold">मात्रा:</span>
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setQuantity(Math.max(1, quantity - 1))
                  }
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-6">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                className="flex-1 gap-2"
                size="lg"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5" />
                कार्ट में डालें
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            <Button
              className="w-full"
              size="lg"
              variant="default"
              onClick={handleBuyNow}
            >
              अभी खरीदें
            </Button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl mb-8">संबंधित उत्पाद</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products
              .filter(
                (p) =>
                  p.category === product.category &&
                  p.id !== product.id,
              )
              .slice(0, 4)
              .map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="cursor-pointer hover:shadow-lg transition"
                  onClick={() =>
                    navigate(`/product/${relatedProduct.id}`)
                  }
                >
                  <CardContent className="p-4">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                      <ImageWithFallback
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">
                      {relatedProduct.name}
                    </h3>
                    <span className="text-lg font-bold text-blue-600">
                      ₹
                      {relatedProduct.price.toLocaleString(
                        "hi-IN",
                      )}
                    </span>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};