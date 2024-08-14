import PropTypes from 'prop-types';

const Tutorial = ({ theme }) => {
    return (
        <div
            id="tutorial"
            className={`${
                theme === 'light' ? 'text-black bg-white' : 'text-white bg-[#1e293b]'
            } p-[32px] m-[32px] rounded-md font-sans 
            sm:w-full sm:m-0 sm:p-4 
            md:w-[90%] md:m-4 md:p-6
            lg:w-[85%] lg:m-6 lg:p-8
            xl:w-[85%] xl:m-12 xl:p-10`}
        >
            <h1 className="text-[24px] mt-[32px] font-bold text-[#a5b4fc] sm:mt-4 sm:text-[20px] md:mt-6 md:text-[22px] lg:mt-8 lg:text-[24px] xl:mt-10 xl:text-[26px]">
                Tutorial
            </h1>
            <div>
                <div className="mt-5 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
                    <h3 className="text-[#a5b4fc] text-[18px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                        Step 1: Obtain an API key
                    </h3>
                    <p className="mt-2 sm:mt-1 md:mt-2 lg:mt-3 xl:mt-4">
                        Generate an API key using the button in the Authentication section above.
                    </p>
                </div>
                <div className="mt-5 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
                    <h3 className="text-[#a5b4fc] text-[18px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                        Step 2: Make a Request
                    </h3>
                    <p className="mt-2 sm:mt-1 md:mt-2 lg:mt-3 xl:mt-4">
                        Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.
                    </p>
                </div>
                <div className="mt-5 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
                    <h3 className="text-[#a5b4fc] text-[18px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                        Step 3: Handle the Response
                    </h3>
                    <p className="mt-2 sm:mt-1 md:mt-2 lg:mt-3 xl:mt-4">
                        The API will return a response with a job ID. You can use this ID to check the status of your book generation job.
                    </p>
                </div>
                <div className="mt-5 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10">
                    <h3 className="text-[#a5b4fc] text-[18px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                        Step 4: Retrieve the Generated Book
                    </h3>
                    <p className="mt-2 sm:mt-1 md:mt-2 lg:mt-3 xl:mt-4">
                        Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).
                    </p>
                </div>
            </div>
        </div>
    );
};

Tutorial.propTypes = {
    theme: PropTypes.string,
};

export default Tutorial;
