import React, { Component } from 'react';
import DetailComponents from "./DetailComponents"

class ApproveComponent extends Component {
    render() {
        return (
            <div className="approveComponent">
                <p className="titleApproveComponent">PHÂN HỆ ĐỀ XUẤT VÀ PHÊ DUYỆT</p>
                <div className="approveItems">
                    <div className="imgDemoApprove">
                        <img src="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/sections/img-a.png" alt="Anh mô phỏng phê duyệt đề xuất"></img>
                    </div>
                    <div className="listApprove">
                        <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="Số hoá các mẫu biểu trong quản lý" content="Dễ dàng số hoá các biểu mẫu được khởi tạo linh hoạt, đơn giản cho tất cả các loại Yêu cầu - Đề xuất (Nghỉ phép, Phí Công tác, Mua hàng, Thanh toán..)" alt="Phê duyệt 1" />
                        <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="Tổng hợp báo cáo" content="Tổng hợp các đề xuất trong cùng nhóm, xuất ra file excel để báo cáo & lưu trữ dễ dàng." alt="Phê duyệt 2" />
                        <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="Tương tác dễ dàng" content="Có thể trao đổi upload file và comment trong mỗi đề xuất." alt="Phê duyệt 3" />
                    </div>
                    <div className="listApprove">
                        <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="Phê duyệt mọi lúc, mọi nơi" content="Phân nhóm các loại đề xuất và cho phép từng bộ phận / phòng ban sử dụng. Lựa chọn phê duyệt lần lượt." alt="Phê duyệt 4" />
                        <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="Minh bạch thông tin" content="Mỗi đề xuất đều có đầy đủ thông tin để bạn xem xét & xử lý." alt="Phê duyệt 5" />
                        <DetailComponents nguonAnh="https://canhbaosom.com/themes/cm-cbs-20/assets/demos/business/images/icons/checklist.svg" title="Tìm kiếm nhanh chóng" content="Tìm kiếm lại lịch sử các đề xuất bạn đã gửi, xử lý theo các bộ lọc thông minh." alt="Phê duyệt 6" />
                    </div>
                </div>
                <div className="buttonTry">
                    <button>DÙNG THỬ</button>
                </div>
            </div>
        );
    }
}

export default ApproveComponent