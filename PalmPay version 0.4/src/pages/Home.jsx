import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, ArrowRight, Star, ChevronRight } from 'lucide-react';

export default function Home() {
    // Featured categories data
    const categories = [
        { id: 1, name: 'Electronics', count: 243, icon: '💻' },
        { id: 2, name: 'Fashion', count: 186, icon: '👕' },
        { id: 3, name: 'Home & Kitchen', count: 157, icon: '🏠' },
        { id: 4, name: 'Beauty', count: 92, icon: '💄' }
    ];

    // Featured products data
    const featuredProducts = [
        { id: 1, name: 'Wireless Headphones', price: 129.99, rating: 4.8, reviews: 124, image: '/api/placeholder/300/300' },
        { id: 2, name: 'Smart Watch', price: 199.99, rating: 4.6, reviews: 89, image: '/api/placeholder/300/300' },
        { id: 3, name: 'Fitness Tracker', price: 79.99, rating: 4.5, reviews: 76, image: '/api/placeholder/300/300' },
        { id: 4, name: 'Bluetooth Speaker', price: 59.99, rating: 4.7, reviews: 112, image: '/api/placeholder/300/300' }
    ];

    // Featured vendors data
    const featuredVendors = [
        { id: 1, name: 'TechGadgets', rating: 4.9, logo: '/api/placeholder/100/100' },
        { id: 2, name: 'FashionHub', rating: 4.7, logo: '/api/placeholder/100/100' },
        { id: 3, name: 'HomeEssentials', rating: 4.8, logo: '/api/placeholder/100/100' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-teal-500 to-teal-400 text-white">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Discover the Best Products from Premium Vendors
                            </h1>
                            <p className="text-lg text-teal-50">
                                Shop confidently with our curated selection of top-quality products
                                from verified vendors around the world.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/categories" className="bg-white text-teal-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-300 text-center">
                                    Browse Categories
                                </Link>
                                <Link to="/vendors" className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition duration-300 border border-teal-50 text-center">
                                    Meet Our Vendors
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="relative">
                                <div className="absolute -top-6 -left-6 w-16 h-16 bg-teal-400 rounded-lg opacity-20 rotate-12"></div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-teal-400 opacity-20"></div>
                                <div className="bg-white p-8 rounded-2xl shadow-xl">
                                    <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden bg-gray-200">
                                        {/* Replace with your actual hero image */}
                                        <img
                                            src="/api/placeholder/600/450"
                                            alt="Featured products"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Section */}
            <div className="container mx-auto px-4 -mt-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-grow">
                            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search for products, vendors, or categories..."
                                className="w-full bg-gray-100 border-0 rounded-lg py-3 pl-10 pr-3 text-gray-600 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                            />
                        </div>
                        <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-300 flex items-center justify-center">
                            <span>Search</span>
                            <ArrowRight size={18} className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Shop by Category</h2>
                        <Link to="/categories" className="text-teal-500 hover:text-teal-700 flex items-center font-medium">
                            <span>View All</span>
                            <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.map(category => (
                            <Link key={category.id} to={`/categories/${category.id}`}>
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 p-6 text-center">
                                    <div className="text-4xl mb-3">{category.icon}</div>
                                    <h3 className="font-medium text-gray-800">{category.name}</h3>
                                    <p className="text-sm text-gray-500">{category.count} products</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
                        <Link to="/products" className="text-teal-500 hover:text-teal-700 flex items-center font-medium">
                            <span>View All</span>
                            <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map(product => (
                            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
                                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-gray-800">{product.name}</h3>
                                    <p className="text-teal-500 font-bold mt-1">${product.price}</p>
                                    <div className="flex items-center mt-2">
                                        <div className="flex items-center">
                                            <Star size={16} className="text-yellow-400 fill-current" />
                                            <span className="ml-1 text-sm text-gray-700">{product.rating}</span>
                                        </div>
                                        <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
                                    </div>
                                    <button className="w-full mt-4 bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition duration-300 flex items-center justify-center">
                                        <ShoppingBag size={16} className="mr-2" />
                                        <span>Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Vendors */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Top Vendors</h2>
                        <Link to="/vendors" className="text-teal-500 hover:text-teal-700 flex items-center font-medium">
                            <span>View All</span>
                            <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredVendors.map(vendor => (
                            <Link key={vendor.id} to={`/vendors/${vendor.id}`}>
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 p-6 flex items-center">
                                    <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                                        <img
                                            src={vendor.logo}
                                            alt={vendor.name}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">{vendor.name}</h3>
                                        <div className="flex items-center mt-1">
                                            <Star size={14} className="text-yellow-400 fill-current" />
                                            <span className="ml-1 text-sm text-gray-700">{vendor.rating}</span>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <ChevronRight size={20} className="text-gray-400" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 bg-gradient-to-r from-teal-500 to-teal-400 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to start shopping?</h2>
                    <p className="text-teal-50 max-w-2xl mx-auto mb-8">
                        Create an account today and get access to exclusive deals, personalized recommendations, and more.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/signup" className="bg-white text-teal-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-300">
                            Sign Up Now
                        </Link>
                        <Link to="/signin" className="bg-transparent text-white px-8 py-3 rounded-full font-medium border border-white hover:bg-teal-600 transition duration-300">
                            Sign In
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}