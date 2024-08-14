import PropTypes from 'prop-types';

const Authentication = ({ theme }) => {
    return (
        <div
            id="authentication"
            className={`${
                theme === 'light' ? 'text-black bg-white' : 'text-white bg-[#1e293b]'
            } p-[32px] m-[32px] rounded-md text-sans 
            sm:w-full sm:m-0 sm:p-4 
            md:w-[90%] md:m-4 md:p-6
            lg:w-[85%] lg:m-6 lg:p-8
            xl:w-[85%] xl:m-12 xl:p-10`}
        >
            <h1 className="text-[24px] mt-[32px] font-bold text-[#a5b4fc] sm:mt-4 sm:text-[20px] md:mt-6 md:text-[22px] lg:mt-8 lg:text-[24px] xl:mt-10 xl:text-[26px]">
                Authentication
            </h1>
            <p className="mt-4 text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
                To use the API, you need to include your API key in the header of each request:
            </p>
            <div className="border-[1px] border-[#334155] p-[14px] my-3 rounded-md sm:p-2 md:p-3 lg:p-4 xl:p-5">
                X-API-Key: YOUR_API_KEY
            </div>
            <p className="mt-4 text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
                To generate an API key, use the button below:
            </p>
            <button className="border-[1px] bg-[#22d3ee] text-black px-[32px] py-[10px] border-[#334155] my-3 rounded-md font-bold sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5">
                Generate API key
            </button>
        </div>
    );
};

Authentication.propTypes = {
    theme: PropTypes.string,
};

export default Authentication;
