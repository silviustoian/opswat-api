import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

export default function Form({setSelectedData}) {
    
    let history = useHistory();


    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        //setSelectedData(data);
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
            .then(() => setSelectedData([jsondata.file_info.sha256, jsondata.file_info.sha1, jsondata.file_info.md5, jsondata.file_info.upload_timestamp,jsondata.scan_results.start_time,
            jsondata.scan_results.start_time, jsondata.file_info.file_type_category, jsondata.file_info.file_type_extension, jsondata.file_info.file_size]))
            .then(() => {history.push('/result')})
            .catch(error => alert('Wrong data used, check console for more!', error));
       
        




    }
    return (
        <div className="FormContainer">
            <form onSubmit={handleSubmit(onSubmit)} >
                <h2>Metadefender API</h2>
                <input type="text" placeholder="API Endpoint" name="endpoint" {...register('endpoint', { required: true })} />
                <input type="text" placeholder="API Key" name="apikey" {...register('apikey', { required: true })} />
                <input type="text" placeholder="Hash String" name="hash"{...register('hash', { required: true })} />
                <input type="submit" value="Search"/>

            </form>
        </div>
    )
}
