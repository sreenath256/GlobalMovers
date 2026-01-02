const Counter = () => {
    return (
        <div className="w-11/12 mx-auto overflow-hidden ">
            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-gray-200 ">
                {/* Stat 1 */}
                <div className="text-center">
                    <div className="text-5xl font-semibold text-gray-900 mb-2">
                        10K<span className="text-primary">+</span>
                    </div>
                    <p className="text-gray-500 uppercase text-sm tracking-wider">
                        Projects Done
                    </p>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                    <div className="text-5xl font-semibold text-gray-900 mb-2">
                        10K<span className="text-primary">+</span>
                    </div>
                    <p className="text-gray-500 uppercase text-sm tracking-wider">
                        Happy Clients
                    </p>
                </div>

                {/* Stat 3 */}
                <div className="text-center">
                    <div className="text-5xl font-semibold text-gray-900 mb-2">
                        15K<span className="text-primary">+</span>
                    </div>
                    <p className="text-gray-500 uppercase text-sm tracking-wider">
                        Years Business
                    </p>
                </div>

                {/* Stat 4 */}
                <div className="text-center">
                    <div className="text-5xl font-semibold text-gray-900 mb-2">
                        80,000<span className="text-primary">+</span>
                    </div>
                    <p className="text-gray-500 uppercase text-sm tracking-wider">
                        Sq. ft. Storage
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Counter