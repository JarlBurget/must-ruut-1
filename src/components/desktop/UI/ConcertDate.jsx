const ConcertDate = ({ day, month, year, title }) => {
    return (
      <div className="py-4 flex flex-row items-center"> 
        <div className="text-5xl pe-3 lg:text-7xl pe-3">{day}</div>
        <div>
            <div className="text:3xl lg:text-2xl  concert-month">{month}</div>
            <div className="text:3xl lg:text-2xl concert-year">{year}</div>
        </div>
        <div className="ml-4 lg:ml-7 xl:ml-10 text:3xl lg:text-2xl flex-shrink min-w-0 break-words overflow-wrap-break">{title}</div>
      </div>
    );
  };
  
  export default ConcertDate;