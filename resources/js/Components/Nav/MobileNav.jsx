import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function MobileNav({ show }) {
    return (
        <div className={`${show ? "block" : "hidden"}  sm:hidden`}>
            <div className="pt-2 pb-3 space-y-1">
                <ResponsiveNavLink
                    href={route("dashboard")}
                    active={route().current("dashboard")}
                >
                    Dashboard
                </ResponsiveNavLink>
            </div>

            <div className="pt-4 pb-1 border-t border-gray-200">
                <div className="px-4">
                    <div className="font-medium text-base text-gray-800">
                        nombre
                    </div>
                    <div className="font-medium text-sm text-gray-500">
                        email
                    </div>
                </div>

                <div className="mt-3 space-y-1">
                    <ResponsiveNavLink href={route("profile.edit")}>
                        Perfil
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        method="post"
                        href={route("logout")}
                        as="button"
                    >
                        Cerrar sesion
                    </ResponsiveNavLink>
                </div>
            </div>
        </div>
    );
}
