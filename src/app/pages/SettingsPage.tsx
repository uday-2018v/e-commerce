import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Bell, Globe, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl mb-4">कृपया लॉगिन करें</h2>
            <Button onClick={() => navigate('/login')}>लॉगिन पेज पर जाएं</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSave = () => {
    toast.success('सेटिंग्स सहेज दी गईं!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl mb-8">सेटिंग्स</h1>

        <div className="space-y-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                प्रोफ़ाइल सेटिंग्स
              </CardTitle>
              <CardDescription>अपनी प्रोफ़ाइल जानकारी अपडेट करें</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">पूरा नाम</Label>
                <Input id="name" defaultValue={user.name} />
              </div>
              <div>
                <Label htmlFor="email">ईमेल</Label>
                <Input id="email" type="email" defaultValue={user.email} />
              </div>
              <div>
                <Label htmlFor="phone">फ़ोन नंबर</Label>
                <Input id="phone" defaultValue={user.phone} />
              </div>
              <Button onClick={handleSave}>सहेजें</Button>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                सुरक्षा सेटिंग्स
              </CardTitle>
              <CardDescription>अपना पासवर्ड और सुरक्षा प्राथमिकताएं प्रबंधित करें</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="currentPassword">वर्तमान पासवर्ड</Label>
                <Input id="currentPassword" type="password" placeholder="••••••••" />
              </div>
              <div>
                <Label htmlFor="newPassword">नया पासवर्ड</Label>
                <Input id="newPassword" type="password" placeholder="••••••••" />
              </div>
              <div>
                <Label htmlFor="confirmPassword">नए पासवर्ड की पुष्टि करें</Label>
                <Input id="confirmPassword" type="password" placeholder="••••••••" />
              </div>
              <Button onClick={() => toast.success('पासवर्ड अपडेट किया गया!')}>
                पासवर्ड बदलें
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                नोटिफिकेशन सेटिंग्स
              </CardTitle>
              <CardDescription>अपनी नोटिफिकेशन प्राथमिकताएं चुनें</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">ईमेल नोटिफिकेशन</p>
                  <p className="text-sm text-gray-600">ऑर्डर अपडेट के लिए ईमेल प्राप्त करें</p>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, email: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">पुश नोटिफिकेशन</p>
                  <p className="text-sm text-gray-600">ब्राउज़र में पुश नोटिफिकेशन पाएं</p>
                </div>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SMS नोटिफिकेशन</p>
                  <p className="text-sm text-gray-600">महत्वपूर्ण अपडेट के लिए SMS प्राप्त करें</p>
                </div>
                <Switch
                  checked={notifications.sms}
                  onCheckedChange={(checked) => setNotifications({ ...notifications, sms: checked })}
                />
              </div>
              <Button onClick={handleSave}>सहेजें</Button>
            </CardContent>
          </Card>

          {/* Language & Region */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                भाषा और क्षेत्र
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="language">भाषा</Label>
                <select id="language" className="w-full p-2 border rounded-md">
                  <option value="hi">हिंदी</option>
                  <option value="en">English</option>
                  <option value="mr">मराठी</option>
                  <option value="ta">தமிழ்</option>
                </select>
              </div>
              <div>
                <Label htmlFor="currency">मुद्रा</Label>
                <select id="currency" className="w-full p-2 border rounded-md">
                  <option value="inr">भारतीय रुपया (₹)</option>
                  <option value="usd">US Dollar ($)</option>
                </select>
              </div>
              <Button onClick={handleSave}>सहेजें</Button>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                गोपनीयता
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">
                डेटा डाउनलोड करें
              </Button>
              <Button variant="destructive" className="w-full">
                खाता हटाएं
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
