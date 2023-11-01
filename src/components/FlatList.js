const FlatList = (props) => {
    return (
        <div
            style={{
                padding: 8,
                backgroundColor: "#888888",
                borderRadius: 8,
                height: 300,
                width: "100%",
            }}
        >
            {
                props.data.map((value, index) =>  props.itemRenderer(value))
            }
        </div>
    )
}

export default FlatList