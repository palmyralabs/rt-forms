import './DashboardSlide.css';

const DashboardSlide = (props: any) => {
    const { data, className } = props;
    const clsName = className ? `${className} card-view-x7 ` :
        'card-view-x7';
    return (
        <div className={clsName}>
            <div className='dash-slide dash-cards'>
                <div className='left-slide-section'>
                    <div className='label'>
                        {data.label}
                    </div>
                    <div className='data'>
                        {data.amount}
                    </div>
                </div>
                <div className='right-slide-section'>
                    {data.icon &&
                        <div className='icon-container'>
                            {data.icon}
                        </div>}
                    {data.hp && <>
                        <div className='label'>
                            {data.hp}
                        </div>
                        <div className='data'>
                            {data.count}
                        </div>
                    </>}
                </div>
            </div>
        </div>
    )
}

export { DashboardSlide };

