import PropTypes from 'prop-types';

const Overview = ({ theme }) => {
    return (
        <div
            id="overview"
            className={`${
                theme === 'light' ? 'text-black bg-white' : 'text-white bg-[#1e293b]'
            } p-[32px] m-[32px] rounded-md text-sans 
            sm:w-full sm:m-0 sm:p-4 
            md:w-[90%] md:m-4 md:p-6
            lg:w-[85%] lg:m-6 lg:p-8
            xl:w-[85%] xl:m-12 xl:p-10`}
        >
            <h1 className="text-[24px] mt-[32px] font-bold text-[#a5b4fc] sm:mt-4 sm:text-[20px] md:mt-6 md:text-[22px] lg:mt-8 lg:text-[24px] xl:mt-10 xl:text-[26px]">
                Overview
            </h1>
            <p className="mt-4 text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
                The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.
            </p>
        </div>
    );
};

Overview.propTypes = {
    theme: PropTypes.string,
};

export default Overview;
