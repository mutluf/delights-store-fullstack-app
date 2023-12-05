type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "Pure Rose Bliss Delight",
      desc: "Our Pure Rose Delight offers a simple yet elegant taste experience. Infused with the unique aroma of fresh roses, each bite captures the essence of simplicity and sophistication. Indulge in the pure delight of this traditional Turkish treat, presented with a touch of natural elegance.",
      img: "/temporary/p1.jpg",
      price: 24.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Golden Bliss Delight",
      desc:  "Our Pure Yellow Delight presents a special taste reflecting the power of simplicity. Each bite stands out with its pure flavor, echoing the warm hue of the sun, providing a simple yet captivating experience. This unique version of the traditional Turkish delight draws attention with its straightforward elegance and natural charm. Simple and beautiful, this delight is a perfect choice to make any moment special.",
      img: "/temporary/p2.jpg",
      price: 29.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Orange Bliss Delight",
      desc: "Our Simple Orange Delight offers an elegant taste experience. Each piece is enriched with the pure flavor of oranges, providing a simple and captivating sensation. This special version of the traditional Turkish delight stands out with its natural simplicity. The freshness of orange energy is felt in every bite, making it a perfect choice to sweeten any moment.",
      img: "/temporary/p3.jpg",
      price: 24.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Minty Fresh Delight",
      desc: "Indulge in the refreshing allure of our Minty Fresh Delight. Each piece is infused with the invigorating essence of mint, creating a delightful and revitalizing experience. This special rendition of traditional Turkish delight combines the sweetness of lokum with the cool burst of mint, making it a perfect treat to invigorate your senses and elevate your moments.",
      img: "/temporary/p4.jpg",
      price: 26.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Pomegranate Pistachio Delight",
      desc: "Savor the exquisite blend of flavors with our Pomegranate Pistachio Delight. Each piece combines the sweetness of pomegranate with the richness of Antep pistachios, offering a harmonious and indulgent taste experience. Elevate your senses with this special twist on traditional Turkish delight, where the fruity burst of pomegranate meets the nutty perfection of Antep pistachios, creating a treat that is both luxurious and delightful.",
      img: "/temporary/p5.jpg",
      price: 29.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Assorted Delightful Medley",
      desc: "Explore a world of flavors with our Assorted Delightful Medley. This collection features a variety of Turkish delights, each with its own unique taste and texture. From traditional classics to modern twists, this assortment promises a delightful journey for your taste buds.",
      img: "/temporary/p6.jpg",
      price: 24.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 7,
      title: "Wholesome Delight Sampler",
      desc: " Experience the wholesome goodness of our Delight Sampler. This assortment combines classic Turkish delight flavors with a touch of innovation, providing a delightful sampling of treats that will satisfy any sweet tooth. Perfect for sharing or savoring on your own.",
      img: "/temporary/p7.jpg",
      price: 28.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 8,
      title: "Sweet Surprise Assortment",
      desc: "Unwrap the Sweet Surprise Assortment and discover a world of unexpected delights. This mix of Turkish delights offers a delightful range of flavors, from fruity to nutty, creating a sweet adventure for those seeking a variety of taste experiences.",
      img: "/temporary/p8.jpg",
      price: 32.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "Gourmet Delight Selection",
      desc: "Elevate your palate with our Gourmet Delight Selection. This assortment showcases the epitome of Turkish delight craftsmanship, featuring a curated collection of premium flavors and textures. Treat yourself or share this exquisite selection for a truly refined experience.",
      img: "/temporary/p9.jpg",
      price: 29.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
    {
        id: 10,
        title: "Flavor Fusion Harmony",
        desc: "Immerse yourself in the symphony of flavors with our Flavor Fusion Harmony. This diverse selection of Turkish delights brings together a perfect blend of tastes, from the timeless classics to innovative combinations. Indulge in a delightful experience that caters to every craving.",
        img: "/temporary/p10.jpg",
        price: 29.9,
        options: [
            {
              title: "250 g",
              additionalPrice: 0,
            },
            {
              title: "500 g",
              additionalPrice: 4,
            },
            {
              title: "1000 g",
              additionalPrice: 6,
            },
          ],
      },
  ];
  
  
  
  
  export const pizzas: Products = [
    {
      id: 1,
      title: "Sicilian",
      desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
      img: "/temporary/p1.jpg",
      price: 24.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Mediterranean Delight",
      desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
      img: "/temporary/p8.jpg",
      price: 32.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Bella Napoli",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p3.jpg",
      price: 26.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Pesto Primavera",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p10.png",
      price: 28.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Veggie Supreme",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p11.png",
      price: 24.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Four Cheese Fantasy",
      desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
      img: "/temporary/p12.png",
      price: 22.9,
      options: [
        {
          title: "250 g",
          additionalPrice: 0,
        },
        {
          title: "500 g",
          additionalPrice: 4,
        },
        {
          title: "1000 g",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  export const singleProduct: Product = {
    id: 1,
    title: "Pure Rose Bliss Delight",
    desc: "Our Pure Rose Delight offers a simple yet elegant taste experience. Infused with the unique aroma of fresh roses, each bite captures the essence of simplicity and sophistication. Indulge in the pure delight of this traditional Turkish treat, presented with a touch of natural elegance.",
    img: "/temporary/p1.jpg",
    price: 24.9,
    options: [
      {
        title: "250 g",
        additionalPrice: 0,
      },
      {
        title: "500 g",
        additionalPrice: 4,
      },
      {
        title: "1000 g",
        additionalPrice: 6,
      },
    ],
  };
  
  
  type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const menu: Menu = [
    {
      id: 1,
      slug: "plains",
      title: "Plain Turkish Delight",
      desc: "Unwrap the essence of tradition in every bite, perfect for those who appreciate the classic delight of authentic taste.",
      img: "/temporary/m1.jpg",
      color: "white",
    },
    {
      id: 2,
      slug: "mixed",
      title: "Mixed Turkish Delight",
      desc: "Experience the delight of our Mixed Turkish Delight a harmonious blend of traditional flavors in every bite.",
      img: "/temporary/m2.jpg",
      color: "white",
    },
    {
      id: 3,
      slug: "gifts",
      title: "Gift Turkish Delight",
      desc: "Elevate your moments with our exquisite Gift Turkish Delight. A perfect blend of tradition and taste, thoughtfully packaged for a delightful gifting experience.",
      img: "/temporary/m3.jpg",
      color: "white",
    },
  ];