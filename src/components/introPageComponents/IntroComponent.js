import React, { Component } from 'react';
import IntroItemComponents from './IntroItemComponents';
import TextWaterMaskComponent from './TextWaterMaskComponent';

class GioiThieu extends Component {
    render() {
        // var items = [
        //     {
        //         nguonAnh: "../img/storage.png",
        //         text: "Lưu trữ an toàn nhanh chón, truy suất tiện lợi"
        //     },
        //     {
        //         nguonAnh: "../img/icons8-3d-touch-50.png",
        //         text: "Lưu trữ an toàn nhanh chón, truy suất tiện lợi"
        //     },
        //     {
        //         nguonAnh: "../img/icons8-low-price-50.png",
        //         text: "Lưu trữ an toàn nhanh chón, truy suất tiện lợi"
        //     },
        //     {
        //         nguonAnh: "../img/taskCompleteIcon.png",
        //         text: "Lưu trữ an toàn nhanh chón, truy suất tiện lợi"
        //     },
        //     {
        //         nguonAnh: "../img/taskCompleteIcon.png",
        //         text: "Lưu trữ an toàn nhanh chón, truy suất tiện lợi"
        //     }
        // ]
        // const listItems = items.map((item, index) =>
        //     <div><GioiThieuComponent key={index} nguonAnh={item.nguonAnh} text={item.text} /></div>
        // );


        return (
            <div id="intro" className="introComponent" >
               <TextWaterMaskComponent nguonAnh="../img/questionIcon.png" text="VÌ SAO BẠN LẠI CHỌN CBS" alt="iconquestion"/>
                <div className="listIntroComponentItems listIntroComponentItems1 row">
                    <IntroItemComponents nguonAnh="../img/storage.png" text="Lưu trữ an toàn nhanh chónh, truy suất tiện lợi" />
                    <IntroItemComponents nguonAnh="../img/icons8-3d-touch-50.png" text="Tiếp cận nhanh dễ sử dụng" />
                    <IntroItemComponents nguonAnh="../img/icons8-low-price-50.png" text="Chi phí sử dụng thấp, không mất chi phí để phát triển" />
                </div>
                <div className="listIntroComponentItems listIntroComponentItems2">
                    <IntroItemComponents nguonAnh="../img/icons8-3d-touch-50.png" text="Tiếp cận nhanh dễ sử dụng" />
                    <IntroItemComponents nguonAnh="../img/icons8-messenger-bag-50.png" text="Phù hợp với nhu cầu doanh nghiệp" />
                </div>
            </div>
        );
    }
}

export default GioiThieu