import React, { Component } from 'react';
import DetailComponents from "./DetailComponents"

class MantainComponent extends Component {
    render() {
        return (
            <div className="mantainComponent">
                <p className="titleMantainComponent">PHÂN HỆ ĐỀ XUẤT VÀ PHÊ DUYỆT</p>
                <div className="mantainItems">
                    <div className="listMantain">
                        <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="QUẢN TRỊ SẢN XUẤT" content="CBS sản xuất là một công cụ giúp cho các nhà máy, phân xưởng có thể quản lý nguyên liệu, vật tư, thành phẩm, bán thành phẩm, phụ phẩm, quá trình sản xuất, xuất hàng và bán hàng một cách dễ dàng và chặt chẽ." alt="Chức năng 1" />
                        <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="ĐỂ XUẤT VÀ XÉT DUYỆT" content="CBS đề xuất giúp bạn dễ dàng số hoá các biểu mẫu được khởi tạo linh hoạt, đơn giản cho tất cả các loại Yêu cầu - Đề xuất (Nghỉ phép, Phí Công tác, Mua hàng, Thanh toán..)" alt="Chức năng 2" />
                        <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="BẢO TRÌ VÀ BẢO DƯỠNG" content="CBS bảo trì, bảo dưỡng cho phép bạn tạo những quy định bảo trì định kỳ, theo dõi toàn bộ các hoạt động liên quan đến phòng bảo trì." alt="Chức năng 3" />
                        <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="BẢO TRÌ VÀ BẢO DƯỠNG" content="CBS bảo trì, bảo dưỡng cho phép bạn tạo những quy định bảo trì định kỳ, theo dõi toàn bộ các hoạt động liên quan đến phòng bảo trì." alt="Chức năng 3" />
                    </div>
                    <div className="imgDemo">
                        <img src="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/sections/img-b.png" alt="Anh mô phỏng chức năng"></img>
                    </div>
                </div>
                <div className="buttonTry">
                    <button>DÙNG THỬ</button>
                </div>
            </div>
        );
    }
}

export default MantainComponent