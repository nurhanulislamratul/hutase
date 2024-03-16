import { useState } from "react";
import CookSection from "../CookSection/CookSection";
import Recipes from "../Recipes/Recipes";
import { useEffect } from "react";


const OurRecipes = () => {
    const [recipes,setRecipes] =useState([]);
    useEffect(() =>{
        fetch('fakedata.json')
            .then((res) =>res.json())
            .then(data => setRecipes(data) )
    },[])
    return (
        <div className="lg:mt-[100px]">
            <h3 className="text-[40px] font-medium text-center mb-6">Our Recipes</h3>
            <p className="text-[rgba(21,11,43,0.60)] text-center mb-12 max-w-[823px] mx-auto">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            <div className="flex flex-col lg:flex-row gap-6">
                
                <Recipes recipes={recipes}></Recipes>
                <CookSection></CookSection>
                
            </div>
        </div>
    );
};

export default OurRecipes;