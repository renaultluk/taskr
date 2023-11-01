const TaskCalendarItem = (props) => {
    return (
        <div
            style={{
                position: "absolute",
                left: 0,
                top: props.startTime * props.timeHeight,
                width: "100%",
                height: props.duration * props.timeHeight,
                backgroundColor: "#BB0000",
                borderRadius: 4,
                padding: 4,
                border: "1px solid #FFFFFF"
            }}
        >
            <span style={{ color: "#FFFFFF" }}>{props.name}</span>
        </div>
    )
}

export default TaskCalendarItem;