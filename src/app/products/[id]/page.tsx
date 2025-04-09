// Example dynamic route with generateStaticParams for static site generation
import { notFound } from "next/navigation";

// This function is required for static site generation with dynamic routes
export async function generateStaticParams() {
  // Define all possible values for [id] parameter
  // For now, we'll create example IDs
  // In a real app, you'd fetch these from a database or API
  return [
    { id: "water-bottles" },
    { id: "glass-bottles" },
    { id: "premium-bottles" },
    { id: "custom-labels" },
  ];
}

// The main page component for the dynamic route
export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = params.id;

  // In a real app, you'd fetch product data based on the ID
  // For now, just display the ID
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Product: {productId}</h1>
      <p className="text-lg">
        This is a placeholder for product content. In a real application, you
        would fetch product data based on the ID and display it here.
      </p>
    </div>
  );
}
