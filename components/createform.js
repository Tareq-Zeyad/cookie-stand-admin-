import React from "react";
import axios from "axios";
import {useAuth} from '../contexts/auth'

export default function CreateForm(props) {
  const { tokens } = useAuth();
  const [cookieStands, setCookieStand] = React.useState([]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function eventHandler(event) {
    event.preventDefault();
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cookie_stands/`

    const cookieStand = {
      location: event.target.location.value,
      hourly_sales: [],
      minimum_customers_per_hour: event.target.minimum_customers_per_hour.value,
      maximum_customers_per_hour: event.target.maximum_customers_per_hour.value,
      average_cookies_per_sale: event.target.average_cookies_per_sale.value,
    };
    for (let i = 0; i < 14 ; i++) {
      let randomVal = getRandomInt(cookieStand.minimum_customers_per_hour, cookieStand.maximum_customers_per_hour)
      cookieStand.hourly_sales.push(randomVal)
    }

    axios.post(url, cookieStand, {
      headers:{
        'Authorization': `Bearer ${tokens.access}`
      }})
    .then(function (response) {
      setCookieStand((cookieStands) => [...cookieStands, cookieStand]);
      // props.addReport(cookieStand)
      props.updateReports()
    })
    .catch(error=>{
      console.log(error)
    })

    
  }
  return (
    <>
      <section className="bg-green-200 rounded-lg border-2 border-green-500 w-4/6 m-5 py-2">
        <h1 className="text-4xl my-6 font-bolder-40">Create Cookie Stand</h1>
        <form
          onSubmit={eventHandler}
          className="flex flex-col justify-center flex-1"
        >
          <div className="inline-flex justify-content w-full m-auto p-auto">
            <div className="w-2/3 px-20">
              <h3 className="font-bold">Location&nbsp; </h3>
              <input type="text" className="w-full h-8" name="location" placeholder="Cookie Stand Location" required/>
            </div>
            <button className="m-auto w-64 p-4 bg-green-600" type="submit">
              Create
            </button>
          </div>
          <section className="my-10 flex flex-wrap">
            <div className="m-auto w-3/12">
              <h3 className="font-bold">Minimum Customers Per Hour</h3>
              <input type="text" className="w-4/5 h-8" name="minimum_customers_per_hour" value="0" required/>
            </div>
            <div className="m-auto w-3/12">
              <h3 className="font-bold">Maximum Customers Per Hour</h3>
              <input type="text" className="w-4/5 h-8" name="maximum_customers_per_hour" value="0" required/>
            </div>
            <div className="m-auto w-3/12">
              <h3 className="font-bold">Average Cookies Per Sale</h3>
              <input type="text" className="w-4/5 h-8" name="average_cookies_per_sale" value="0" required/>
            </div>
          </section>
        </form>
      </section>
    </>
  );
}