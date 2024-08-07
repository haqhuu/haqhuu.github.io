import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class OutstandingDoctor extends Component {

    render() {
        return (
            <>
                <div className='section-share section-outstanding-doctor '>
                    <div className='section-container '>

                        <div className='section-header'>

                            <span className='title-section'>Bác sĩ nổi bật</span>

                            <button className='btn-section'> Xem thêm</button>
                        </div>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>
                                <div className='section-customize'>
                                    <div className='custome-border'>

                                        <div className='outer-bg'>
                                            <div className='bg-img section-outstanding-doctor'>
                                            </div>
                                        </div>
                                        <div className='position text-center'>
                                            <div> <span> Bác sĩ HaHuu</span></div>
                                            <div><span> Cơ xương khớp3</span></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='section-customize'>
                                    <div className='custome-border'>

                                        <div className='outer-bg'>
                                            <div className='bg-img section-outstanding-doctor'>
                                            </div>
                                        </div>
                                        <div className='position text-center'>
                                            <div> <span> Bác sĩ HaHuu</span></div>
                                            <div><span> Cơ xương khớp3</span></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='section-customize'>
                                    <div className='custome-border'>

                                        <div className='outer-bg'>
                                            <div className='bg-img section-outstanding-doctor'>
                                            </div>
                                        </div>
                                        <div className='position text-center'>
                                            <div> <span> Bác sĩ HaHuu</span></div>
                                            <div><span> Cơ xương khớp3</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='custome-border'>

                                        <div className='outer-bg'>
                                            <div className='bg-img section-outstanding-doctor'>
                                            </div>
                                        </div>
                                        <div className='position text-center'>
                                            <div> <span> Bác sĩ HaHuu</span></div>
                                            <div><span> Cơ xương khớp3</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='custome-border'>

                                        <div className='outer-bg'>
                                            <div className='bg-img section-outstanding-doctor'>
                                            </div>
                                        </div>
                                        <div className='position text-center'>
                                            <div> <span> Bác sĩ HaHuu</span></div>
                                            <div><span> Cơ xương khớp3</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='custome-border'>

                                        <div className='outer-bg'>
                                            <div className='bg-img section-outstanding-doctor'>
                                            </div>
                                        </div>
                                        <div className='position text-center'>
                                            <div> <span> Bác sĩ HaHuu</span></div>
                                            <div><span> Cơ xương khớp3</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='custome-border'>

                                        <div className='outer-bg'>
                                            <div className='bg-img section-outstanding-doctor'>
                                            </div>
                                        </div>
                                        <div className='position text-center'>
                                            <div> <span> Bác sĩ HaHuu</span></div>
                                            <div><span> Cơ xương khớp3</span></div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
