export default function BentoItem({ title, subtitle, image, children, style }) {
    return (
        <article
            className={`${style} relative rounded-lg backdrop-blur-md border border-black/10 shadow-inner shadow-white/10 group overflow-hidden`}
        >
            <div className="absolute z-10 bottom-0 top-0 w-full h-full bg-gradient-to-b " />
            <div
                className="absolute left-0 top-0 bottom-0 w-full h-full group-hover:scale-[102%] transition-scale duration-1000 ease-in-out opacity-90 bg-center bg-cover bg-no-repeat bg-blend-luminosity z-10"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="relative select-none flex flex-col gap-1 p-6 text-lg z-20 h-full justify-end">
                <h2 className="text-3xl font-semibold text-balance text-white mb-4">
                    {title}
                </h2>
                {subtitle && (
                    <h3 className="text-xl font-semibold text-blue-200/80 mb-4">
                        {subtitle}
                    </h3>
                )}
                {children}
            </div>
        </article>
    );
}
