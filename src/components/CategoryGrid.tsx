import { Link } from "react-router-dom";
import { 
  PenTool, 
  Gift, 
  Gamepad2, 
  Trophy, 
  Scissors, 
  Heart,
  ArrowRight,
  Home,
  BookOpen
} from "lucide-react";
import { getAllCategories } from "@/data/products";

const categoryIcons: { [key: string]: any } = {
  electronics: Trophy,
  stationery: PenTool,
  fashion: Heart,
  home: Home,
  sports: Trophy,
  books: BookOpen
};

const categoryColors: { [key: string]: string } = {
  electronics: "bg-blue-500",
  stationery: "bg-purple-500",
  fashion: "bg-pink-500",
  home: "bg-green-500",
  sports: "bg-orange-500",
  books: "bg-indigo-500"
};

const CategoryGrid = () => {
  const categories = getAllCategories();
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section text-foreground mb-4">
            What You’ll Find at Stoorey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive collection organized by categories to find exactly what you're looking for.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = categoryIcons[category.id] || PenTool;
            const color = categoryColors[category.id] || "bg-blue-500";
            return (
              <Link 
                key={category.id}
                to={`/category/${category.slug}`}
                className="group"
              >
                <div className="bg-card border border-card-border rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 group">
                  {/* Icon */}
                  <div className={`${color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Category Name */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>

                  {/* Product Count - You can update this with actual counts */}
                  <p className="text-sm text-muted-foreground mb-3">
                    View products
                  </p>

                  {/* Arrow Icon */}
                  <ArrowRight className="h-4 w-4 text-muted-foreground mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;