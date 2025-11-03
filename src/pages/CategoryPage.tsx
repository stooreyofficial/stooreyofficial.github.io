import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, getAllCategories } from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  const allCategories = getAllCategories();
  const categoryData = allCategories.find(cat => cat.slug === category?.toLowerCase());
  const categoryProducts = categoryData ? getProductsByCategory(categoryData.id) : [];

  const categoryTitle = categoryData?.name || category || "Category";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {categoryTitle} Products
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover our collection of {categoryTitle.toLowerCase()} products
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CategoryPage;