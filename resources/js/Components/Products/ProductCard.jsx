import { Link } from "@inertiajs/react";

export default function ProductCard() {
    return (
        <div className="max-w-sm bg-white border border-blue-400 rounded-lg shadow">
            <Link href="#">
                <img
                    className="rounded-t-lg"
                    src="https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/014920L.jpg"
                    alt=""
                />
            </Link>
            <div className="p-5">
                <Link href="#">
                    <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900">
                        Acido folico GNC
                    </h5>
                </Link>
                <p className="mb-1 font-normal text-gray-70 text-xs">
                    Frasco 400ml
                </p>
                <p className="font-semibold mb-3">$15.000</p>
                <Link
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                    Añadir al carrito
                </Link>
            </div>
        </div>
    );
}
