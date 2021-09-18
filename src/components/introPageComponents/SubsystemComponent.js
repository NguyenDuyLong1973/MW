import React, { Component } from 'react';
import DetailComponents from './DetailComponents';

class SubsystemComponent extends Component {
    render() {
        return (
            <div className="subsystemComponent">
                <p className="titleSubsystemComponent">PHÂN HỆ QUẢN TRỊ SẢN XUẤT</p>
                <div className="listSubsystem">
                    <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="Quản lý thông tin đơn hàng và liên kết kế hoạch sản xuất" content="Căn cứ vào thời gian giao hàng của đơn hàng và tình hình nguyên vật liệu, nhân sự, máy móc thiết bị, hệ thống hỗ trợ người quản lý lên kế hoạch sản xuất theo ngày, tuần, tháng, quý, năm."/>
                    <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="Theo dõi nguyên liệu, vật tư, thành phẩm, bán thành phẩm, phụ phẩm" content="Kết nối mọi thông tin quản lý trong doanh nghiệp, đảm bảo các bộ phận có đầy đủ nguyên vật liệu, vật tư giúp nhà máy hoạt động hiệu quả với lượng hàng tồn ở mức an toàn."/>
                    <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="Quản lý chặt chẽ & chính xác các công đoạn, thao tác sản xuất" content="Các thao tác sản xuất được nhân viên vận hành báo cáo thông qua ứng dụng di động; dữ liệu sản xuất được thu thập kịp thời, liên kết và tính toán chính xác giúp người quản lý ra quyết định nhanh chóng cải thiện hiệu quả hoạt động sản xuất kinh doanh."/>
                </div>
                <div className="listSubsystem">
                    <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="Tùy biến định mức nguyên liệu đối với từng sản phẩm" content="Cho phép quản lý định mức nguyên liệu đối với nhiều loại sản phẩm khác nhau, đảm bảo sự đồng đều trong chất lượng sản phẩm, giám sát chặt chẽ việc sử dụng các loại nguyên liệu sử dụng trong suốt quá trình sản xuất."/>
                    <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="Theo dõi tiến độ sản xuất theo thời gian thực" content="Tiến độ sản xuất từng lô hàng được cập nhật trên ứng dụng của người quản lý theo thời gian thực giúp nắm bắt kịp thời thông tin trong suốt quá trình sản xuất."/>
                    <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="Tích hợp với phần mềm kế toán" content="Sẵn sàng tích hợp với một số phần mềm kế toán thông dụng giúp xuyên suốt dữ liệu, giảm thời gian nhập liệu, chuẩn bị báo cáo kế toán."/>
                </div>
                <div className="buttonTry">
                <button>DÙNG THỬ</button>
                </div>
            </div>
        );
    }
}

export default SubsystemComponent