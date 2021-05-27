import React from 'react';

import IconEye from '../../../public/images/btn_eye.svg';
import Modal from '../../components/Modal';

function ImageCourse({data}) {
    return (
        <div className="w-full md:w-1/3 cursor-pointer px-0 md:px-4 mb-5 md:mb-0">
            <div className="item mx-auto w-full">
                <div className="image-course relative w-full">
                    <div className="btn-eye transition-all duration-300">
                        <IconEye className="absolute inset-0"></IconEye>
                    </div>
                    <img className="w-full" src={data} alt="" />
                    <Modal content={(toggle) => <img style={{width: 600}} className="shadow-xl" src={data} alt="" />}>
                        {(toggle) => <span onClick={toggle} className="link-wrapped"></span> }
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default ImageCourse;