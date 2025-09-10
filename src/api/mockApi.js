const courts = [
  { id: 1, name: 'ملعب الأبطال', location: 'الرياض، حي الياسمين', price: 250, image: 'https://images.unsplash.com/photo-1526289093323-5c34e03c08b7?q=80&w=2070', featured: true, description: 'ملعب مجهز بأحدث أنواع العشب الصناعي وإضاءة ليلية ممتازة.', amenities: ['إضاءة ليلية', 'مواقف سيارات', 'مياه شرب'] },
  { id: 2, name: 'الملعب الملكي', location: 'جدة، حي السلامة', price: 300, image: 'https://images.unsplash.com/photo-1599333333986-f6d34515b3a4?q=80&w=1974', featured: true, description: 'يتميز بمساحته الواسعة ومرافقه المتكاملة، مثالي للبطولات والمباريات الكبيرة.', amenities: ['مدرجات', 'غرف تبديل ملابس', 'إضاءة ليلية'] },
  { id: 3, name: 'واحة الدمام', location: 'الدمام، حي الشاطئ', price: 220, image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935', featured: true, description: 'ملعب هادئ ومناسب للمباريات الودية والتدريبات.', amenities: ['مواقف سيارات', 'مياه شرب'] },
  { id: 4, name: 'ملعب النسور', location: 'الرياض، حي النخيل', price: 280, image: 'https://images.unsplash.com/photo-1628891883912-4a4f5ca3d666?q=80&w=2070', featured: false, description: 'عشب طبيعي عالي الجودة يوفر تجربة لعب فريدة.', amenities: ['عشب طبيعي', 'إضاءة ليلية', 'غرف تبديل ملابس'] },
  { id: 5, name: 'ساحة التحدي', location: 'أبها، حي المروج', price: 180, image: 'https://images.unsplash.com/photo-1551958214-2d5e239a28a3?q=80&w=2070', featured: false, description: 'أفضل سعر في المنطقة، مثالي للمباريات السريعة.', amenities: ['مياه شرب'] },
];

// محاكاة استجابة الشبكة
const apiCall = (data) => new Promise(resolve => setTimeout(() => resolve(data), 500));

export const getAllCourts = () => apiCall(courts);
export const getFeaturedCourts = () => apiCall(courts.filter(c => c.featured));
export const getCourtById = (id) => apiCall(courts.find(c => c.id === parseInt(id)));