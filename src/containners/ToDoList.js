import classNames from 'classnames';
import React, { Component } from 'react';
import "../style/toDoListStyle/toDoList.css"
import OptionForm from '../components/toDoListComponents/OptionForm';
import Form1 from '../components/toDoListComponents/Form1';
import Form2 from '../components/toDoListComponents/Form2';
import FilterComponent from '../components/toDoListComponents/FilterComponent';
import lisItemWork from "../mockData/ListItemWork"
import TitleWorkItem from '../components/toDoListComponents/TitleWorkItem';
import ItemWork from '../components/toDoListComponents/ItemWork';
import SideRight from '../components/toDoListComponents/SideRight';
/*
State of class todolist inclues showFormCreateWork, showForm1, showForm2, showForm3 
*/
class ToDoList extends Component {
    constructor() {
        super()
        this.state = { showFormCreateWork: false, showForm1: true, showForm2: false, showForm3: false, listItem: lisItemWork, numberNewWork: this.numberNewWork(), numberWorking: this.numberWorkingWork(), numberWorkWaiting: this.numberWaitingWork(), numberCompeleteWork: this.numberCompleteWork(), numberCancelWork: this.numberCancelWork(), numberDelayWork: this.numberDelayWork() }
    }
    // openFormCreateWork() function to open form create work
    openFormCreateWork = () => {
        this.setState({ showFormCreateWork: true })
    }
    // closeFormCreateWork() function to close form create work 
    closeFormCreateWork = () => {
        this.setState({ showFormCreateWork: false })
    }
    //stopEvent() function to stop event from elment parent
    stopEvent = (e) => {
        e.stopPropagation();
    }
    //function check is show scroll bar
    displayScrollBar = () => {
        if (this.state.showFormCreateWork) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll"
        }
    }
    // showForm1() function to show form 1
    showForm1 = () => {
        this.setState({ showForm1: !this.state.showForm1 });
    }
    // showForm2() function to show form 1
    showForm2 = () => {
        this.setState({ showForm2: !this.state.showForm2 });
    }
    // showForm3() function to show form 1
    showForm3 = () => {
        this.setState({ showForm3: !this.state.showForm3 });
    }
    renderListItemWork = () => this.state.listItem.map((item, key) => <ItemWork key={key} nameWorkItem={item.nameWorkItem} statusItemWork={item.statusItemWork}
        timeEndingWork={item.timeEndingWork} nameManager={item.nameManager} comment={item.comment} />)
    filterNew = () => {
        var list=[]
        lisItemWork.forEach(element => {
            if(element.statusItemWork==="M???i"){
                list.push(element)
            }
        });
        console.log(list)
        this.setState({listItem:list})
    }
    filterWorking=()=>{
        var list=[]
        lisItemWork.forEach(element => {
            if(element.statusItemWork==="??ang l??m"){
                list.push(element)
            }
        });
        console.log(list)
        this.setState({listItem:list})
    }
    filterWaiting=()=>{
        var list=[]
        lisItemWork.forEach(element => {
            if(element.statusItemWork==="Ch??? x??t duy???t"){
                list.push(element)
            }
        });
        console.log(list)
        this.setState({listItem:list})
    }
    filterComplete=()=>{
        var list=[]
        lisItemWork.forEach(element => {
            if(element.statusItemWork==="Ho??n th??nh"){
                list.push(element)
            }
        });
        console.log(list)
        this.setState({listItem:list})
    }
    filterCancel=()=>{
        var list=[]
        lisItemWork.forEach(element => {
            if(element.statusItemWork==="H???y"){
                list.push(element)
            }
        });
        console.log(list)
        this.setState({listItem:list})
    }
    filterDelay=()=>{
        var list=[]
        lisItemWork.forEach(element => {
            if(element.statusItemWork==="Q??a h???n"){
                list.push(element)
            }
        });
        console.log(list)
        this.setState({listItem:list})
    }
    search=(s)=>console.log(s)
    numberNewWork=()=>{
        var v=0;
        for(var i=0; i<lisItemWork.length;i++){
            if(lisItemWork[i].statusItemWork==="M???i"){
                v++
            }
        }
        return v
    }
    numberWorkingWork=()=>{
        var v=0;
        for(var i=0; i<lisItemWork.length;i++){
            if(lisItemWork[i].statusItemWork==="??ang l??m"){
                v++
            }
        }
        return v
    }
    numberWaitingWork=()=>{
        var v=0;
        for(var i=0; i<lisItemWork.length;i++){
            if(lisItemWork[i].statusItemWork==="??ang x??t duy???t"){
                v++
            }
        }
        return v
    }
    numberCompleteWork=()=>{
        var v=0;
        for(var i=0; i<lisItemWork.length;i++){
            if(lisItemWork[i].statusItemWork==="Ho??n th??nh"){
                v++
            }
        }
        return v
    }
    numberCancelWork=()=>{
        var v=0;
        for(var i=0; i<lisItemWork.length;i++){
            if(lisItemWork[i].statusItemWork==="H???y"){
                v++
            }
        }
        return v
    }
    numberDelayWork=()=>{
        var v=0;
        for(var i=0; i<lisItemWork.length;i++){
            if(lisItemWork[i].statusItemWork==="Q??a h???n"){
                v++
            }
        }
        return v
    }
    render() {
        this.displayScrollBar();
        return (
            <div className="toDoListPage">
                <div className="headerPage">
                    <div className="titleList">
                        <p>Danh s??ch</p>
                    </div>
                    <SideRight openFormCreateWork={this.openFormCreateWork} search={()=>this.search}/>
                </div>
                <div className={classNames("full-screen", { "display-full-screen": this.state.showFormCreateWork })} onClick={this.closeFormCreateWork}>
                    <div className="area-form" onClick={this.stopEvent}>
                        <div className="header-area-form">
                            <p>Th??ng tin c?? b???n</p>
                            <img onClick={this.closeFormCreateWork} src="../img/icon-close.png"></img>
                        </div>
                        <div className="group-form">
                            <OptionForm clickShowSubForm={this.showForm1} nameOption="T???o m???i c??ng vi???c" url="../img/arrow-right-black.png" />
                            {this.state.showForm1 ? <Form1 /> : null}
                            <OptionForm clickShowSubForm={this.showForm2} nameOption="Th??ng tin th???i gian" url="../img/arrow-right-black.png" />
                            {this.state.showForm2 ? <Form2 /> : null}
                            <OptionForm clickShowSubForm={this.showForm3} nameOption="Th??ng tin th??m" url="../img/arrow-right-black.png" />
                        </div>
                    </div>
                </div>
                <FilterComponent numberNewWork={this.state.numberNewWork} numberWorking={this.state.numberWorking} numberWorkWaiting={this.state.numberWorkWaiting} numberCompeleteWork={this.state.numberCompeleteWork}
                    numberCancelWork={this.state.numberCancelWork} numberDelayWork={this.state.numberDelayWork} filterNew={this.filterNew}
                    filterWaiting={this.filterWaiting} filterWorking={this.filterWorking} filterComplete={this.filterComplete} filterCancel={this,this.filterCancel}
                    filterDelay={this.filterDelay}/>
                <TitleWorkItem />
                <div className="listItemWork">
                    {this.renderListItemWork()}
                </div>
            </div>
        );
    }
}

export default ToDoList;