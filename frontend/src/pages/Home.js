import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { currencies } from "../currency";
import axios from "axios"
export default function Home() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState('')

  const onChange = (e) => {
    setAmount(e.target.value)
  }
  const onChangeCurrency = (e) => {
    setCurrency(e.target.value) 
  }
  const onSubmit = async  (e) => {
    e.preventDefault()
    let body = {
     amount: amount,
      to:currency
    }

    try {
    let res =  await axios.post("http://localhost:5000/api/convert", body)
    console.log(res.data)
    if(res){
     navigate(`currency/${res.data.result}`)
    }
    } catch (error) {

      alert("Please enter amount in number")
    }
    // console.log(currency, amount, "These are the values")
  }
  return (
    <>
      <h2>
        Currency Converter
      </h2>
      <form onSubmit={onSubmit}>
        <label for="amount"> Enter amount</label>
        <input type={"text"} value={amount} onChange={onChange} id="amount" placeholder="Enter in dollars $"></input>
        <label for="cars">Choose a Currency:</label>
        <select name="currencies" id="currency" value={currency} onChange={onChangeCurrency}>
          {currencies.map(curr => <option value={curr.currency_code}>{curr.country}</option>)}
        </select>
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}
