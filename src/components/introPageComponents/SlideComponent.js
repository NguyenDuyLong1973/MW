import React, { Component } from 'react';
import SlideItemComponent from './SlideItemComponent';
const listOb = [{
    img: "../img/1.jpg", alt: "Hình 1", title: "TIỆN ÍCH HỖ TRỢ QUẢN LÝ", contents: "CBS là nền tảng siêu ứng dụng thiết kế chuyên biệt cho vận hành doanh nghiệp thông qua số hóa và tự động hóa các khâu trong hoạt động quản lý."
},
{ img: "../img/2.jpg", alt: "Hình 2", title: "CBS", contents: "Giao nhiệm vụ đúng lúc - đúng việc - đúng người." }, { img: "../img/3.jpg", alt: "Hình 3", title: "CBS", contents: "Xét duyệt kịp thời , tối đa cơ hội kinh doanh và giảm chi phí chờ đợi." }]
class SlideComponent extends Component {
    render() {
        return (
            <div className="containerSlide">
                <SlideItemComponent sourceImg="../img/1.jpg" alt={listOb[1].alt} contents={listOb[1].contents} title = {listOb[1].title} nameButton="DÙNG THỬ"/>
                <div className="buttonSlide">
                        <button className="bt" onClick={this.backward} id="buttonLeft" ><img src="../img/leftArrowIcon.png" alt="anh button trai" /></button>
                        <button className="bt" onClick={this.forward} id="buttonRight"><img src="../img/rightArrowIcon.png" alt="anh button right" /></button>
                    </div>
            </div>
        );
    }
}
export default SlideComponent