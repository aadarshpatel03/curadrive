// Array of demo hospital images
const hospitalImages = [
  '/hospital/hospital1.jpg',
  '/hospital/hospital2.jpg',
  '/hospital/hospital3.jpg',
  '/hospital/hospital4.jpg',
  '/hospital/hospital5.jpg',
  '/hospital/hospital6.jpg',
  '/hospital/hospital7.jpg',
  '/hospital/hospital8.jpg',
];

export function getRandomHospitalImage(): string {
  const randomIndex = Math.floor(Math.random() * hospitalImages.length);
  // Fallback to placeholder if no image is found
  return hospitalImages[randomIndex] || '/placeholder.jpg';
}
