'use client'
import React, { useEffect, useState } from "react";

interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
}

interface MealResponse {
    meals: Meal[];
}

const MainContent: React.FC = () => {
    const [meal, setMeal] = useState<Meal | null>(null);

    useEffect(() => {
        if (meal) {
            console.log(meal);
        }
    }, [meal]);

    const handleClick = async () => {
        setMeal(null); // Reset meal to ensure fetch happens on button click
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
                const data: MealResponse = await response.json();
                setMeal(data.meals[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        await fetchData();
    };

    const handleInstructions = () => {  
        let elem = document.querySelector(".instructions"); 
        elem?.classList.toggle("hidden");
        elem?.classList.toggle("visible");
    }

    return (
        <>
            <div className="flex justify-center items-center p-10 mt-12 text-2xl">
                <button onClick={handleClick} className="hover:text-gray-500">Get Random Meal</button>
            </div>

            <div>
                {meal && (
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-center text-xl p-3">{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-xl w-full max-w-xs md:max-w-md h-auto"/>
                        <button className="p-3" onClick={handleInstructions}> Show Instructions </button>
                        <p className="instructions text-center p-2 mt-4 mb-4 leading-loose tracking-wide xs:w-[250px] md:w-full hidden">
                            {meal.strInstructions}
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default MainContent;
