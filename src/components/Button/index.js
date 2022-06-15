import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    children,
    to,
    href,
    primary,
    outline,
    text,
    small,
    large,
    extraLarge,
    fontSize,
    fontWeight,
    textAlignLeft,
    upperCase,
    onClick,
    marginLeft,
    actived,
    textColor,
    borderColor,
    backgroundColor,
    paddingCustome,
    link,
    minWidth,
    stylesCustom,
    ...passProps
}) {
    let Comp = 'button'

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        small,
        large,
        extraLarge,
        textAlignLeft,
        upperCase,
        actived,
        link
    })

    const props = {
        onClick,
        ...passProps,
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    return (
        <Comp
            className={classes}
            {...props}
            style={{
                marginLeft: `${marginLeft}px`,
                backgroundColor: `${backgroundColor}`,
                borderColor: `${borderColor}`,
                padding: `${paddingCustome}`,
                minWidth: `${minWidth}`
            }}
        >
            <span
                style={{ fontSize: `${fontSize}rem`, fontWeight: `${fontWeight}`, color: `${textColor}`, ...stylesCustom }}
                className={cx('title')}
            >
                {children}
            </span>
        </Comp>
    )
}

export default Button
