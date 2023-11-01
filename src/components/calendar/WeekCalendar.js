import CalendarTimeBase from "./CalendarTimeBase";
import DayColumn from "./DayColumn";

const WeekCalendar = (props) => {
    const weekArr = Array(7).fill(0).map((v, index) => index + 1)

    return (
        <div 
        className="w-100"
        style={{
            height: 600,
        }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    borderBottom: "2px solid #888888",
                }}
            >
                {
                    weekArr.map((value, index) => (
                        <div
                            style={{
                                display: "flex",
                                flexGrow: 1,
                                flexDirection: "column",
                                alignItems: "center",
                                borderRight: "2px solid #888888",
                            }}
                        >
                            <span>Sun</span>
                            <h3>{value}</h3>
                        </div>
                    ))
                }
            </div>
            
            <CalendarTimeBase
                timeHeight={props.timeHeight}
                content={
                            weekArr.map((value, index) => (
                                <DayColumn 
                                    timeHeight={props.timeHeight}
                                />
                            ))
                        }
            >
                {/* {
                    weekArr.map((value, index) => {
                        <DayColumn 
                            timeHeight={props.timeHeight}
                        />
                    })
                } */}
            </CalendarTimeBase>
        </div>
    )
}

export default WeekCalendar;