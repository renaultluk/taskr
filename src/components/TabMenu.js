const TabMenuOption = (props) => {
    return (
        <div
            onClick={() => props.setSelected(props.id)}
            style={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "center",
                paddingTop: 8,
                paddingBottom: 8,
                // paddingLeft: 16,
                // paddingRight: 16,
                backgroundColor: props.selected === props.id ? "#FFFFFF" : "rgba(0,0,0,0)",
                borderRadius: 8,
                cursor: "pointer",
            }}
        >
            <span
                style={{
                    color: props.selected === props.id ? "#0000FF" : "#000000",
                }}
            >
                {props.name}
            </span>
        </div>
    )
}

const TabMenu = (props) => {
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                backgroundColor: "#888888",
                padding: 8,
                borderRadius: 8,
            }}
        >
            {
                props.menuOptions.map((value, index) => (
                    <TabMenuOption 
                        id={value.id}
                        name={value.name}
                        selected={props.selected}
                        setSelected={props.setSelected}
                    />
                ))
            }
        </div>
    )
}

export default TabMenu;