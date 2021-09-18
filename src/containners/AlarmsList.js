import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FilterComponent from '../components/toDoListComponents/FilterComponent';
import SideRight from '../components/toDoListComponents/SideRight';
import TitleWorkItem from '../components/toDoListComponents/TitleWorkItem';
import "../style/alarmListStyle/AlarmListStyle.css"
import lisItemWork from "../mockData/ListItemWork"
import ItemWork from '../components/toDoListComponents/ItemWork';

class AlarmList extends Component {
    constructor() {
        super()
        this.state = ({ listItem: lisItemWork, numberNewWork: 0, numberWorking: 0, numberWorkWaiting: 0, numberCompeleteWork: 0, numberCancelWork: 0, numberDelayWork: 0 })
    }
    render() {
        return (
            <div className="toDoListPage">
                <div className="headerPage">
                    <div className="titleList">
                        <p>Danh sách</p>
                    </div>
                    {/* <SideRight /> */}
                </div>
            </div>
        );
    }
}

export default AlarmList;