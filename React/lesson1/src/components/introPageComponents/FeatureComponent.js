import React, { Component } from 'react';
import DetailComponents from './DetailComponents';
import TextWaterMaskComponent from './TextWaterMaskComponent';

class FeatureComponent extends Component {
    render() {
        return (
            <div className="featureComponent">
                <div className="imgDemo">
                    <img src="../img/cbs chức năng dọc.jpg" alt="Anh mô phỏng chức năng"></img>
                </div>
                <div className="listFeature">
                    <TextWaterMaskComponent nguonAnh="../img/hastag.png" text="CÁC PHÂN HỆ TÍNH NĂNG" alt="hastag"/>
                    <DetailComponents nguonAnh="../img/gear.png" title="QUẢN TRỊ SẢN XUẤT" content="CBS sản xuất là một công cụ giúp cho các nhà máy, phân xưởng có thể quản lý nguyên liệu, vật tư, thành phẩm, bán thành phẩm, phụ phẩm, quá trình sản xuất, xuất hàng và bán hàng một cách dễ dàng và chặt chẽ." alt="Chức năng 1"/>
                    <DetailComponents nguonAnh="../img/copy.png" title="ĐỂ XUẤT VÀ XÉT DUYỆT" content="CBS đề xuất giúp bạn dễ dàng số hoá các biểu mẫu được khởi tạo linh hoạt, đơn giản cho tất cả các loại Yêu cầu - Đề xuất (Nghỉ phép, Phí Công tác, Mua hàng, Thanh toán..)" alt="Chức năng 2"/>
                    <DetailComponents nguonAnh="../img/repair.png" title="BẢO TRÌ VÀ BẢO DƯỠNG" content="CBS bảo trì, bảo dưỡng cho phép bạn tạo những quy định bảo trì định kỳ, theo dõi toàn bộ các hoạt động liên quan đến phòng bảo trì." alt="Chức năng 3"/>
                </div>
            </div>
        );
    }
}

export default FeatureComponent