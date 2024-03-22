import { Link, Head } from "@inertiajs/react";
import CarouselDiv from "@/Components/CarouselDiv";
import GeneralLayout from "@/Layouts/GeneralLayout";
import ProductGrid from "@/Components/Products/ProductGrid";
import BentoGrid from "@/Components/Products/BentoGrid";
import { Carousel } from "flowbite-react";
import CategoriesGrid from "@/Components/Categories/CategoriesGrid";

export default function Home({ auth }) {
    return (
        <>
            <Head title="Home" />
            <GeneralLayout auth={auth}>
                <CarouselDiv />
                <div className="py-6 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <ProductGrid />
                    <BentoGrid />
                    <CategoriesGrid />
                </div>
            </GeneralLayout>
        </>
    );
}
