import PropTypes from 'prop-types';

const CodeExamples = ({ theme }) => {
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
        Code Examples
      </h1>

      <h3 className="text-[20px] font-bold mt-[32px] mb-5 text-[#a5b4fc] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
        Python
      </h3>
      <pre className={`whitespace-pre-wrap text-sm ${theme==='light'?"text-black":"text-white"} border border-[#334155] p-2 rounded-md sm:text-xs md:text-sm lg:text-base xl:text-lg`}>
        <code>{pythonCode}</code>
      </pre>

      <h3 className={`text-[20px] font-bold mt-5 mb-5 text-[#a5b4fc] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]`}>
        JavaScript
      </h3>
      <pre className={`whitespace-pre-wrap text-sm ${theme==='light'?"text-black":"text-white"} border border-[#334155] p-2 rounded-md sm:text-xs md:text-sm lg:text-base xl:text-lg`}>
        <code>{JavaScript}</code>
      </pre>
    </div>
  );
};

CodeExamples.propTypes = {
  theme: PropTypes.string,
};

const pythonCode = `
import requests

API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")
`;

const JavaScript = `
const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
`;

export default CodeExamples;
