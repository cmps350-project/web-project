const artworks = [
  {
    id: 8,
    title: "Jelly Fish",
    artist: "René Magritte",
    category: "Surrealism",
    medium: "Oil on canvas",
    year: 1964,
    price: 25000000,
    quantity: 8,
    description: "A man in a bowler hat with an apple obscuring his face, creating a sense of mystery and identity exploration.",
    images: {
      url: "https://i.postimg.cc/9XTrfgY7/jellyfish.jpg",
      alternate: "https://i.postimg.cc/8ch5nszH/jellyfish-alternate.png",
    }
  },
  {
    id: 9,
    title: "Octopus",
    artist: "René Magritte",
    category: "Surrealism",
    medium: "Oil on canvas",
    year: 1964,
    price: 25000000,
    quantity: 8,
    description: "A man in a bowler hat with an apple obscuring his face, creating a sense of mystery and identity exploration.",
    images: {
      url: "https://i.postimg.cc/JzThFfM9/octopus.jpg",
      alternate: "https://i.postimg.cc/j2rqNK4J/octopus-alternate.png",
    }
  },
  {
    id: 10,
    title: "Star Fish",
    artist: "René Magritte",
    category: "Surrealism",
    medium: "Oil on canvas",
    year: 1964,
    price: 25000000,
    quantity: 8,
    description: "A man in a bowler hat with an apple obscuring his face, creating a sense of mystery and identity exploration.",
    images: {
      url: "https://i.postimg.cc/zXFvCLMD/starfish.jpg",
      alternate: "https://i.postimg.cc/G2DhH9GC/starfish-alternate.png",
    }
  },
  {
    id: 11,
    title: "Sea Shell",
    artist: "René Magritte",
    category: "Surrealism",
    medium: "Oil on canvas",
    year: 1964,
    price: 25000000,
    quantity: 8,
    description: "A man in a bowler hat with an apple obscuring his face, creating a sense of mystery and identity exploration.",
    images: {
      url: "https://i.postimg.cc/kgM4fJ3Q/shell.jpg",
      alternate: "https://i.postimg.cc/qqXJxY1D/shell-alternate.png",
    }
  },
    {
      id: 1,
      title: "The Starry Night",
      artist: "Vincent van Gogh",
      category: "Post-Impressionism",
      medium: "Oil on canvas",
      year: 1889,
      price: 1000000000,
      quantity: 8,
      description: "A swirling post-impressionist landscape depicting a vibrant night sky with crescent moon and large stars, overlooking a village with church steeple.",
      images: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        alternate: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      }
    },
    {
      id: 2,
      title: "The Persistence of Memory",
      artist: "Salvador Dalí",
      category: "Surrealism",
      medium: "Oil painting",
      year: 1931,
      price: 20000000,
      quantity: 8,
      description: "A surrealist masterpiece featuring melting clocks draped over barren tree branches on a desolate landscape.",
      images: {
        url: "https://www.reproduction-gallery.com/catalogue/uploads/1522662218_large-image_dali-persistence-of-memory-lg.jpg",
        alternate: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      }
    },
    // Added 6 more artworks
    {
      id: 3,
      title: "Guernica",
      artist: "Pablo Picasso",
      category: "Cubism",
      medium: "Oil on canvas",
      year: 1937,
      price: 400000000,
      quantity: 8,
      description: "A large, powerful anti-war piece in greyscale cubist style, portraying the chaos and suffering of a bombed city.",
      images: {
        url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtd35hlaQS94eu8MfZaOh2BpnmPPVQ4H7kzfz1kNoNW3ZfK3Eua0d-Yhbt_CfOfRAppyoD2mIQPSEr-FFVvCSya51wZPsmZRK-duXgbumZVsLeXSoV0-76Lti8oHtjkZfy17GZRJ_wTdLm/s1600/guernica.jpg",
        alternate: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      }
    },
    {
      id: 4,
      title: "Water Lilies",
      artist: "Claude Monet",
      category: "Impressionism",
      medium: "Oil on canvas",
      year: 1899,
      price: 30000000,
      quantity: 8,
      description: "An impressionist painting capturing a peaceful garden pond with colorful water lilies and a Japanese bridge.",
      images: {
        url: "https://www.artic.edu/iiif/2/3c27b499-af56-f0d5-93b5-a7f2f1ad5813/full/843,/0/default.jpg",
        alternate: "https://i.pinimg.com/564x/e3/f0/74/e3f074e2b8571b3801a10049a378d309.jpg",
      }
    },
    {
      id: 5,
      title: "The Scream",
      artist: "Edvard Munch",
      category: "Expressionism",
      medium: "Tempera on cardboard",
      year: 1893,
      price: 120000000,
      quantity: 8,
      description: "An expressionist work featuring a lone figure with an anguished face and open mouth, standing on a bridge with a swirling blood-red sky.",
      images: {
        url: "https://i.ebayimg.com/images/g/I1kAAOSwO4pj8kvW/s-l1200.webp",
        alternate: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      }
    },

    {
      id: 6,
      title: "The Great Wave off Kanagawa",
      artist: "Hokusai",
      category: "Ukiyo-e",
      medium: "Woodblock print",
      year: 1830,
      price: 500000, 
      quantity: 8,
      description: "A Japanese woodblock print depicting a massive wave threatening boats near Mount Fuji, known for its dynamic composition and bold use of color.",
      images: {
        url: "https://images.metmuseum.org/CRDImages/as/original/DP130155.jpg",
        alternate: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      }

    },
    {
      id: 7,
      title: "The Son of Man",
      artist: "René Magritte",
      category: "Surrealism",
      medium: "Oil on canvas",
      year: 1964,
      price: 25000000,
      quantity: 8,
      description: "A man in a bowler hat with an apple obscuring his face, creating a sense of mystery and identity exploration.",
      images: {
        url: "https://www.singulart.com/blog/wp-content/uploads/2024/03/The-Son-of-Man.jpg",
        alternate: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      }
    },
    
  ];
  


export function getArtworks(){
    return artworks
}

export function getArtworkById(id){
  const artworkIndex = artworks.findIndex((artwork) => artwork.id == id)
  return artworks[artworkIndex]
}