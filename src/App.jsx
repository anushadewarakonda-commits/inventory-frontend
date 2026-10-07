import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S24",
    price: 799,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
  {
    id: 2,
    name: "Premium Headphones",
    price: 129,
    category: "HeadPhones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    id: 3,
    name: "Luxury Hand Bag",
    price: 89,
    category: "HandBags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199,
    category: "HandWatches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: 5,
    name: "Indoor Plant",
    price: 35,
    category: "Plants",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600",
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 59,
    category: "HeadPhones",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600",
  },
];

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    "All",
    "Electronics",
    "HeadPhones",
    "Plants",
    "HandBags",
    "HandWatches",
  ];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      category === "All" || product.category === category;

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <header className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Anu's E Store
            </h1>

            <p className="text-sm text-gray-500 mt-1">
             India's Best Premier E-Store
            </p>
          </div>

          {/* Features */}
          <div className="hidden lg:flex items-center gap-10">

            <div>
              <p className="font-bold text-gray-800 text-sm">
                FAST SHIPPING
              </p>
              <p className="text-xs text-gray-500">
                Across Pan India
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-800 text-sm">
                100% AUTHENTIC
              </p>
              <p className="text-xs text-gray-500">
                Trusted Brands
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-800 text-sm">
                EXPERT SUPPORT
              </p>
              <p className="text-xs text-gray-500">
                We're Here To Help
              </p>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-md font-semibold">
              Contact Us
            </button>

          </div>
        </div>

        {/* NAVBAR */}
        <nav className="bg-slate-800 text-white">

          <div className="max-w-7xl mx-auto px-6">

            <div className="flex items-center gap-8 h-14">

              <button className="hover:text-orange-400">
                Home
              </button>

              <button className="hover:text-orange-400">
                Shop
              </button>

              <button className="hover:text-orange-400">
                About
              </button>

              <button className="hover:text-orange-400">
                Services
              </button>

              <button className="hover:text-orange-400">
                Book an Appointment
              </button>

              <div className="ml-auto">
                🛒 Cart ({cartCount})
              </div>

            </div>

          </div>

        </nav>

      </header>


      {/* SHOP AREA */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* TITLE */}
        <div className="mb-6">

          <h2 className="text-3xl font-bold text-gray-800">
            Shop
          </h2>

          <p className="text-gray-500 mt-1">
            Explore our premium products
          </p>

        </div>


        {/* SEARCH */}
        <div className="mb-6">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

        </div>


        {/* CATEGORIES */}
        <div className="flex flex-wrap gap-3 mb-8">

          {categories.map((item) => (

            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 rounded-full border font-medium transition ${
                category === item
                  ? "bg-slate-800 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item}
            </button>

          ))}

        </div>


        {/* PRODUCT COUNT */}
        <div className="mb-5">

          <p className="text-gray-600">
            Showing{" "}
            <span className="font-bold">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>

        </div>


        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden border border-gray-200"
            >

              {/* IMAGE */}
              <div className="h-56 bg-gray-100 flex items-center justify-center">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

              </div>


              {/* DETAILS */}
              <div className="p-5">

                <p className="text-xs text-gray-500 uppercase">
                  {product.category}
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mt-1">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Featured Item
                </p>

                <div className="flex items-center justify-between mt-4">

                  <span className="text-xl font-bold text-slate-800">
                    ${product.price}
                  </span>

                  <span className="text-xs text-gray-400">
                    Item #{product.id}
                  </span>

                </div>


                {/* QUANTITY */}
                <div className="flex items-center justify-between mt-5">

                  <div className="flex items-center border rounded-md">

                    <button className="px-3 py-1 hover:bg-gray-100">
                      −
                    </button>

                    <span className="px-3 py-1 border-x">
                      1
                    </span>

                    <button className="px-3 py-1 hover:bg-gray-100">
                      +
                    </button>

                  </div>


                  <button
                    onClick={() =>
                      setCartCount((count) => count + 1)
                    }
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* NO PRODUCTS */}
        {filteredProducts.length === 0 && (

          <div className="text-center py-20">

            <p className="text-xl text-gray-500">
              No products found
            </p>

          </div>

        )}

      </main>


      {/* FLOATING CHAT */}
      <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg font-semibold">
        💬 Chat
      </button>

    </div>
  );
}

export default App;