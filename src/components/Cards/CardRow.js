import React from "react";

// components

export default function CardRow(props) {
  const intt = Math.abs(props.dayRate).toString();
  return (
    <>
          <table  className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Vol(24h)
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Daily</th>
              </tr>
            </thead>
            <tbody >
              <tr >
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  {props.currency}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {props.vol}
                </td>
                <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  <div className="flex items-center">
                  <span  className="">{props.dayRate<0 ?'-':''}</span>
                    <span className="mr-2">{intt}%</span>
                    <div className="relative w-full ">
                      <div className={`overflow-hidden h-2 text-xs flex rounded ${props.dayRate>0?'bg-green-200':'bg-red-200'} `}>
                        <div
                          style={{ width: `${intt}%` }}
                          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center  ${props.dayRate>0?'bg-green-500':'bg-red-500'}`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>    
            </tbody>
          </table>             
    </>
  );
}
