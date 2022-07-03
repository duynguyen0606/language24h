import classNames from 'classnames/bind'
import ConvertToTimestamp from '../../../../ultils/ConvertToTimestamp'
import styles from './ActiveRecently.module.scss'
import { Activity } from '../../index'

const cx = classNames.bind(styles)

function ActiveRecently({ activities }: { activities: Activity[] }) {
    return (
        <div className={cx('wrapper')}>
            <div className='title-block'>Hoạt động gần đây</div>
            <div className={cx('main-block-content')}>
                <div className={cx('show-activities')}>
                    <div className={cx('wrapper-activities')}>
                        {activities &&
                            activities.map((activity) => (
                                <div key={activity.id} className={cx('render-activity-item')}>
                                    <div className={cx('activity-item')}>
                                        <div className={cx('user-avatar')}>
                                            <img
                                                src='https://ngoaingu24h.vn/resources/images/default/default_avatar.png'
                                                alt='img'
                                            />
                                        </div>
                                        <div className={cx('body')}>
                                            <div>
                                                <div className={cx('user-name')}>{activity.userName}</div>
                                                <div className={cx('title')}>{activity.content}</div>
                                            </div>
                                            <div className={cx('user-time')}>
                                                <span>{ConvertToTimestamp(activity.startDate)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveRecently
