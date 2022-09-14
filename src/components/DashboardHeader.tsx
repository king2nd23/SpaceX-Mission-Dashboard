import { Cog8ToothIcon } from '@heroicons/react/24/outline'
import { BuildingOffice2Icon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import * as detailedLaunches from '../datasets/detailedLaunches.json';

function init(){
  generateLaunchSites();
}

export interface DashboardHeaderProps {
  header: string;
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

//toggle header tools menus and btn style
function handleToolItemMenu(e: any){
  e.stopPropagation()

    if (e.target === e.currentTarget) {
      e.target.nextElementSibling.classList.contains('hidden') ?
      e.target.nextElementSibling.classList.remove('hidden') :
      e.target.nextElementSibling.classList.add('hidden');

      e.target.classList.toggle('btn-active')
    }
}
let launchSitesArr: Array<any> = [];

let generateLaunchSites = () => {
  let launchSites: Array<any> = [];
  let launchSitesList: Array<any> = [];

  //create array objects with each launch sites's name and ID
  detailedLaunches.data.launches.forEach((el, i) => { 
    launchSites.push(el.launch_site)
  })

  //remove duplicate launch site data
  launchSites = launchSites.reduce((unique, o) => {
    
    if(!unique.some((obj: { site_id: string; site_name: string; }) => obj.site_id === o.site_id && obj.site_name === o.site_name)) {
      unique.push(o);
    }
    return unique;
  },[]);
  
  launchSites.forEach((item, i) => launchSitesList.push(<li key={item+i} data-siteid={item.site_id} className='text-sm font-light py-3 px-4 border-b'>{item.site_name}</li>)); // we push a JSX element containing a value to our 'myArrMadeFromForEach' because `.forEach()` does not return any value, nor does it mutate the array on which it is called
  launchSitesArr = launchSitesList;
}

init();

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  header,
}: DashboardHeaderProps) => {
  return (
    <header className="flex py-11 flex-wrap justify-between gap-y-5	">
      <h1 className="font-bold text-2xl ">{header}</h1>
      <div className="header-tools flex">
        <div className="header-tools__item flex flex-col items-end mr-4" >
          <button onClick={handleToolItemMenu} className='w-10 h-10 header-tool-toggle items-center inline-flex justify-center rounded-md border border-gray-300 bg-white p-1.5 text-sm font-medium 
            text-gray-700 shadow-sm hover:bg-gray-50'>
                <Cog8ToothIcon className="h-6 w-6 h-3.5 stroke-2 pointer-events-none" aria-hidden="true" color="#0981C3"/>            
          </button>
          <ul className='hidden items-center w-full justify-center rounded-md border border-gray-300 bg-white text-sm font-medium 
            text-gray-700 shadow-sm hover:bg-gray-50'>
            <li className='text-sm font-light py-3 px-4 border-b flex'>
              <p className='mr-6'>Light / Dark Theme</p>
              <label className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
              <div className="w-11 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
              peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600"></div>
              </label>
            </li>
            <li className='text-sm font-light py-3 px-4'>Logout</li>
          </ul>
        </div>
        <div className="header-tools__item flex flex-col items-end" >
          <button onClick={handleToolItemMenu} className='cursor-pointer w-full flex header-tool-toggle h-10 items-center inline-flex justify-center rounded-md border border-gray-300 bg-white p-1.5 text-sm font-medium 
            text-gray-700 shadow-sm hover:bg-gray-50'>
                <BuildingOffice2Icon className="h-6 w-6 h-3.5 stroke-2 pointer-events-none" aria-hidden="true" color="#0981C3"/>  
                <label className='cursor-pointer'>Launch Site</label>
                <ChevronDownIcon className="h-6 w-6 h-3.5 stroke-2 pointer-events-none" aria-hidden="true" color="#0981C3"/>         
          </button>
          <ul className='launch-site-list hidden items-center w-full justify-center rounded-md border border-gray-300 bg-white text-sm font-medium 
            text-gray-700 shadow-sm hover:bg-gray-50'>
              {launchSitesArr}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
