import PropTypes from 'prop-types';

const Endpoints = ({ theme }) => {
    return (
        <div
            id="endpoints"
            className={`${
                theme === 'light' ? 'text-black bg-white' : 'text-white bg-[#1e293b]'
            } p-[20px] m-[28px] rounded-md font-sans 
            sm:w-[95%] sm:m-2 sm:p-4 
            md:w-[90%] md:m-4 md:p-6
            lg:w-[85%] lg:m-6 lg:p-8
            xl:w-[85%] xl:m-12 xl:p-10`}
        >
            <h1 className="text-[24px] mt-[32px] font-bold text-[#a5b4fc] sm:mt-4 sm:text-[20px] md:mt-6 md:text-[22px] lg:mt-8 lg:text-[24px] xl:mt-10 xl:text-[26px]">
                Endpoints
            </h1>
            <p className="mt-4 text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
                The Book Generator API provides the following endpoints:
            </p>
            <h3 className="text-[20px] font-bold mt-[32px] text-[#a5b4fc] sm:mt-4 sm:text-[18px] md:mt-6 md:text-[20px] lg:mt-8 lg:text-[22px] xl:mt-10 xl:text-[24px]">
                Generate Book
            </h3>
            <div className="flex justify-start space-x-5 mt-4 mb-14 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6">
                <p> 
                    <span className='bg-[#22d3ee] text-[#0f1728] pt-[0.25rem] pr-[0.5rem] pb-[0.25rem] pl-[0.5rem] mx-2 rounded-md sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-3 lg:py-3 xl:px-4 xl:py-4' > POST </span>
                    <span className="bg-[#6366f1] mx-4 text-white px-6 py-3  rounded-md font-bold sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-3lg:py-3 xl:px-4 xl:py-4">/api/generate-book </span>
                </p>
            </div>
            <div>
                <h4 className="text-[#a5b4fc] text-[16px] mb-4 sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
                    Request Body
                </h4>
                <table className="table-auto w-full border border-[#334155] rounded-md">
                    <thead className="bg-[#6366f1] text-white border-b border-[#334155]">
                        <tr>
                            <th className="p-4 text-left first:rounded-tl-lg last:rounded-tr-lg sm:p-2 md:p-3 lg:p-4 xl:p-5">
                                Parameter
                            </th>
                            <th className="p-4 text-left sm:p-2 md:p-3 lg:p-4 xl:p-5">
                                Type
                            </th>
                            <th className="p-4 text-left sm:p-2 md:p-3 lg:p-4 xl:p-5">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-[#334155]">
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">api</td>
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">string</td>
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">
                                The API provider to use. Options: "openai" or "together"
                            </td>
                        </tr>
                        <tr className="border-b border-[#334155]">
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">model</td>
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">string</td>
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">
                                The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")
                            </td>
                        </tr>
                        <tr className="border-b border-[#334155]">
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">topic</td>
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">string</td>
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">
                                The main topic or theme of the book
                            </td>
                        </tr>
                        <tr className="border-b border-[#334155]">
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">language</td>
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">string</td>
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">
                                The language in which the book should be generated
                            </td>
                        </tr>
                        <tr className="border-b border-[#334155]">
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">word_count</td>
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">integer</td>
                            <td className="p-4 sm:p-2 md:p-3 lg:p-4 xl:p-5">
                                The approximate number of words for the generated book
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h4 className="text-[#a5b4fc] text-[16px] mt-5 sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
                    Response
                </h4>
                <div className="p-4 rounded-md border border-[#334155] mt-4">
                    <pre className={`whitespace-pre-wrap text-sm ${theme==='light'?"text-black":"text-white"} font-mono p-2 rounded-md sm:text-xs md:text-sm lg:text-base xl:text-lg`}>
                        {JSON.stringify(responce, null, 2)}
                    </pre>
                </div>
            </div>
        </div>
    );
};

const responce = {
    message: "Book generation started",
    status: "processing",
    job_id: "unique-job-identifier"
};

Endpoints.propTypes = {
    theme: PropTypes.string,
};

export default Endpoints;
