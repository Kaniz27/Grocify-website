import React from "react";

const About = () => {
  const categories = [
    {
      id: 1,
      title: "Fruits",
      description: "Fresh and organic fruits rich in vitamins.",
      image: "https://t3.ftcdn.net/jpg/09/89/95/60/360_F_989956090_CM6nOeY9W9IT1QzMgtkA2YyPQCdaOk1o.jpg",
      vitamins: "C, A, K",
      benefits: ["Boosts immunity", "Provides energy"]
    },
    {
      id: 2,
      title: "Vegetables",
      description: "Fresh and healthy vegetables for everyday meals.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXT93GGsU9Ix7VYvSFDio3L82mcPLVPqym8RkyDgbtryWG_On71y38_8y5rGWwuVwrMtE&usqp=CAU",
      vitamins: "A, K, C",
      benefits: ["Supports digestion", "Rich in fiber"]
    },
    {
      id: 3,
      title: "Dairy",
      description: "Milk, cheese, and yogurt from trusted farms.",
      image: "https://t4.ftcdn.net/jpg/14/98/08/63/360_F_1498086366_lg7TOcTI8g1vytqDXA8SjI3v04cp1AVl.jpg",
      vitamins: "D, B12, Calcium",
      benefits: ["Strengthens bones", "Boosts immunity"]
    },
    {
      id: 4,
      title: "Snacks",
      description: "Quick and tasty snacks for all ages.",
      image: "https://img.freepik.com/premium-photo/beer-snacks_926199-2448411.jpg?w=360",
      vitamins: "B6, C",
      benefits: ["Quick energy", "Convenient"]
    }
  ];

  return (
    <section className="container mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-green-600">
        About All Categories
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-48 object-cover rounded mb-4"
            />

            <h2 className="text-2xl font-bold mb-2 text-orange-500">
              {cat.title}
            </h2>

            <p className="text-gray-700 mb-3">{cat.description}</p>

            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Vitamins:</span> {cat.vitamins}
            </p>

            <div className="text-left w-full mt-2">
              <span className="font-semibold text-lg">Benefits:</span>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                {cat.benefits.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
