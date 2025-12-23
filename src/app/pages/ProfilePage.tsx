                 import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Package, MapPin, CreditCard, Settings } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useAuth } from '../contexts/AuthContext';

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl mb-4">कृपया लॉगिन करें</h2>
            <p className="text-gray-600 mb-6">अपनी प्रोफ़ाइल देखने के लिए लॉगिन करें</p>
            <Button onClick={() => navigate('/login')}>लॉगिन पेज पर जाएं</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const orderHistory = [
    {
      id: 'ORD-2024-001',
      date: '20 दिसंबर, 2024',
      status: 'डिलीवर हो गया',
      total: 3499,
      items: 2,
    },
    {
      id: 'ORD-2024-002',
      date: '15 दिसंबर, 2024',
      status: 'ट्रांजिट में',
      total: 24999,
      items: 1,
    },
    {
      id: 'ORD-2024-003',
      date: '10 दिसंबर, 2024',
      status: 'प्रोसेसिंग',
      total: 2999,
      items: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl mb-8">मेरा खाता</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  प्रोफ़ाइल जानकारी
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">नाम</p>
                  <p className="font-semibold">{user.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">ईमेल</p>
                  <p className="font-semibold">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">फ़ोन</p>
                  <p className="font-semibold">{user.phone}</p>
                </div>
                <Button className="w-full" variant="outline" onClick={() => navigate('/settings')}>
                  <Settings className="h-4 w-4 mr-2" />
                  प्रोफ़ाइल एडिट करें
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  पते
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">कोई पता सहेजा नहीं गया</p>
                <Button variant="outline" className="w-full">
                  नया पता जोड़ें
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  भुगतान विधियां
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">कोई कार्ड सहेजा नहीं गया</p>
                <Button variant="outline" className="w-full">
                  कार्ड जोड़ें
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Order History */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  ऑर्डर हिस्ट्री
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <Card key={order.id} className="border">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <p className="font-semibold">{order.id}</p>
                            <p className="text-sm text-gray-600">{order.date}</p>
                            <p className="text-sm">
                              <span className="text-gray-600">आइटम:</span> {order.items}
                            </p>
                          </div>
                          <div className="text-right space-y-2">
                            <p className="text-xl font-bold text-blue-600">
                              ₹{order.total.toLocaleString('hi-IN')}
                            </p>
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs ${
                                order.status === 'डिलीवर हो गया'
                                  ? 'bg-green-100 text-green-800'
                                  : order.status === 'ट्रांजिट में'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            विवरण देखें
                          </Button>
                          {order.status === 'डिलीवर हो गया' && (
                            <Button size="sm" variant="outline" className="flex-1">
                              फिर से ऑर्डर करें
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
