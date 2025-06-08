// Array of Polish police station images
const policeImages = [
  '/police/station1.jpg', // Modern police headquarters in Warsaw
  '/police/station2.jpg', // Historic police station in Krakow
  '/police/station3.jpg', // Police station in Gdansk
  '/police/station4.jpg', // Police headquarters in Poznan
  '/police/station5.jpg', // Police station in Wroclaw
  '/police/station6.jpg', // District police station in Lodz
  '/police/station7.jpg', // Police station in Szczecin
  '/police/station8.jpg', // Police headquarters in Katowice
];

// Get a random police station image
export function getRandomPoliceImage(): string {
  const randomIndex = Math.floor(Math.random() * policeImages.length);
  return policeImages[randomIndex] || '/placeholder.jpg';
}
