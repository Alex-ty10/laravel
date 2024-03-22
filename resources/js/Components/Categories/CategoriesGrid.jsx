import React from "react";
import CategorieItem from "./CategorieItem";

function CategoriesGrid() {
    return (
        <section className="py-4">
            <h3 className="text-3xl font-semibold pb-4 text-gray-600">
                Categorías destacadas
            </h3>
            <div className="grid grid-cols-2 gap-3 mx-auto sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 py-4">
                <CategorieItem
                    image="https://farmacityar.vtexassets.com/assets/vtex.file-manager-graphql/images/73a08de7-fd10-4042-a9bd-2eeb29e2b1dd___95dab5122b306bf86b307dcc0559d7da.png"
                    title="Cuidado"
                />
                <CategorieItem
                    image="https://farmacityar.vtexassets.com/assets/vtex.file-manager-graphql/images/65fa2c31-6acf-4a18-8c58-56e407e7dedc___5c61dbdbde295faac9ae73704044a64d.png"
                    title="Repelentes"
                />
                <CategorieItem
                    image="https://farmacityar.vtexassets.com/assets/vtex.file-manager-graphql/images/6a9d5965-573f-4514-b962-7d065853db71___92ccb2a5e101c794b50ee1948df6c087.png"
                    title="Hogar"
                />
                <CategorieItem
                    image="https://farmacityar.vtexassets.com/assets/vtex.file-manager-graphql/images/9c83ef08-f7cb-49b5-8404-25b7df185ba5___638da6e8f3ab8d4497d854674ddd23cd.png"
                    title="Niño"
                />
                <CategorieItem
                    image="https://farmacityar.vtexassets.com/assets/vtex.file-manager-graphql/images/6e581303-ac2d-4ab6-84cb-9c9c48651757___a26dd753592e80d0fb27a2dde35a6a5b.png"
                    title="Capsulas"
                />
                <CategorieItem
                    image="https://farmacityar.vtexassets.com/assets/vtex.file-manager-graphql/images/f629393f-e923-4d4e-9a84-14b155f94b17___435a23546033c49abebc6100d66d8a63.png"
                    title="Alimentos"
                />
            </div>
        </section>
    );
}

export default CategoriesGrid;
