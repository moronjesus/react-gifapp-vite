import { useState } from "react"
import { AddCategory, GifGrid } from "./components/"

export const GifExpertApp = () => {
    
    /* Hook */
    /* A hook that allows you to use state in a functional component. */
    const [categories, setCategories] = useState(['Dragon Ball'])

    /**
     * If the nameNewCategory is not in the categories array, then add it to the categories array.
     * @returns the value of the function.
     */
    const onAddCategorie =(nameNewCategory)=>{
        if (categories.includes(nameNewCategory)) return
        setCategories([...categories, nameNewCategory])
    }

    return (
        <>
            <h1>GifApp</h1>
            
            <AddCategory 
                onNewCategory = {(nameNewCategory) => onAddCategorie(nameNewCategory) }>
            </AddCategory>
            <ol>
                {
                    categories.map((category)=> (
                        <GifGrid 
                            key = { category } 
                            category= { category }
                        />
                    ))
                }
               
            </ol>
        </>
    )
}
