import React from 'react'

import './Card.css'
import backlogIcon from '../../icons/Backlog.svg'
import cancelledIcon from '../../icons/Cancelled.svg'
import threeDotMenuIcon from '../../icons/3 dot menu.svg';
import addIcon from '../../icons/add.svg';
import displayIcon from '../../icons/Display.svg';
import doneIcon from '../../icons/Done.svg';
import downIcon from '../../icons/down.svg';
import highPriorityIcon from '../../icons/Img - High Priority.svg';
import lowPriorityIcon from '../../icons/Img - Low Priority.svg';
import mediumPriorityIcon from '../../icons/Img - Medium Priority.svg';
import inProgressIcon from '../../icons/in-progress.svg';
import noPriorityIcon from '../../icons/No-priority.svg';
import urgentPriorityColorIcon from '../../icons/SVG - Urgent Priority colour.svg';
import urgentPriorityGreyIcon from '../../icons/SVG - Urgent Priority grey.svg';

export default function Card(props) {
  return (
    <>
        <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id">{props.cardDetails.id}</div>
                <div className="card-profile">
                    <div className="card-profile-initial">{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
                    <div className={props.cardDetails.userObj.available ?"card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
                </div>
            </div>
            <div className="card-title">
                {props.cardDetails.title}
            </div>
            <div className="card-tag">
                {
                    {
                        0: <div className="card-tag-icon"><img src={noPriorityIcon} alt="0 Icon" /></div>,
                        1: <div className="card-tag-icon"><img src={lowPriorityIcon} alt=" 1 Icon" /></div>,
                        2: <div className="card-tag-icon"><img src={mediumPriorityIcon} alt="2 Icon" /></div>,
                        3: <div className="card-tag-icon"><img src={highPriorityIcon} alt="3 Icon" /></div>,
                        4: <div className="card-tag-icon"><img src={urgentPriorityGreyIcon} alt="4 Icon" /></div>
                    }[props.cardDetails.priority]
                }

                {
                    props.cardDetails.tag.map((tag) => {
                        return(
                            <div className="card-tag-box">
                                <div className="card-tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
