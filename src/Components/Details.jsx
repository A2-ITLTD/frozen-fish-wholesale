import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const [loading, setLoading] = useState(true);
    const [newItem, setNewItem] = useState(null); 

    const item = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);

    useEffect(() => {
        document.title = "Products Details";
        setLoading(true); 
        setTimeout(() => {
            if (item) {
                const foundItem = item.find(item => item.id === intId);
                if (foundItem) {
                    setNewItem(foundItem);
                } else {
                    console.log(`Product with id ${intId} not found`);
                }
            }
            setLoading(false); 
        }, 1000); 
    }, [item, intId]);

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    return (
        <div className="mt-5 md:mt-16 px-5 md:px-28"> 
            <div className='text-left text-xl md:text-4xl font-medium pb-0 md:pb-14 text-green-700'>
                <h1>{newItem.name}</h1>
            </div>
            <div className="mt-2 flex flex-col md:flex-row gap-3 md:gap-10">
                {/* images */}
                <div className="w-full md:w-1/2 p-0 md:p-5 rounded-md">
                    <img src={newItem.image} className="rounded-md w-full" />
                </div>
                {/* details */}
                <div className="w-full md:w-1/2 bg-gray-100 p-5 md:p-5 shadow-md text-left flex flex-col gap-3">
                    <div className="flex flex-col md:flex-row items-start justify-between ">
                        <div className="flex flex-col gap-3">
                            <h1>Category: {newItem.category}</h1>
                            <h1 className="font-bold">Current Price: {newItem.current_price}</h1>
                            <h1 className="font-bold">Price: {newItem.price}</h1>
                            <hr className="w-full border-2 mt-10" />
                        </div>
                        <div>
                            <Link  to="/contact" className="btn bg-green-700 text-white">Contact Seller</Link>
                        </div>
                    </div>
                    <p>Description :</p>
                    <p className="text-justify">{newItem.description}</p>
                </div>
            </div>
            <h1 className="py-5 text-3xl">More Details</h1>
            <div className="flex flex-col md:flex-row items-start gap-10">
                <div className="overflow-x-auto w-full ">
                    <table className="table table-zebra border-2 border-green-300">
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>MOQ</td>
                            <td>{newItem.MOQ}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>Storage Type</td>
                            <td>{newItem.Storage_Type}</td>
                        </tr>
                        {/* row 3 */}
                        <tr>  
                            <td>Place of Origin</td>
                            <td>{newItem.Place_of_Origin}</td>
                        </tr>
                        <tr>  
                            <td>Ingredients</td>
                            <td>{newItem.Ingredients}</td>
                        </tr>
                        <tr>  
                            <td>Variety</td>
                            <td>{newItem.Variety}</td>
                        </tr>
                        <tr>  
                            <td>Freezing Process</td>
                            <td>{newItem.Freezing_Process}</td>
                        </tr>
                        <tr>  
                            <td>Part</td>
                            <td>{newItem.Part}</td>
                        </tr>
                        <tr>  
                            <td>Brand Name</td>
                            <td>{newItem.Brand_Name}</td>
                        </tr>
                        <tr>  
                            <td>Specification</td>
                            <td>{newItem.Specification}</td>
                        </tr>
                        <tr>  
                            <td>Content</td>
                            <td>{newItem.Content}</td>
                        </tr>
                        <tr>  
                            <td>Instruction for use</td>
                            <td>{newItem.Instruction_for_use}</td>
                        </tr>
                        <tr>  
                            <td>Drying_Process</td>
                            <td>{newItem.Drying_Process}</td>
                        </tr>
                        <tr>  
                            <td>Weight</td>
                            <td>{newItem.Weight}</td>
                        </tr>
                        <tr>  
                            <td>Packing</td>
                            <td>{newItem.Packing}</td>
                        </tr>
                        <tr>  
                            <td>Delivery time</td>
                            <td>{newItem.Delivery_time}</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                {/* other info  */}
                <div className="w-full text-justify">
                    <h1 className="py-5 text-3xl">Other Instructions</h1>
                    <p>{newItem.Cooking}</p>
                    <p>{newItem.Bake}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;