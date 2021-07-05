import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

export default function Form() {

    let history = useHistory();


    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        const myHeaders = new Headers();
        myHeaders.append("apikey", data.apikey);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let jsondata;
        fetch(`https://cors-anywhere.herokuapp.com/${data.endpoint}${data.hash}`, requestOptions)
            .then(response => response.json())
            .then(result => jsondata = result)
            .then(() => console.log(jsondata))
            .then(() => {history.push('/result')})
            .catch(error => console.log('error', error));





    }
    return (
        <div className="FormContainer">
            <form onSubmit={handleSubmit(onSubmit)} >
                <h2>Metadefender API</h2>
                <input type="text" placeholder="API Endpoint" name="endpoint" {...register('endpoint', { required: true })} />
                <input type="text" placeholder="API Key" name="apikey" {...register('apikey', { required: true })} />
                <input type="text" placeholder="Hash String" name="hash"{...register('hash', { required: true })} />
                <input type="submit" />

            </form>
        </div>
    )
}
