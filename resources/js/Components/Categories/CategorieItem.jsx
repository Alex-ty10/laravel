import { Link } from "@inertiajs/react";
export default function CategorieItem({ image, title }) {
    return (
        <div className="flex flex-col items-center">
            <Link href="#">
                <img
                    className="rounded-full"
                    src={image}
                    alt={`imagen de la categoria ${title}`}
                />
            </Link>
            <h3 className="text-lg text-gray-500">{title}</h3>
        </div>
    );
}
