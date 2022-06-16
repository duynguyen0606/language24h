import classNames from 'classnames/bind'
import styles from './QuizEnd.module.scss'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const cx = classNames.bind(styles)

function QuizEnd() {
    return <div className={cx('wrapper')}>Quiz end</div>
}

export default QuizEnd
