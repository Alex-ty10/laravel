import ProductCard from "./ProductCard";

export default function ProductGrid() {
    return (
        <section className="py-4">
            <h3 className="text-3xl font-semibold pb-4 text-gray-600">
                Lo mas visto
            </h3>
            <div className="grid grid-cols-2 gap-3 mx-auto sm:grid-cols-3 md:grid-cols-5 py-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
}
