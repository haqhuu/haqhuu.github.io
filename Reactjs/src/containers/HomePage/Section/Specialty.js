import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";

class Specialty extends Component {

    render() {
        return (
            <>
                <div className='section-share section-specialty '>
                    <div className='section-container '>

                        <div className='section-header'>

                            <span className='title-section'>Chuyên khoa phổ biến</span>

                            <button className='btn-section'> Xem thêm</button>
                        </div>
                        <div className='section-body'>
                            <Slider {...this.props.settings}>
                                <div className='section-customize'>
                                    <div className='bg-img section-specialty'></div>
                                    <div className='text-customize  '>
                                        <span> Cơ xương khớp 1</span>
                                    </div>
                                </div>

                                <div className='section-customize'>
                                    <div className='bg-img section-specialty'>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Cơ xương khớp 2</span>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-img section-specialty'>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Cơ xương khớp 3</span>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-img section-specialty'>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Cơ xương khớp 4</span>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-img section-specialty'>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Cơ xương khớp 5</span>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='bg-img section-specialty'>
                                    </div>
                                    <div className='text-customize  '>
                                        <span> Cơ xương khớp 6</span>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default (Specialty);
