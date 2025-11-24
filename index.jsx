import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import { decodeBase64 } from '../../../utils/decodeBase64.js';
/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 75; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 5); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    window.location.href = 'https://www.humanrightsfirst.org';
  };

  return (
    <>
      <div className='flex flex-col items-center w-full bg-[#f7f7f0] text-[#3a3a3a] font-serif'>
        <header className='w-full bg-[#7a7466] text-white py-8 text-center'>
          <h1 className='text-4xl font-bold mb-2'>Asylum Office Grant Rate Tracker</h1>
          <p className='max-w-2xl mx-auto text-sm text-gray-200'>
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public with an interactive tool to explore USCIS
            data on Asylum Office decisions.
          </p>
        </header>

        <section className='w-full flex flex-col items-center py-16'>
          <div className='flex flex-wrap justify-center gap-12 mb-8'>
            <div className='flex flex-col items-center w-[260px]'>
              <img src={barGraph} alt='Search Grant Rates By Office' className='w-[230px] h-[150px] object-cover shadow-md mb-3 rounded-md' />
              <p className='text-sm font-medium text-center'>Search Grant Rates By Office</p>
            </div>
            <div className='flex flex-col items-center w-[260px]'>
              <img src={pieChart} alt='Search Grant Rates By Nationality' className='w-[230px] h-[150px] object-cover shadow-md mb-3 rounded-md' />
              <p className='text-sm font-medium text-center'>Search Grant Rates By Nationality</p>
            </div>
            <div className='flex flex-col items-center w-[260px]'>
              <img src={lineGraph} alt='Search Grant Rates Over Time' className='w-[230px] h-[150px] object-cover shadow-md mb-3 rounded-md' />
              <p className='text-sm font-medium text-center'>Search Grant Rates Over Time</p>
            </div>
          </div>

          <div className='flex flex-wrap justify-center gap-4'>
            <button onClick={() => navigate('/graphs')} className='bg-[#b6b3ac] text-white px-4 py-2 rounded text-sm hover:bg-[#5f594e] transition'>
              View the Data
            </button>
            <button onClick={downloadCSV} className='bg-[#b6b3ac] text-white px-4 py-2 rounded text-sm hover:bg-[#5f594e] transition'>
              Download the Data
            </button>
          </div>
        </section>

        <section className='flex flex-row md:flex-row items-center justify-center text-center md:text-left px-4 md:px-12 lg:px-24 mb-16 gap-8 md:gap-16'>
          <img src={paperStack} alt='Paper Stack' className='w-[420px] md:w-[400px] lg:w-[480px] rounded shadow-md object-cover' />
          <div className='md:w-1/2 text-sm leading-relaxed text-gray-800'>
            <p>
              Human Rights First has created a search tool to give you a user-friendly way to explore a dataset of asylum decisions between FY 2016 and May 2021
              by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates
              by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the dataset.
            </p>
          </div>
        </section>

        <section className='bg-white py-16 text-center w-full px-4 md:px-12 lg:px-24'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-12'>Systemic Disparity Insights</h2>
          <div className='flex flex-wrap justify-center gap-8 max-w-5xl mx-auto mb-10'>
            <div className='w-[250px]'>
              <p className='text-7xl font-bold mb-2'>36%</p>
              <p className='text-sm'>
                By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 64 percent in fiscal year 2016 to
                28 percent in fiscal year 2020.
              </p>
            </div>
            <div className='w-[250px]'>
              <p className='text-7xl font-bold mb-2'>5%</p>
              <p className='text-sm'>The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</p>
            </div>
            <div className='w-[250px]'>
              <p className='text-7xl font-bold mb-2'>6x Lower</p>
              <p className='text-sm'>
                Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.
              </p>
            </div>
          </div>
          <button onClick={handleReadMore} className='bg-[#b6b3ac] text-white px-6 py-2 rounded hover:bg-[#5f594e] transition'>
            Read More
          </button>
          <div className='mt-8'>
            <button onClick={scrollToTop} className='bg-[#b6b3ac] text-white px-6 py-2 rounded hover:bg-[#5f594e] transition'>
              Back To Top
            </button>
          </div>
        </section>

        <footer className='bg-[#7a7466] text-gray-200 text-center py-8 text-xs leading-relaxed w-full'>
          <p>Human Rights First</p>
          <p>75 Broad St, 31st Floor</p>
          <p>New York, New York 10004 US</p>
          <p>For Media Inquiries call 202-370-333</p>
          <div className='mt-4 space-x-3'>
            {['About Us', 'Contact Us', 'Press', 'Terms & Privacy', 'Sign Up', 'Careers'].map(item => (
              <button key={item} className='hover:underline hover:bg-[#5f594e] transition'>
                {item}
              </button>
            ))}
          </div>
          <p className='mt-4 text-gray-300'>Landing Page {'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</p>
        </footer>
      </div>
    </>
  );
};
