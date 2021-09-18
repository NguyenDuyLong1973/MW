import React, { Component } from 'react';
import SideLeftMenuComponent from './SideLeftMenuComponent';
import SideRightMenuComponent from './SideRightMenuComponent';
import Login from "../../containners/Login"
const sections = [
    { id: 1, component: Login, title: "Đăng nhập", url: "/login" }];
class MenuComponent extends Component {
    constructor() {
        super()
        this.state = { xCurrent: 1 }
    }
    render() {
        return (
            <section className="barHeader" id="barHeader">
                <SideLeftMenuComponent  duongDan="https://www.canhbaosom.com" srcAnh1="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/logo-dark.svg" srcAnh2="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/logo@2x.svg" alt="hình ảnh" />
                {/* <SideRightMenuComponent duongDan1="#trangChu" nameLink1="Trang chủ" duongDan2="#intro" nameLink2="Gioi thiệu" duongDan3="#tinhNang" nameLink3="Tính năng" duongDan4="#bangGia" nameLink4="Bảng giá" duongDan5="D:\js\React\lesson1\src\containners\Login.js" nameLink5="Đăng nhập" duongDan6="#" nameLink6="Đăng kí" /> */}
                <SideRightMenuComponent duongDan1="#trangChu" nameLink1="Trang chủ" duongDan2="#intro" nameLink2="Gioi thiệu" duongDan3="#tinhNang" nameLink3="Tính năng" duongDan4="#bangGia" nameLink4="Bảng giá" duongDan5="#dangKi" nameLink5="Đăng kí" sections={sections} />
            </section>
        );
    }
}

export default MenuComponent