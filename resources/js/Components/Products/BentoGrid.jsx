import React from "react";
import BentoItem from "./BentoItem";

export default function BentoGrid() {
    return (
        <section className="w-full w-max-7xl grid grid-cols-4 auto-rows-[15rem] gap-4 mx-auto my-8">
            <BentoItem
                style="col-span-4"
                title="oferta"
                image="https://farmacityar.vtexassets.com/assets/vtex.file-manager-graphql/images/d8781ea8-4a4f-426f-961c-fc64aa8204d4___e7e5bfc3c0aa2390bd9913ee8f47e23e.jpg"
            />
            <BentoItem
                style="col-span-4 md:col-span-2"
                title="medicina"
                image="https://farmacityar.vtexassets.com/assets/vtex.file-manager-graphql/images/64d5283c-e922-46f0-b129-1ce46b2245a5___229c3550544879e40ffcb04f713b8660.webp"
            />
            <BentoItem
                style="col-span-4 md:col-span-2"
                title="higiene"
                image="https://farmacityar.vtexassets.com/assets/vtex.file-manager-graphql/images/f043081c-c18e-4cbf-bfef-c5f945770d6d___a4ee7cc2a06ec4a21b903bbb40fc2c99.jpg"
            />
        </section>
    );
}
