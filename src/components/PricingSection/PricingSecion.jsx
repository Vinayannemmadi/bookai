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
            <div className="text-2xl bg-[#6366f1] font-bold  text-center  p-[56px]" >
               <h1 className='text-[40px] font-sans'> Book Generator API </h1>
            </div>
            
            <div className='flex justify-center font-sans text-[#E2E8F0] font-sans text-[14px] flex-wrap space-x-9 py-[27px] px-7 bg-[#1e293b]'>
                <a href="/#overview" className="anchor font-bold hover:text-[#22d3ee] ">OVERVIEW</a>
                <a href="/#authentication" className="anchor font-bold hover:text-[#22d3ee] ">AUTHENTICATION</a>
                <a href="/#endpoints" className="anchor font-bold hover:text-[#22d3ee] ">ENDPOINTS</a>
                <a href="/#tutorial" className="anchor font-bold  hover:text-[#22d3ee]">TUTORIAL</a>
                <a href="/#code-examples" className="anchor font-bold hover:text-[#22d3ee]" >CODE EXAMPLES</a>
                <a href="/#api-pricing" className="anchor font-bold hover:text-[#22d3ee] ">PRICING</a>
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