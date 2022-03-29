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

            for(let i =0; i< numFlights;i++){
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

    // console.log(flightInfo)
    //map - goes through each object/item in an array
    //so intro is going through each object and printing it as specified
    let info = flightInfo.map((item)=> <TableDisplay key={item.id} img={item.imgUrl} num={item.flightNum} name={item.flightName} success={String(item.flightSuccess)} youtube={item.videoLink} article={item.artLink} wikki={item.wikkiLink} webcast={item.webcastLink}/>);
    // console.log(info)
    
    return (
        <div>

            <h3>Launch Information</h3>
            <h5>Here information regarding each launch is provided</h5>

            <TableDisplay/>
            {/* this runs info so the flights appear */}
            {info}
            
        </div>
    );
};

export default TableContent;