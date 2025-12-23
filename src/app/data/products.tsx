import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  {
    id: 1,
    name: 'डिज़ाइनर टी-शर्ट',
    price: 599,
    image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzY2MzY1MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: '100% कॉटन से बनी आरामदायक टी-शर्ट। सभी अवसरों के लिए सही।',
    category: 'कपड़े',
  },
  {
    id: 2,
    name: 'लैपटॉप - प्रो सीरीज',
    price: 54999,
    image: 'https://images.unsplash.com/photo-1729496293008-0794382070c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGxhcHRvcHxlbnwxfHx8fDE3NjY0NTA5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'शक्तिशाली प्रोसेसर और लंबी बैटरी लाइफ के साथ प्रोफेशनल लैपटॉप।',
    category: 'इलेक्ट्रॉनिक्स',
  },
  {
    id: 3,
    name: 'स्मार्टफोन X1',
    price: 24999,
    image: 'https://images.unsplash.com/photo-1741061963569-9d0ef54d10d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlfGVufDF8fHx8MTc2NjQwNzM4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'अत्याधुनिक कैमरा और तेज़ प्रोसेसर के साथ स्मार्टफोन।',
    category: 'इलेक्ट्रॉनिक्स',
  },
  {
    id: 4,
    name: 'वायरलेस हेडफ़ोन',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1572119244337-bcb4aae995af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwYXVkaW98ZW58MXx8fHwxNzY2NDMzODI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'नॉइज़ कैंसलिंग तकनीक के साथ प्रीमियम साउंड क्वालिटी।',
    category: 'एक्सेसरीज़',
  },
  {
    id: 5,
    name: 'स्पोर्ट्स शूज़',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1650320079970-b4ee8f0dae33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9lcyUyMHNuZWFrZXJzfGVufDF8fHx8MTc2NjQ2OTUzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'आरामदायक और स्टाइलिश स्पोर्ट्स शूज़ सभी खेलों के लिए।',
    category: 'जूते',
  },
  {
    id: 6,
    name: 'स्मार्ट वॉच',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1762513461072-5008c7f6511d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc2NjQ1ODg1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'फिटनेस ट्रैकिंग और स्मार्ट नोटिफिकेशन के साथ वॉच।',
    category: 'एक्सेसरीज़',
  },
  {
    id: 7,
    name: 'कैज़ुअल जैकेट',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzY2MzY1MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'स्टाइलिश और गर्म जैकेट सर्दियों के लिए परफेक्ट।',
    category: 'कपड़े',
  },
  {
    id: 8,
    name: 'गेमिंग माउस',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1729496293008-0794382070c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGxhcHRvcHxlbnwxfHx8fDE3NjY0NTA5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'RGB लाइटिंग और प्रिसाइज़ सेंसर के साथ गेमिंग माउस।',
    category: 'इलेक्ट्रॉनिक्स',
  },
];

export const categories = ['सभी', 'कपड़े', 'इलेक्ट्रॉनिक्स', 'एक्सेसरीज़', 'जूते'];
