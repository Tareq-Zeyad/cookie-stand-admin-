import Header from './header'
import Footer from './footer'
import CreateForm from "./createform";
import ReportTable from './reporttable';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useAuth} from '../contexts/auth'

export default function CookieStandAdmin() {
  const { tokens } = useAuth();
  console.log(tokens)
  const [reports, setReportsArray] = React.useState([]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }


  const getReports = () =>{
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cookie_stands/` 
    axios
    .get(url, {
      headers:{
        'Authorization': `Bearer ${tokens.access}`
      }
  })
    .then((result) => {
      let dataArray = result.data
      for (let i = 0; i < dataArray.length; i++) {
        if (Array.isArray(dataArray[i].hourly_sales) == false || dataArray[i].hourly_sales.length < 14){
          let hourly_sales = [];
          for (let i = 0; i < 14; i++) {
            let randomVal = getRandomInt(5, 50)
            hourly_sales.push(randomVal)
          }
          dataArray[i].hourly_sales = hourly_sales;
        }
      }
      setReportsArray(dataArray)
    })
    .catch((err) => {
      console.log(err);
    });
  }
  function addReport(report)
  {
    setReportsArray((reports) => [...reports, report]);
  }
  useState(() => {
    // Update the document title using the browser API
    getReports()
  });
 
  return (<>
      <Header/>
      <main className="flex flex-col items-center flex-1 w-full px-20 text-center bg-green-50">
        <CreateForm updateReports={getReports}/>
        <ReportTable reports={reports} updateReports={getReports}/>
      </main>
      <Footer locationsCount={reports.length}/>
    </>
  )
}