import { useState } from "react"
import TaskCalendarItem from "./TaskCalendarItem";

const DayColumn = (props) => {
    const [tasksInDay, setTasksInDay] = useState([]);
    
    const timeCellClick = (cellTime) => {
        console.log(cellTime)
        var tmpArr = [...tasksInDay];
        tmpArr.push({
            name: "Eat Shit",
            startTime: cellTime,
            duration: 2,
        })
        setTasksInDay(tmpArr)
    }
    
    return (
        <div 
            style={{
                position: "relative",
                borderRight: "2px solid #888888",
            }}
        >
            {
                Array(48).fill(0).map((value, index) => (
                    <div
                        onClick={() => timeCellClick(index)}
                        style={{
                            height: props.timeHeight,
                            width: 100,
                        }}
                    ></div>
                ))
            }
            {
                tasksInDay.length > 0 && tasksInDay.map((value, index) => (
                    <TaskCalendarItem 
                        name={value.name}
                        startTime={value.startTime}
                        duration={value.duration}
                        timeHeight={props.timeHeight}
                    />
                ))
            }
        </div>
    )
}

export default DayColumn;