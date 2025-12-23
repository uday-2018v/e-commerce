import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useCart } from '../contexts/CartContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleRemove = (id: number, name: string) => {
    removeFromCart(id);
    toast.success(`${name} कार्ट से हटाया गया`);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-3xl mb-4">आपका कार्ट खाली है</h2>
          <p className="text-gray-600 mb-6">अपने पसंदीदा उत्पाद जोड़ने के लिए शॉपिंग शुरू करें</p>
          <Button onClick={() => navigate('/products')}>शॉपिंग शुरू करें</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl mb-8">शॉपिंग कार्ट</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      <span className="text-xl font-bold text-blue-600">
                        ₹{item.price.toLocaleString('hi-IN')}
                      </span>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemove(item.id, item.name)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                      <div className="flex items-center border rounded-lg">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-4">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>ऑर्डर सारांश</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.name} × {item.quantity}
                      </span>
                      <span>₹{(item.price * item.quantity).toLocaleString('hi-IN')}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">उप-योग</span>
                    <span>₹{getCartTotal().toLocaleString('hi-IN')}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">डिलीवरी शुल्क</span>
                    <span className="text-green-600">मुफ्त</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-4 border-t">
                    <span>कुल राशि</span>
                    <span className="text-blue-600">₹{getCartTotal().toLocaleString('hi-IN')}</span>
                  </div>
                </div>
                <Button className="w-full" size="lg" onClick={() => navigate('/checkout')}>
                  चेकआउट के लिए आगे बढ़ें
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => navigate('/products')}
                >
                  शॉपिंग जारी रखें
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
