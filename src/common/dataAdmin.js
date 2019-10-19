import React from 'react';

const dataAdmin = {
    menus: [
        { 
            text: 'Overview', 
            icon: <div style={{ cursor: 'pointer', paddingLeft: '30px' }}> 
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule ="evenodd" htmlFor="evenodd" d="M4.39835 19.7995C1.65046 17.735 0 14.5037 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 14.5037 20.3495 17.735 17.6017 19.7995L17.3348 20H4.66522L4.39835 19.7995ZM16.6575 18C18.753 16.305 20 13.757 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 13.757 3.24698 16.305 5.34253 18H16.6575ZM16.3192 5.57346L14.6808 4.42654L12.0477 8.18803C11.7216 8.06645 11.3685 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14C12.6569 14 14 12.6569 14 11C14 10.4445 13.849 9.92435 13.5859 9.4782L16.3192 5.57346ZM12 11C12 11.5523 11.5523 12 11 12C10.4477 12 10 11.5523 10 11C10 10.4477 10.4477 10 11 10C11.5523 10 12 10.4477 12 11Z" fill="white"/>
                    </svg> 
                    </div>, 
            link: '/form',
            titletxt: 'Dashboard',
            redtxt: '', 
        },
        { 
            text: 'Organizations', 
            icon: <div style={{ cursor: 'pointer', paddingLeft: '30px' }}> 
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule ="evenodd" htmlFor="evenodd" d="M8 0H12C13.1046 0 14 0.89543 14 2V3H18C19.1046 3 20 3.89543 20 5V16C20 17.1046 19.1046 18 18 18H2C0.89543 18 0 17.1046 0 16V5C0 3.89543 0.89543 3 2 3H6V2C6 0.89543 6.89543 0 8 0ZM2 5H6H14H18V10H11H9H2V5ZM2 16V12H9V13H11V12H18V16H2ZM12 2V3H8V2H12Z" fill="white"/>
                    </svg>
                    </div>, 
            link: '/dashboard',
            titletxt: 'Organizations',
            redtxt: 'Add Organization',            
        },
        { 
            text: 'Adminstrators', 
            icon: <div style={{ cursor: 'pointer', paddingLeft: '30px' }}> 
                    <svg width="20" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule ="evenodd" htmlFor="evenodd" d="M3 5V8H2C0.931649 8 0 8.77637 0 9.83333V18.1667C0 19.2236 0.931649 20 2 20H14C15.0684 20 16 19.2236 16 18.1667V9.83333C16 8.77637 15.0684 8 14 8H13V5C13 2.23858 10.7614 0 8 0C5.23858 0 3 2.23858 3 5ZM11 5V8H5V5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5ZM2 18V10H14V18H2ZM9 14C9 14.5523 8.55229 15 8 15C7.44772 15 7 14.5523 7 14C7 13.4477 7.44772 13 8 13C8.55229 13 9 13.4477 9 14Z" fill="white"/>
                    </svg>
                    </div>, 
            link: '/table',
            titletxt: 'Adminstrators',
            redtxt: 'Add Adminstrator',   
        },
        { 
            text: 'My Account', 
            icon: <div style={{ cursor: 'pointer', paddingLeft: '30px' }}> 
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule ="evenodd" htmlFor="evenodd" d="M17.6562 19.897L19.8733 17.6798L19.0925 14.843L19.4327 14.0305L22 12.5818V9.44645L19.44 7.99173L19.1055 7.18067L19.8961 4.34235L17.6774 2.12683L14.8403 2.90748L14.0296 2.56758L12.5808 0H9.44544L7.99072 2.56004L7.17985 2.89446L4.34198 2.10281L2.1267 4.31809L2.90748 7.15567L2.56758 7.96634L0 9.41514V12.5496L2.55774 14.0076L2.89252 14.8193L2.10197 17.6572L4.31809 19.8733L7.15567 19.0925L7.96644 19.4325L9.41527 21.999H12.5498L14.0067 19.4412L14.8183 19.1065L17.6562 19.897ZM17.8527 12.6256L16.9809 14.7078L17.6362 17.0886L17.0678 17.657L14.692 16.9951L12.609 17.8542L11.3873 19.999H10.5829L9.37141 17.8529L7.29155 16.9808L4.90947 17.6362L4.34203 17.0688L5.00385 14.693L4.14482 12.6101L2 11.3876V10.583L4.1471 9.3715L5.0192 7.29155L4.36375 4.90947L4.93001 4.34321L7.30576 5.00595L9.38955 4.14655L10.6093 2H11.4129L12.6245 4.1471L14.7044 5.0192L17.087 4.36362L17.6558 4.93166L16.9941 7.30696L17.8534 9.39056L20 10.6103V11.4139L17.8527 12.6256ZM11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C13.2091 7 15 8.79086 15 11C15 13.2091 13.2091 15 11 15ZM13 11C13 12.1046 12.1046 13 11 13C9.89543 13 9 12.1046 9 11C9 9.89543 9.89543 9 11 9C12.1046 9 13 9.89543 13 11Z" fill="white"/>
                    </svg>
                    </div>, 
            link: '/login',
            titletxt: '',
            redtxt: '', 
        }
    ],
    browserUsage: [
        {name: 'Chrome', value: 800},
        {name: 'Firefox', value: 300},
        {name: 'Safari', value: 300}
    ],
};

export default dataAdmin;
