import React, { useState } from "react";
import "../CSS/Sell.css"

const Sell = () => {

    const [item, setItem] = useState([])
    const change = () => {
        var Cars = ["Skoda", "Toyota", "BMW", "Suzuki", "Tata", "Others"]
        var Furn = ["Sofa", , "DiningTable", "Shelf", "Showcase", "Others"]
        var Bikes = ["Suzuki", "Aprilla", "Bajaj", "Honda", "Ktm", "RoyalEnfield", "Others"]
        var EG = ["Mobile", "Tv", "AC", "Laptop", "Others"]

        switch (document.getElementById("cat").value) {
            case "Furniture":
                setItem(Furn);
                break;
            case "Cars":
                setItem(Cars);
                break;
            case "Bikes":
                setItem(Bikes);
                break;
            case "ElectronicGadgets":
                setItem(EG);
                break;
            default:
                setItem([]);
                break;
        }

    }

    return (

        <div className="sellBack">
            <div className="sellForm">

                <table  cellPadding={15} cellSpacing={5}>
                    <tr>
                        <td className="title" colSpan={2}>Sell Ur Pre-Owned Products </td>
                    </tr>
                    <tr>
                        <th>Choose a Category:</th>
                        <td><select id="cat" onChange={change}>
                            <option value="None">Select</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Cars">Cars</option>
                            <option value="Bikes">Bikes</option>
                            <option value="ElectronicGadgets">Electronic Gadgets</option>

                        </select></td>
                    </tr>
                    <tr>
                        <th>Choose a Type:</th>
                        <td><select>
                            {item.map((val, index) => (
                                <option key={index} value={val}>{val}</option>
                            ))}
                        </select></td></tr>
                    <tr>
                        <th>Product Name:</th>
                        <td><input type="text"></input></td>
                    </tr>
                    <tr>
                        <th>Product Description:</th>
                        <td><textarea placeholder="max-limit 200 characters" cols={5} maxLength={200}></textarea></td>
                    </tr>
                    <tr>
                    <th>Product's Age:</th>
                    <td><input type="number"></input></td>
                    </tr>
                    <tr>
                    <th>Quantity:</th>
                    <td><input type="number"></input></td>
                    </tr>
                    <tr>
                    <th>Price:</th>
                    <td><input type="number" placeholder="Rupees"></input></td>
                    </tr>
                    <tr>
                    <th>Product Images:</th>
                    <td><input type="file"></input></td>
                    </tr>
                    <tr>
                    <th>Product Location:</th>
                    <td><input type="test" placeholder="District,State,Country"></input></td>
                    </tr>
                    <tr>
                    <th>Price Offer:</th>
                    <td><select>
                        <option value="no">Not Negotiable</option>
                        <option value="yes">Negotiable</option>
                        </select></td>
                    </tr>
                    <tr>
                    <th>View Terms:</th>
                    <td><button>Terms & Conditions</button></td>
                    </tr>
                    <tr>
                    <th>I Accept The Terms <br/>and Conditions:</th>
                    <td><input type="checkbox" className="checkBox"></input></td>
                    </tr>
                    <tr>
            
                    <td colSpan={2}><button>SUBMIT</button></td>
                    
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Sell;