// Array of demo police station images
const policeImages = [
  '/police/police1.jpg',
  '/police/police2.jpg',
  '/police/police3.jpg',
  '/police/police4.jpg',
  '/police/police5.jpg',
  '/police/police6.jpg',
  '/police/police7.jpg',
  '/police/police8.jpg',
];

export function getRandomPoliceImage(): string {
  const randomIndex = Math.floor(Math.random() * policeImages.length);
  return policeImages[randomIndex] || '/placeholder.jpg';
}
