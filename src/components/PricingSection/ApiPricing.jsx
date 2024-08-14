import PropTypes from 'prop-types';

const ApiPricing = ({ theme }) => {
  return (
    <div
      id="api-pricing"
      className={`${
        theme === 'light' ? 'text-black bg-white' : 'text-white bg-[#1e293b]'
      } p-[32px] m-[32px] rounded-md font-sans 
      sm:w-full sm:m-0 sm:p-4 
      md:w-[90%] md:m-4 md:p-6
      lg:w-[85%] lg:m-6 lg:p-8
      xl:w-[85%] xl:m-12 xl:p-10`}
    >
      <h1 className="text-[24px] mt-[32px] font-bold text-[#a5b4fc] sm:mt-4 sm:text-[20px] md:mt-6 md:text-[22px] lg:mt-8 lg:text-[24px] xl:mt-10 xl:text-[26px]">
        API Pricing
      </h1>
      <p className="my-3 text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
        Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
      </p>
      <div>
        <table className="table-auto w-full border-collapse border border-gray-600 rounded-md">
          <thead className="bg-[#6366f1] text-white">
            <tr className="border-b border-gray-300">
              <th className="p-4 text-left first:rounded-tl-lg last:rounded-tr-lg">API</th>
              <th className="p-4 text-left">MODEL</th>
              <th className="p-4 text-left">PRICE PER 1K TOKENS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-600">
              <td className="p-4">OpenAI</td>
              <td className="p-4">GPT-3.5</td>
              <td className="p-4">$0.002</td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className="p-4">OpenAI</td>
              <td className="p-4">GPT-4</td>
              <td className="p-4">$0.03</td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className="p-4">Together AI</td>
              <td className="p-4">Llama-2-70b</td>
              <td className="p-4">$0.0008</td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className="p-4">Together AI</td>
              <td className="p-4">Llama-2-13b</td>
              <td className="p-4">$0.0006</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-[#a5b4fc] text-[20px] mt-5">Token Estimation</h2>
        <p className="mb-10 text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
          On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
        </p>
      </div>
      <div>
        <h2 className="text-[#a5b4fc] text-[20px] mt-5">Billing</h2>
        <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
          You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
        </p>
      </div>
    </div>
  );
};

ApiPricing.propTypes = {
  theme: PropTypes.string,
};

export default ApiPricing;
