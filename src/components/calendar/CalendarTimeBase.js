const CalendarTimeBase = (props, { children }) => {
    const timeList = Array(24).fill(0).map((v, index) => {
        const ampm = Math.floor((index + 1) / 12) ? "pm" : "am";
        return (index % 12 + 1).toString() + ampm;
    })
    
    return (
        <div
            class="w-100"
            style={{
                // overflow: "scroll",
                height: 600,
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                }}
            >
                <div
                    style={{
                        position: "relative",
                    }}
                >
                    {
                        timeList.map((value, index) => (
                            <span
                                style={{
                                    position: "absolute",
                                    top: (index + 1) * props.timeHeight * 2,
                                    verticalAlign: "middle",
                                }}
                            >
                                {value}
                            </span>
                        ))
                    }
                </div>
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <div
                        id="timebase-container"
                        style={{
                            position: "absolute",
                        }}
                    >
                    {
                        timeList.map((value, index) => (
                            <div
                                style={{
                                    position: "absolute",
                                    top: (index + 1) * props.timeHeight * 2,
                                    verticalAlign: "middle",
                                    height: 2,
                                    width: 800,
                                    backgroundColor: "#888888",
                                }}
                            ></div>
                        ))
                    }
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarTimeBase;