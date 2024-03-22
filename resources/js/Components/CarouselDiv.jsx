import { Carousel } from "flowbite-react";

export default function CarouselDiv() {
    return (
        <div className="max-w-8xl mx-auto h-56 sm:h-64 xl:h-80 2xl:h-96 py-2">
            <Carousel>
                <img
                    src="https://farmacityar.vtexassets.com/assets/vtex.file-manager-graphql/images/1af8b462-40f1-457a-b626-7baf22eafece___7f651aca5b4c969bec4c22c8b6033540.webp"
                    alt="..."
                />
                <img
                    src="https://farmacityar.vtexassets.com/assets/vtex.file-manager-graphql/images/11ce4be8-62bc-484b-87e5-095af65123d5___eea34d8f6356bcbd3957a01c373fcb4d.jpg"
                    alt="..."
                />
                <img
                    src="https://www.farmaciasahumada.cl/dw/image/v2/BJVH_PRD/on/demandware.static/-/Sites-ahumada-cl-Library/default/dw61b126a2/images/ciclo-marzo-semana2/banner-home/panbio-desktop.png"
                    alt="..."
                />
            </Carousel>
        </div>
    );
}
