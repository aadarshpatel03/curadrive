#!/bin/bash

# Create police images directory if it doesn't exist
mkdir -p public/police

# Download and rename sample Polish police station images
# Note: In a production environment, you would need proper image licenses and permissions

# Modern police headquarters
curl -o public/police/station1.jpg "https://example.com/polish-police-1.jpg"

# Historic police station
curl -o public/police/station2.jpg "https://example.com/polish-police-2.jpg"

# Police station in Gdansk
curl -o public/police/station3.jpg "https://example.com/polish-police-3.jpg"

# Police headquarters in Poznan
curl -o public/police/station4.jpg "https://example.com/polish-police-4.jpg"

# Police station in Wroclaw
curl -o public/police/station5.jpg "https://example.com/polish-police-5.jpg"

# District police station in Lodz
curl -o public/police/station6.jpg "https://example.com/polish-police-6.jpg"

# Police station in Szczecin
curl -o public/police/station7.jpg "https://example.com/polish-police-7.jpg"

# Police headquarters in Katowice
curl -o public/police/station8.jpg "https://example.com/polish-police-8.jpg"

# Optimize images (requires imagemagick)
for img in public/police/*.jpg; do
  convert "$img" -resize "800x600>" -quality 85 "$img"
done

echo "Police station images have been downloaded and optimized." 