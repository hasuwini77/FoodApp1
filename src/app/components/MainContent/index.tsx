'use client'
import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    strYoutube: string;
    [key: `strIngredient${number}`]: string | undefined;
    [key: `strMeasure${number}`]: string | undefined;
}

interface MealResponse {
    meals: Meal[];
}

const MainContent: React.FC = () => {
    const [meal, setMeal] = useState<Meal | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (meal) {
            console.log(meal);
        }
    }, [meal]);

    const handleClick = async () => {
        setMeal(null); // Reset meal to ensure fetch happens on button click
        setLoading(true);

        setTimeout(async () => {
            const fetchData = async () => {
                try {
                    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
                    const data: MealResponse = await response.json();
                    setMeal(data.meals[0]);
                } catch (error) {
                    console.error('Error fetching data:', error);
                } finally {
                    setLoading(false);
                }
            };

            await fetchData();
        }, 1500);
    };

    const handleInstructions = () => {  
        let elem = document.querySelector(".instructions"); 
        elem?.classList.toggle("hidden");
        elem?.classList.toggle("visible");
    }

    const renderIngredients = () => {
        if (!meal) return null;
    
        const ingredients = [];
    
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
    
            if (ingredient || measure) {
                ingredients.push(
                    <li key={i} className="p-2">
                        {measure && `${measure} `}
                        {ingredient}
                    </li>
                );
            }
            // Stop the loop if the ingredient and measure are both empty
            if (!ingredient && !measure) {
                break;
            }
        }
    
        return ingredients;
    };

    return (
        <>
            <div className="flex justify-center items-center p-10 mt-12 text-2xl">
                {!loading ? (
                    <button onClick={handleClick} className="getMeal hover:text-gray-500">Get Meal</button>
                ) : (
                    <div className="loader"><BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    /></div>
                )}
            </div>

            <div>
                {meal && (
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-center text-xl p-3">{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-xl w-full max-w-xs md:max-w-md h-auto"/>
                        <div className="ingredients text-center"> 
                            <h4 className="mt-4 mb-3 text-xl">Ingredients</h4>
                            <ul>
                                {renderIngredients()}
                            </ul>
                        </div>
                        <button className="p-4" onClick={handleInstructions}> Show Instructions </button>
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
