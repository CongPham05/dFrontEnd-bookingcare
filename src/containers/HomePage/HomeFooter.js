import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {

    render() {

        return (
            <div className='home-footer'>
                <div className='footer__top'>
                    <div className='col-5'>
                        <div ><h4><strong>Công ty Cổ phần Công nghệ BookingCare</strong></h4>
                            <p>
                                Địa chỉ: 28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội
                            </p>
                        </div>

                    </div>
                    <div className='col-3 '>
                        <ul>
                            <li><a href="/#">Liên hệ hợp tác</a></li>
                            <li><a href="/#">Gói chuyển đổi số doanh nghiệp</a></li>
                            <li><a href="/#">Tuyển dụng</a></li>
                            <li><a href="/#">Câu hỏi thường gặp</a></li>
                            <li><a href="/#">Điều khoản sử dụng</a></li>
                            <li><a href="/#">Chính sách Bảo mật</a></li>
                            <li><a href="/#">Quy trình hỗ trợ giải quyết khiếu nại</a></li>
                            <li><a href="/#">Quy chế hoạt động</a></li></ul>
                    </div>
                    <div className='col-4'>
                        <div className="ds"><strong>Trụ sở tại Hà Nội</strong><br /> 28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</div>
                        <div className="ds"><strong>Trụ sở tại Hà Nội</strong><br />  Số 01, Hồ Bá Kiện, Phường 15, Quận 10</div>
                        <div className="ds"><strong>Hỗ trợ khách hàng</strong><br /> support@bookingcare.vn (7h30 - 20h)</div>
                    </div>
                </div>
                <div className='footer__bottom'>
                    <div class="vung-bao an-ud"><hr />
                        <div>&nbsp;Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng:&nbsp;&nbsp;
                            <a target="_blank" href="https://bookingcare.vn/app/android">Android</a> &nbsp;
                            <a target="_blank" href="https://bookingcare.vn/app/ios">iPhone/iPad</a> &nbsp;
                            <a target="_blank" href="https://bookingcare.vn/app">Khác</a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
