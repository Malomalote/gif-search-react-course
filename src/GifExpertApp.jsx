import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Star Wars']);

    const onAddCategory = (newCategory) => {
        let categ=categories;
        if (categ.includes(newCategory)) categ=categ.filter(e=>e!=newCategory);
        setCategories([newCategory, ...categ]);
    }
    //     if (categories.includes(newCategory)) return;
    //     setCategories([newCategory, ...categories]);
    // }

    return (
        <>

            <h1>Gif Search React Course</h1>

            <AddCategory onNewCategory={onAddCategory} />

            {
                categories.map((category) =>
                (
                    <GifGrid key={category} category={category} />
                )
                )
            }

        </>

    )
}
