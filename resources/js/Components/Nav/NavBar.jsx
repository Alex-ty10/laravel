import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";
import SearchBar from "@/Components/SearchBar";
import MobileNav from "./MobileNav";

export default function NavBar({ auth }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                        </div>

                        <div className="hidden sm:ml-20 sm:flex sm:items-center">
                            <SearchBar />
                        </div>
                    </div>

                    <div className="hidden sm:flex gap-4 sm:items-center sm:ms-6">
                        <div className="relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        <svg
                                            className="w-7 h-7 text-gray-500"
                                            data-slot="icon"
                                            fill="none"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                            />
                                        </svg>
                                        {auth.user ? (
                                            <span className="ml-0.5">
                                                Mi cuenta
                                            </span>
                                        ) : (
                                            <span className="ml-0.5">
                                                Inicia sesión
                                            </span>
                                        )}
                                    </button>
                                </Dropdown.Trigger>

                                {auth.user ? (
                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Perfil
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Cerrar sesion
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                ) : (
                                    <Dropdown.Content>
                                        <Dropdown.Link href={route("login")}>
                                            Iniciar sesion
                                        </Dropdown.Link>
                                        <Dropdown.Link href={route("register")}>
                                            Registrarse
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                )}
                            </Dropdown>
                        </div>
                        <button type="button" className="relative">
                            <span className="absolute top-[-6px] right-1 rounded-full w-4 h-4 bg-blue-500 text-white text-center text-xs flex justify-center items-center">
                                9
                            </span>
                            <svg
                                className="w-7 h-7 text-gray-500"
                                data-slot="icon"
                                fill="none"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="-me-2 flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <title>svg</title>
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            <div className="hidden sm:flex max-w-7xl mx-auto sm:px-6 lg:px-8 justify-start gap-4">
                <NavLink
                    href={route("dashboard")}
                    active={route().current("dashboard")}
                >
                    Belleza
                </NavLink>
                <NavLink
                    href={route("dashboard")}
                    active={route().current("dashboard")}
                >
                    Medicamentos
                </NavLink>
                <NavLink
                    href={route("dashboard")}
                    active={route().current("dashboard")}
                >
                    Higiene
                </NavLink>
                <NavLink
                    href={route("dashboard")}
                    active={route().current("dashboard")}
                >
                    Salud
                </NavLink>
            </div>
            <MobileNav show={showingNavigationDropdown} />
        </>
    );
}
