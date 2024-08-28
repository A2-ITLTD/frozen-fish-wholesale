import i1 from "../Images/it1.jpg";
import i2 from "../Images/it2.jpg";
import i3 from "../Images/it3.jpg";
import i4 from "../Images/it4.jpg";
import i5 from "../Images/it5.jpg";

const AllProducts = () => {
    return (
        <div className='mt-12 px-5 md:px-28'>  
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center'>
            {/* 1 */}
            <div className="card bg-base-100 w-full md:w-96 h-fulls shadow-xl">
                <figure>
                    <img
                    src={i1}
                    alt="Shoes" />
                </figure>
                <div className="card-body flex flex-col gap-4">
                    <h2 className="card-title text-base">
                    Frozen shrimp seafood black tiger prawn OEM box style packaging
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price : $11.14-$14.65 / Kgs</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Frozen Fish</div>
                    <div className="badge badge-outline">Black Tiger Shrimp</div>
                    <div className="badge badge-outline bg-green-200 ">Buy Now</div>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="card bg-base-100 w-full md:w-96 h-full shadow-xl">
                <figure>
                    <img
                    src={i2}
                    alt="Shoes" />
                </figure>
                <div className="card-body flex flex-col gap-4">
                    <h2 className="card-title text-base">
                    Best Quality Lobsters Healthy Seafood Items with High Quality
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price : $27.71-$30.14 / Kgs</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Frozen Fish</div>
                    <div className="badge badge-outline">Rock lobster</div>
                    <div className="badge badge-outline bg-green-200 ">Buy Now</div>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="card bg-base-100 w-full md:w-96 h-full shadow-xl">
                <figure>
                    <img
                    src={i3}
                    alt="Shoes" />
                </figure>
                <div className="card-body flex flex-col gap-4">
                    <h2 className="card-title text-base">
                    Eel Fish 100% Frozen Export Oriented High Quality Cheap Price
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price : $2.35-$5.40 / Kgs</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Frozen Fish</div>
                    <div className="badge badge-outline">Freshwater Drum</div>
                    <div className="badge badge-outline bg-green-200 ">Buy Now</div>
                    </div>
                </div>
            </div>
            {/* 4 */}
            <div className="card bg-base-100 w-full md:w-96 h-full shadow-xl">
                <figure>
                    <img
                    src={i4}
                    alt="Shoes" />
                </figure>
                <div className="card-body flex flex-col gap-4">
                    <h2 className="card-title text-base">
                    Mud Crab 100% Fresh Export Oriented High Quality Cheap Price
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price : $3.50-$6.75 / Kgs</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Frozen Fish</div>
                    <div className="badge badge-outline">Scylla Serrata</div>
                    <div className="badge badge-outline bg-green-200 ">Buy Now</div>
                    </div>
                </div>
            </div>
            {/* 5 */}
            <div className="card bg-base-100 w-full md:w-96 h-full shadow-xl">
                <figure>
                    <img
                    src={i5}
                    alt="Shoes" />
                </figure>
                <div className="card-body flex flex-col gap-4">
                    <h2 className="card-title text-base">
                    Wholesale Frozen Tilapia Fresh Tilapia Supplier Block Bulk for sale
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price : $1.40-$2.60 / Kgs</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Frozen Fish</div>
                    <div className="badge badge-outline">Tilapia</div>
                    <div className="badge badge-outline bg-green-200 ">Buy Now</div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default AllProducts;