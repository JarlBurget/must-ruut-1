const ConcertDate = ({ day, month, year, title }) => {
    return (
      <div className="grid grid-cols-2 xl:grid-cols-7 w-full items-center">
        <div className="grid grid-cols-2 items-center xl:col-span-3 max-w-40 xl:max-w-50 border-r-4 border-red-800">
          <div className="text-5xl pe-3 lg:text-6xl xl:text-7xl p-3">{day}</div>
          <div>
              <div className="text:3xl lg:text-2xl  concert-month">{month}</div>
              <div className="text:3xl lg:text-2xl concert-year">{year}</div>
          </div>
        </div>
        <div className="pl-2 lg:text-2xl min-w-0 break-words overflow-wrap-break xl:col-span-4">{title}</div>
      </div>
    );
  };
  
  export default ConcertDate;