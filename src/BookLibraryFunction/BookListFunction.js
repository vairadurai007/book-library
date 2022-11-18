import { useEffect, useState } from 'react';
import './BookLibrary.css'

export default function BookListFunction(props) {

    const [reciveFormValues, setReciveFormValues] = useState([])

    useEffect(() => {
        setReciveFormValues(props.formValues)
    }, [props])

    const deleteFunction = (index) => {
        const listValues = reciveFormValues.filter((element,formIndex) => {
            return (
                index !== formIndex
            )
        })
        setReciveFormValues(listValues)
        console.log(index);
    }

    return (

        <div className='flex-container'>
            {(reciveFormValues).map((data, index) => {

                return (

                    <div key={index} className="mini-child-container">
                        <div className='list-container'>
                            <h1 className="child-heading">Book List<span>{index + 1}</span></h1>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Author Name</th>
                                            <th>Book Quantity</th>
                                            <th>Book Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='td-string'>{data.author}</td>
                                            <td className='td-integer'>{data.quantity}</td>
                                            <td className='td-integer'>{data.price}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='buttons'>
                                <button className="edit-button">Edit</button>
                                <button onClick={() => deleteFunction(index)} className="delete-button">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}   