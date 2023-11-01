const TaskListItem = (props) => {
    return (
        <div
            onClick={() => props.onClick(props.id)}
            style={{
                backgroundColor: "#BB0000",
                padding: 8,
                borderRadius: 8,
                width: "100%",
                cursor: "grab",
            }}
        >
            <span
                style={{
                    color: "#FFFFFF",
                }}
            >{props.name}</span>
        </div>
    )
}

export default TaskListItem;