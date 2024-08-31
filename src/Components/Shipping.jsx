import bg8 from '../Images/bg8.jpg';
const Shipping = () => {
    return (
        <div className='my-12 px-5 md:px-40'>  
           <div className='flex flex-col gap-5 items-center text-center'>
                <h1 className='text-2xl md:text-4xl font-bold text-green-700 text-wrap flex gap-4 items-center'>
                Shipping and Delivery
                </h1>
                <p className='text-lg font-normal text-gray-700 text-center text-wrap flex gap-5'>
                We provide you with the best seafood, from ocean to table, with premium delivery. We ship to the 48 contiguous states and DC
                Here's how it works:
                </p>
                <h1 className='text-2xl md:text-2xl font-bold text-green-700 text-wrap flex gap-4 items-center'>
                Shipping Rates
                </h1>
                <ul className='text-lg font-normal text-gray-700 text-center text-wrap gap-5'>
                    <li>All & freshly frozen items ship FREE nationwide when you order $125+ of # freshly frozen items. Orders containing less
                    than $125 of these items will ship at a flat rate of $19.99 nationwide
                    </li>
                    <li>• FREE shipping is available on additional products, shop all free shipping eligible items.
                    </li>
                </ul>
                <h1 className='text-2xl md:text-2xl font-bold text-green-700 text-wrap flex gap-4 items-center'>
                How We Ship
                </h1>
                <p className='text-lg font-normal text-gray-700 text-center text-wrap flex gap-5'>Orders placed by 10pm ET will ship the next business day and be delivered within 2 days of shipment. Specific delivery days can be
                requested.
                </p>
                <p className='text-lg font-normal text-gray-700 text-center text-wrap flex gap-5'>Freshly frozen, live/fresh, and shelf stable items ship in separate boxes to ensure optimal quality.
                </p>
                <ul className='text-lg font-normal text-gray-700 text-center text-wrap  gap-5'>
                    <li>
                    • Freshly frozen items ship the next business day with dry ice. They will be delivered within 2 days of shipment and arrive
                    frozen.
                    </li>
                    <li>
                    • Live and fresh items ship the next business day with gel packs. They will be delivered within 1 day of shipment and arrive cool
                    to the touch.
                    </li>
                    <li>• Shelf stable products are typically delivered within 3-5 days of the order being placed.</li>
                </ul>
                <div className='flex flex-col gap-5 text-left w-full'>
                    <img src={bg8} className="w-full h-44 object-cover object-bottom rounded-md" />
                </div>
                {/* CARD */}
                <div className='flex flex-col md:flex-row items-center gap-5 md:gap-28 py-10'>
                    {/* card 1 */}
                    <div className="card bg-warning text-primary-content w-96">
                        <div className="card-body">
                            <p className='text-black text-2xl font-semibold'>EXPORT WORLDWIDE</p>
                            <ul className='text-black text-base text-left list-disc'>
                                <li>Spanish Land Frozen (Fish Auction)</li>
                                <li>Spanish Seafrozen Fish</li>
                                <li>FAO61 Seafrozen Fish</li>
                            </ul>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="card bg-error text-primary-content w-96">
                        <div className="card-body">
                            <p className='text-black text-2xl font-semibold'>PROCESSING</p>
                            <ul className='text-black text-base text-left list-disc'>
                                <li>Fish Processing for HORECA/FOOD SERVICE</li>
                                <li>Distribution across all EU countries</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h1 className='text-2xl md:text-2xl font-bold text-green-700 text-wrap flex gap-4 items-center'>
                We are a group of companies dedicated to fishing, processing and
                commercialization of frozen fish & seafood
                </h1>
                <p className='text-lg font-normal text-gray-700 text-center text-wrap flex gap-5'>Our main activities are EXPORT OF FROZEN FISH & FISH PROCESSING
                FOR HORECA / FOOD SERVICE.
                </p>
                <p className='text-lg font-normal text-gray-700 text-center text-wrap flex gap-5'>Our Our main offices are located in Bilbao & Vigo (Spain), we have local
                offices in Italy, Poland, Czech Republic and Romania. Processing plant
                Is located in Czech Republic in the hearth of Europe which allows us
                easy distribution around all European Union.
                </p>
                <p className='text-lg font-normal text-gray-700 text-center text-wrap flex gap-5'>Our Our company culture strongly belleve in Kalzen methodology and
                putting in the first place a Corporate Social Responsibility and Service
                to the customer.
                </p>
                <p className='text-lg font-normal text-gray-700 text-center text-wrap flex gap-5'>Driven by a motto "We Live to Give" our vision is to
                offer through a culture of Honor, Discipline, Constancy and Teamwork
                the best possible products & services.</p>
            </div>
        </div>
    );
};

export default Shipping;