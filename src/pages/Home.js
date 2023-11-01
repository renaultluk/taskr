import { useState } from "react"
import TabMenu from "../components/TabMenu"
import TaskListItem from "../components/TaskListItem";
import FlatList from "../components/FlatList";
import WeekCalendar from "../components/calendar/WeekCalendar";

const Home = () => {
    const listTabMenuOptions = [
        {
            id: "tasks",
            name: "Tasks",
        },
        {
            id: "events",
            name: "Events",
        },
    ];

    const calenderTabMenuOptions = [
        {
            id: "day",
            name: "Day",
        },
        {
            id: "week",
            name: "Week",
        },
        {
            id: "month",
            name: "Month",
        },
    ];

    const [selectedListTab, setSelectedListTab] = useState("tasks");
    const [tasks, setTasks] = useState([
        {
            id: "bro",
            name: "Eat Shit",

        }
    ]);

    const taskListItemRenderer = (value) => (
        <TaskListItem
            id={value.id}
            name={value.name}
            onClick={() => console.log("view ", value.id)}
        />
    );

    const [selectedCalendarTab, setSelectedCalendarTab] = useState("week");

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
            }}
        >
            <div 
                className="w-25"
                style={{
                    paddingLeft: 24,
                    paddingRight: 24,
                }}
            >
                <h1>Hi</h1>
                <TabMenu
                    menuOptions={listTabMenuOptions}
                    selected={selectedListTab}
                    setSelected={setSelectedListTab}
                />
                <div style={{ height: 24 }} />
                <FlatList 
                    data={tasks}
                    itemRenderer={taskListItemRenderer}
                />
            </div>
            <div className="w-75">
                <TabMenu 
                    menuOptions={calenderTabMenuOptions}
                    selected={selectedCalendarTab}
                    setSelected={setSelectedCalendarTab}
                />

                <WeekCalendar 
                    timeHeight={35}
                />
            </div>
        </div>
    )
}

export default Home;