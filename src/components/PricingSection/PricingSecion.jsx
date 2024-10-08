import Overview from './Overview';
import Endpoints from './Endpoints';
import Authentication from './Authentication';
import ApiPricing from './ApiPricing';
import CodeExamples from './CodeExamples';
import Tutorial from './Tutorial';
import themeContext from '../store/theme-context';
import { useContext } from 'react';
const PricingSection=()=>{

    const {theme} = useContext(themeContext);

    return (
        <div className={`${theme=='light'?"text-black bg-white":"text-white bg-[#111827] "} `}>
            <div className="flex bg-[#6366f1] font-bold justify-center  text-center  w-full py-16 " >
            <h1 className='text-[30px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px]  my-auto'>
                Book Generator API
            </h1>

            </div>
            
            <div className='flex flex-col md:flex-row md:flex-wrap justify-center sm:space-x-6 sm:space-y-7  md:space-y-0 md:space-10 
                sticky top-0 z-1000   font-sans text-[#E2E8F0] text-[14px] mb-10 text-center md:space-7 py-[27px]  bg-[#1e293b] 
                shadow-2xl '>
                <a href="/#overview" className="font-bold hover:text-[#22d3ee]">OVERVIEW</a>
                <a href="/#authentication" className="font-bold hover:text-[#22d3ee]">AUTHENTICATION</a>
                <a href="/#endpoints" className="font-bold hover:text-[#22d3ee]">ENDPOINTS</a>
                <a href="/#tutorial" className="font-bold hover:text-[#22d3ee]">TUTORIAL</a>
                <a href="/#code-examples" className="font-bold hover:text-[#22d3ee]">CODE EXAMPLES</a>
                <a href="/#api-pricing" className="font-bold hover:text-[#22d3ee]">PRICING</a>
            </div>

            
            <div className='flex justify-center flex-col items-center mx-auto space-y-10 pb-16 max-w-[1000px]' >
                <Overview theme={theme}/>
                <Authentication theme={theme}/>
                <Endpoints theme={theme}/>
                <Tutorial theme={theme}/>
                <CodeExamples theme={theme}/>
                <ApiPricing theme={theme}/>
            </div>
        </div>
    )
}

export default PricingSection;