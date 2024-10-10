import React from 'react'

import './List.css'
import Card from '../Card/Card'
import backlogIcon from '../../icons/Backlog.svg'
import cancelledIcon from '../../icons/Cancelled.svg'
import doneIcon from '../../icons/Done.svg';
import highPriorityIcon from '../../icons/Img - High Priority.svg';
import lowPriorityIcon from '../../icons/Img - Low Priority.svg';
import mediumPriorityIcon from '../../icons/Img - Medium Priority.svg';
import inProgressIcon from '../../icons/in-progress.svg';
import noPriorityIcon from '../../icons/No-priority.svg';
import urgentPriorityColorIcon from '../../icons/SVG - Urgent Priority colour.svg';
import toDoIcon from '../../icons/To-do.svg';


let cardCount = 0;

export default function List(props) {
  return (
    <>
        <div className="list-container">
            <div className="list-header">
                <div className="list-header-left">
                    {
                        {
                            'status' : <>{
                                {
                                    'Backlog': <div className="list-icon">
                                    <img src={backlogIcon} alt="Icon" />

                                    </div>,
                                    'Todo': <div className="list-icon">
                                    <img src={toDoIcon} alt="Icon" />
                                    </div>,
                                    'In progress': <div className="list-icon">
                                    <img src={inProgressIcon} alt="Icon" />
                                    </div>,
                                    'Done': <div className="list-icon">
                                    <img src={doneIcon} alt="Icon" />
                                    </div>,
                                    'Cancelled': <div className="list-icon">
                                    <img src={cancelledIcon} alt="Icon" />
                                    </div>
                                }[props.listTitle]
                            } </>,
                            'user': <></>,
                            'priority' : <>{
                                {
                                    0: <div className="card-tag-icon"><img src={noPriorityIcon} alt="0 Icon" /></div>,
                                    1: <div className="card-tag-icon"><img src={lowPriorityIcon} alt=" 1 Icon" /></div>,
                                    2: <div className="card-tag-icon"><img src={mediumPriorityIcon} alt="2 Icon" /></div>,
                                    3: <div className="card-tag-icon"><img src={highPriorityIcon} alt="3 Icon" /></div>,
                                    4: <div className="card-tag-icon"><img src={urgentPriorityColorIcon} alt="4 Icon" /></div>
                                }[props.listTitle]
                            } </>
                        }[props.groupValue]
                    }
                    
                    <div className="list-title">
                        {
                            {
                                'priority' : <>{
                                                props.priorityList
                                                    ? props.priorityList.map(priorityProperty => (
                                                        priorityProperty.priority === props.listTitle
                                                        ? <>{priorityProperty.name}</>
                                                        : null
                                                    ))
                                                    : null
                                                }</>,
                                'status' : <>{props.listTitle}</>,
                                'user' : <>{props.listTitle}</>
                            }[props.groupValue]
                        }
                    </div>
                    <div className="list-sum">{cardCount}</div>
                </div>
                <div className="list-header-right">
                    <div className="list-add-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"/></svg>
                    </div>
                    <div className="list-option-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm-7 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 3 7.8zm14 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 17 7.8z"/></svg>
                    </div>
                </div>
            </div>

            <div className="list-card-items">
                {
                    props.ticketDetails.map(ticket => {
                        if(ticket.status === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.priority === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.userObj.name === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        return null
                    }, cardCount = 0)
                    
                }
            </div>
        </div>
    </>
  )
}
