import React from 'react';
import poert1 from './assets/images/poert1.png'; // Adjusted path
import port2 from './assets/images/port2.png'; // Adjusted path
import port3 from './assets/images/port3.png'; // Adjusted path
import '@fortawesome/fontawesome-free/css/all.min.css';
const Portfolio = () => {
    return (
        <div className="page text-center align-content-center mt-5 pt-5">
            <h2 className='mt-5'>PORTFOLIO COMPONENT</h2>
            <div className='d-flex justify-content-center '>
                <div className='line me-3' style={{ width: '100px', height: '4px', backgroundColor: '#2c3e50' }}></div>
                <span className='star translate-middle-y' style={{ fontSize: '24px', color: '#2c3e50' }}>★</span>
                <div className='line ms-3' style={{ width: '100px', height: '4px', backgroundColor: '#2c3e50' }}></div>
            </div>
            <div className='container text-center  '>
                <div className=' row justify-content-center g-5'>
                    <div className='col-4 '>
                        <div className='imge12 position-relative bg-info overflow-hidden '>
                            <div className='background-post position-absolute d-flex justify-content-center align-items-center'>
                                <i className="icon fa-solid fa-plus"></i>
                            </div>

                            <img
                                src={poert1}
                                alt="Portfolio Image"
                                style={{ width: '100%', height: 'auto', overflow: 'hidden' }}
                            />
                        </div>
                    </div>


                    <div className='col-4'>
                        <div className='imge12 position-relative bg-info overflow-hidden'>
                            <div className='background-post position-absolute d-flex justify-content-center align-items-center'>
                                <i className="icon fa-solid fa-plus"></i>
                            </div>

                            <img
                                src={port2}
                                alt="Portfolio Image"
                                style={{ width: '100%', height: 'auto', overflow: 'hidden' }}
                            />
                        </div>
                    </div>

                    <div className='col-4'>
                        <div className='imge12 position-relative bg-info overflow-hidden'>
                            <div className='background-post position-absolute d-flex justify-content-center align-items-center'>
                                <i className="icon fa-solid fa-plus "></i>
                            </div>

                            <img
                                src={port3}
                                alt="Portfolio Image"
                                style={{ width: '100%', height: 'auto', overflow: 'hidden' }}
                            />
                        </div>
                    </div>

                    <div className='col-4'>
                        <div className='imge12 position-relative bg-info overflow-hidden'>
                            <div className='background-post position-absolute d-flex justify-content-center align-items-center'>
                                <i className="icon fa-solid fa-plus"></i>
                            </div>

                            <img
                                src={poert1}
                                alt="Portfolio Image"
                                style={{ width: '100%', height: 'auto', overflow: 'hidden' }}
                            />
                        </div>
                    </div>


                    <div className='col-4'>
                        <div className='imge12 position-relative bg-info overflow-hidden'>
                            <div className='background-post position-absolute d-flex justify-content-center align-items-center'>
                                <i className="icon fa-solid fa-plus"></i>
                            </div>

                            <img
                                src={port2}
                                alt="Portfolio Image"
                                style={{ width: '100%', height: 'auto', overflow: 'hidden' }}
                            />
                        </div>
                    </div>

                    <div className='col-4'>
                        <div className='imge12 position-relative bg-info overflow-hidden'>
                            <div className='background-post position-absolute d-flex justify-content-center align-items-center'>
                                <i className="icon fa-solid fa-plus"></i>
                            </div>

                            <img
                                src={port3}
                                alt="Portfolio Image"
                                style={{ width: '100%', height: 'auto', overflow: 'hidden' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Portfolio;