import React from "react";
import { hours } from "../../assets/data";

export default function ReportTable(props) {
  let rowTotals = []
  const calculateTotal = (array) =>
  {
    let total = 0
    for (let i = 0; i < array.length; i++) {
      total += array[i]       
    }
    return total
  }
  const resetRowTotals = ()=>{
    rowTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  }
  resetRowTotals()
  return (
    
    <section className="w-4/6 py-2 m-14">
      {props.reports.length == 0 && <h2>No Cookie Stands Available</h2>}
      {props.reports.length > 0 && (
        <table className="w-full mx-auto bg-green-500">
          <thead>
            <th>Location</th>
            {hours.map((hour) => {
              return <th>{hour}</th>;
            })}
            <th>Totals</th>
          </thead>
          <tbody>{props.reports.map((report) => {
              return(
                <tr>
                  {console.log(report)}
                  <td className="border-2 border-gray-800" border-black>{report.location}</td>
                  {report.hourly_sales.map((sale,i)=>{
                    rowTotals[i] += sale
                    console.log(`ADDING ${rowTotals[i]} to ${sale} with result OF ${rowTotals[i]+sale}`)
                    return <td className="border-2 border-gray-800">{sale}</td>
                  })}
                  <td className="border-2 border-gray-800">{calculateTotal(report.hourly_sales)}</td>
              </tr>)})}
            </tbody>
            <thead>
                <th  className="border-2 border-gray-800">Totals</th>
                {rowTotals.map((rowTotal) => {
                return <th className="border-2 border-gray-800">{rowTotal}</th>;
                })}
                <th className="border-2 border-gray-800">{calculateTotal(rowTotals)}</th>
            </thead>
        </table>
      )}
    </section>
  );
}