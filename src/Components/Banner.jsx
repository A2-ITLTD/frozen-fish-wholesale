import { Link } from "react-router-dom";
import bg1 from "../Images/bg1.jpg";
import bg2 from "../Images/bg2.jpg";
import bg3 from "../Images/bg3.jpg";
import orangebg from "../Images/orangebg.jpg";
import { FaRegCircleDot } from "react-icons/fa6";
import { AiOutlineAlibaba } from "react-icons/ai";
import i1 from "../Images/it1.jpg";
import i2 from "../Images/it2.jpg";
import i3 from "../Images/it3.jpg";
import i4 from "../Images/it4.jpg";
import i5 from "../Images/it5.jpg";

const Banner = () => {
    return (
        <div >  
           {/* main banner */}
           <section className="relative w-full h-[700px]">
            <img src={bg1} className='w-full h-full object-cover object-left md:object-center' />
            <div className='absolute left-28 top-20 md:top-20 text-white flex flex-col justify-center text-center '>
                <div className="flex flex-col gap-6 items-center">
                    <h1 className="text-5xl font-semibold">Welcome to the leading source for premium frozen fish. <br /> 
                    <span className="text-lg ">
                    Where quality meets unbeatable prices—delivering the freshest catch from sea to your doorstep, all year round.
                    </span>
                    </h1>
                    <div className="divider"><FaRegCircleDot className='text-6xl' /></div>
                    <button className='w-fit items-center text-green-600 font-bold text-3xl hover:text-black bg-white px-8 py-3 rounded-md'>
                        <Link to="/allproducts">Shop Now</Link>
                    </button>
                </div>
            </div>
            </section>
            {/* alibab button */}
            <section className="my-16 relative w-full h-32 rounded-md flex items-center justify-center">
                <img src={orangebg} className='absolute inset-0 w-full h-full object-cover object-left md:object-center rounded-md' />
                <div className='relative z-10'>
                    <Link to="/" className='flex gap-2 items-center bg-white hover:bg-slate-200 text-[#FF6701] text-sm md:text-2xl font-bold py-2 px-3 md:px-8 rounded-md'>
                    Get In Touch With Alibaba <AiOutlineAlibaba className='text-base md:text-5xl' />
                    </Link>
                </div>
            </section>
            {/* about */}
            <section className='mt-28 px-5 md:px-28'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center'>
                <div>
                    <div className='w-full h-ull rounded-md'>
                        <img src={bg2} className='w-full h-full object-cover object-left rounded-md' />
                    </div>
                </div>
                <div className='flex flex-col gap-6 justify-start items-center'>
                    <h1 className='text-4xl font-bold text-green-700 text-wrap pb-5'>To accomplish our goal, we offer:</h1>

                <div className="collapse collapse-arrow bg-base-200 text-gray-700">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Top Frozen Fish Supplier and Exporter</div>
                    <div className="collapse-content">
                        <p>We are a trusted supplier and exporter of high-quality frozen fish, including eel, tuna, and mackerel. Our advanced facilities ensure consistent quality and freshness for global markets. Based in Chittagong, Bangladesh, we are committed to delivering excellence.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 text-gray-700">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Global Sourcing and Distribution</div>
                    <div className="collapse-content">
                        <p>We source our frozen fish from top fisheries across the globe, ensuring competitive pricing and fast delivery. Our distribution network covers major markets in Asia, Europe, and North America.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 text-gray-700">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Contact Us for Quotes and Orders</div>
                    <div className="collapse-content">
                        <p>Reach out to our team today for a quote on our frozen fish products. With over a decade of experience, we are dedicated to meeting your seafood needs efficiently and reliably.</p>
                    </div>
                </div>

            </div>

                <div className='bg-green-700 rounded-md p-4 md:p-12 flex flex-col gap-5'>
                    <h1 className='text-3xl font-bold text-white text-wrap pb-5'>Our primary project</h1>
                    <p className='text-base font-normal text-white text-justify text-wrap'>
                    We take immense pride in delivering sugar that is not only 100% pure but also sustainably sourced, ensuring that every grain aligns with our commitment to ethical practices. Our sugar is completely free from additives, guaranteeing that you receive only the best, natural sweetness in its most authentic form. Each batch undergoes a meticulous refining process designed to preserve the sugar’s inherent sweetness and vibrant color, making it a perfect choice for a wide range of culinary applications. Whether you're a home baker crafting delicate pastries, a professional chef creating gourmet dishes, or simply someone with a discerning palate, our sugar is crafted to elevate your culinary creations with unparalleled quality and taste.
                    </p>

                </div>
            </div>
            </section>
            {/* best setting products */}
            <section className='mt-28 px-5 md:px-28'>
                <h1 className="text-4xl text-green-700 text-center font-semibold my-16">Best Products</h1>
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
                        <Link to={`/item/1`} className="badge badge-outline bg-green-200 ">Buy Now</Link>
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
                        <Link to={`/item/2`} className="badge badge-outline bg-green-200 ">Buy Now</Link>
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
                        <Link to={`/item/3`} className="badge badge-outline bg-green-200 ">Buy Now</Link>
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
                        <Link to={`/item/4`} className="badge badge-outline bg-green-200 ">Buy Now</Link>
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
                        <Link to={`/item/5`} className="badge badge-outline bg-green-200 ">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            {/* our speciality */}
            <section className='mt-28 px-5 md:px-28'>
                <div
                    className="relative w-full h-auto md:h-[400px] flex items-center justify-center"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      
                    >
                    <div className="relative text-center flex flex-col gap-5 items-center py-5 px-5 md:px-28 text-white">
                        <h1 className="text-2xl md:text-5xl text-green-400 font-bold">Our Specialty</h1>
                        <p className='text-wrap text-justify md:text-center'>We offer a wide range of premium frozen fish products, including eel, tuna, and mackerel, all sourced directly from trusted fisheries. Benefit from direct shipments with no broker fees, ensuring the highest quality and freshness. Our stringent quality controls also guarantee no cross-contamination. For more information or to check availability in your region, please contact your local distributor.</p>
                        <Link to="/about" className="mt-4 px-6 py-2 w-fit bg-green-400 text-white rounded-lg">Learn More</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;