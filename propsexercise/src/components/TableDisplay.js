import React from 'react';

const TableDisplay = (props) => {

    let baseUrl = 'https://www.youtube.com/watch?v=';
    let fullUrl = baseUrl + props.youtube;

    return (
        <div>
            <div className="TableItem">
                <img src={props.img}/>
                <p><strong>Flight Number:</strong> {props.num} </p>
                <p><strong>Flight Name:</strong> {props.name} </p>
                <p><strong>Success:</strong> {props.success}</p>
                <a href={fullUrl} target='_blank'><div className={'button youtube'}>Watch the Launch</div></a>
                <a href={props.article}  target='_blank'><div className='button article'>Read About it</div></a>
                <a href={props.wikki}  target='_blank'><div className='button Wiki'>Find out more</div></a>
                <a href={props.webcast}  target='_blank'><div className='button webcast'>Webcast</div></a>
                
            </div>
            
        </div>
    );
};

export default TableDisplay;