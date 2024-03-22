export default function SearchBar() {
    return (
        <form className="w-72 md:w-96 mx-auto">
            <div className="relative w-full">
                <input
                    type="search"
                    className="block p-1.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-500 border-s-2 border focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Buscar..."
                    required
                />
                <button
                    type="submit"
                    className="absolute top-0 end-0 p-1.5 px-2.5 text-sm font-medium h-full text-gray-500 rounded-e-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                    <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
}
