import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { products } from '../data/products';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

export const HomePage: React.FC = () => {
  const { addToCart } = useCart();

  const featuredProducts = products.slice(0, 4);
  const trendingProducts = products.slice(4, 8);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} कार्ट में जोड़ा गया!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl mb-4">भारत का सबसे भरोसेमंद ऑनलाइन शॉपिंग प्लेटफॉर्म</h1>
            <p className="text-xl mb-8">हज़ारों उत्पादों में से चुनें, सुरक्षित भुगतान, और तेज़ डिलीवरी</p>
            <Link to="/products">
              <Button size="lg" variant="secondary" className="gap-2">
                अभी खरीदें <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white border-0">
            <CardHeader>
              <Tag className="h-8 w-8 mb-2" />
              <CardTitle>विशेष छूट</CardTitle>
              <CardDescription className="text-white/90">50% तक की छूट</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-gradient-to-br from-green-500 to-teal-500 text-white border-0">
            <CardHeader>
              <Star className="h-8 w-8 mb-2" />
              <CardTitle>नए उत्पाद</CardTitle>
              <CardDescription className="text-white/90">हर दिन नए आइटम</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0">
            <CardHeader>
              <TrendingUp className="h-8 w-8 mb-2" />
              <CardTitle>ट्रेंडिंग</CardTitle>
              <CardDescription className="text-white/90">सबसे ज़्यादा बिकने वाले</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl">नए उत्पाद</h2>
          <Link to="/products">
            <Button variant="outline">सभी देखें</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition">
              <CardContent className="p-4">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">₹{product.price.toLocaleString('hi-IN')}</span>
                  <Button size="sm" onClick={() => handleAddToCart(product)}>
                    कार्ट में डालें
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-8">ट्रेंडिंग उत्पाद</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">₹{product.price.toLocaleString('hi-IN')}</span>
                    <Link to={`/product/${product.id}`}>
                      <Button size="sm" variant="outline">
                        देखें
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
