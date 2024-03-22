import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Licensing
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{" "}
                    <Link
                        href="https://flowbite.com/"
                        className="hover:underline"
                    >
                        Orion™
                    </Link>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}
