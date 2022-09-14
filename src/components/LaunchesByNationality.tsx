
export interface LaunchesByNationality {
    header: string;
  }
  
  const DashboardHeader: React.FC<LaunchesByNationality> = ({
    header,
  }: LaunchesByNationality) => {
    return (
        <div>
            <header className="flex py-11">
                <h2 className="font-bold text-2xl ">{header}</h2>
            </header>
            <div>
            
            </div>
        </div>
      
    );
  };
  
  export default DashboardHeader;