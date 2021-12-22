import React from 'react';
import Header from './header'
import Footer from './footer'
import CreateForm from "./createform";
import ReportTable from './reporttable';

export default function CookieStandAdmin() {
  const [reports, setReportsArray] = React.useState([]);
  function addReport(report)
  {
    setReportsArray((reports) => [...reports, report]);
  }
  return (<>
      <Header/>
      <main className="flex flex-col items-center w-full flex-1 px-20 text-center bg-green-50">
        <CreateForm addReport={addReport}/>
        <ReportTable reports={reports}/>
      </main>
      <Footer locationsCount={reports.length}/>
    </>
  )
}