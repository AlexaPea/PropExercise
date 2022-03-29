import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import TableDisplay from './TableDisplay';

const TableContent = () => {

const [flightInfo, setFlightInfo] = useState([]);
// const [showInfo, setShowInfo] = useState();

    useEffect(()=>{
        axios.get("https://api.spacexdata.com/v5/launches")
        .then((res)=>{
            let data=res.data;

            const numFlights = data.length;

            let flightData = [];

            for(let i =0; i< 30;i++){
                flightData.push({
                    imgUrl: data[i].links.patch.small,
                    flightNum: data[i].flight_number,
                    flightName: data[i].name,
                    flightSuccess: data[i].success,
                    videoLink: data[i].links.youtube_id,
                    artLink: data[i].links.article,
                    wikkiLink: data[i].links.wikipedia,
                    webcastLink: data[i].links.webcast,
                    id: data[i].id,

                })
            }

            setFlightInfo(flightData);

            // let showInfo = flightData.map((item)=> <TableDisplay key={item.id} img={item.imgUrl} num={item.flightNum} name={item.flightName} success={item.flightSuccess} youtube={item.videoLink} article={item.artLink} wikki={item.wikkiLink} webcast={item.webcastLink}/>);

            

            


        })
    }, [])

    console.log(flightInfo)
    let info = flightInfo.map((item)=> <TableDisplay key={item.id} img={item.imgUrl} num={item.flightNum} name={item.flightName} success={item.flightSuccess} youtube={item.videoLink} article={item.artLink} wikki={item.wikkiLink} webcast={item.webcastLink}/>);
    console.log(info)
    
    return (
        <div>

            <h3>Launch Information</h3>
            <h5>Here information regarding each launch is provided</h5>

            <TableDisplay/>
            {/* {showInfo} */}
            
        </div>
    );
};

export default TableContent;