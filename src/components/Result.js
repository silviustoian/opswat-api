import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Result({ selectedData }) {



    const sha256 = selectedData[0];
    const sha1 = selectedData[1];
    const md5 = selectedData[2];
    const uploadedTime = selectedData[3];
    const scannedTime = selectedData[4];
    const scanDuration = selectedData[5];
    const fileType = selectedData[6];
    const fileExtension = selectedData[7];
    const fileSize = selectedData[8];


    return (
        <div className="RenderList">

            <ul>
                <h2>RESULTS</h2>
                SHA256
                <li>{sha256}</li>
                <hr></hr>
                SHA1
                <li>{sha1}</li>
                <hr></hr>
                MD5
                <li>{md5}</li>
                <hr></hr>
                Uploaded time
                <li>{uploadedTime}</li>
                <hr></hr>
                Scanned time
                <li>{scannedTime}</li>
                <hr></hr>
                Scan Duration
                <li>{scanDuration}</li>
                <hr></hr>
                File type
                <li>{fileType}</li>
                <hr></hr>
                File extension
                <li>{fileExtension}</li>
                <hr></hr>
                File size
                <li>{fileSize} Bytes | {fileSize/1024} KB</li>
                <hr></hr>
                
            </ul>
            
        </div>
    )
}
