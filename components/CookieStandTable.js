import { IconContext } from "react-icons";
import {FaTrash} from 'react-icons/fa'
import {useAuth} from '../contexts/auth'
import axios from "axios";

export default function CookieStandTable(props) {
  const {tokens} = useAuth();
  let itemID = props.id || null;
  const deleteSelf = (event) =>{
    event.preventDefault();
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cookie_stands/${itemID}`
    //send a request to delete this item
    axios
    .delete(url, {
      headers:{
        'Authorization': `Bearer ${tokens.access}`
      }
    })
    .then((result) => {
      console.log("Sucessful!")
      props.updateReports()
    })
    .catch((err) => {
      console.log(err);
    });
  }
  return (
    <tr className="odd:bg-green-200 bg-green-300">
      <td className="border-2 border-green-500 w-40" border-black>
        <div className="p-2 m-auto h-full w-full align-middle mb-5">
            <h2 className="float-left p-auto font-bold">{props.location}</h2>
            <button onClick={deleteSelf} className="float-right p-1 ">
                <IconContext.Provider value={{ color: 'red'}}>
                    <FaTrash />
                </IconContext.Provider>
            </button>
        </div>
      </td>
      {Array.isArray(props.hourly_sales) && props.hourly_sales.map(sale => {
        return <td className="border-2 border-green-500">{sale}</td>;
      })}
      <td className="border-2 border-green-500">
        {props.hourly_sales_total}
      </td>
    </tr>
  );
}