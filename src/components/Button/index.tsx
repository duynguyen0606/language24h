import { Link, LinkProps } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import React, { ForwardRefExoticComponent, RefAttributes } from 'react'

const cx = classNames.bind(styles)

interface Props {
    className?: string
    children: React.ReactNode
    to?: string
    href?: string
    primary?: boolean
    outline?: boolean
    text?: boolean
    small?: boolean
    large?: boolean
    extraLarge?: boolean
    fontSize?: string | number
    fontWeight?: number | string
    textAlignLeft?: boolean
    upperCase?: boolean
    onClick?: () => void
    marginLeft?: number
    actived?: boolean
    textColor?: string
    borderColor?: string
    backgroundColor?: string
    paddingCustome?: string
    link?: React.ReactNode
    minWidth?: string
    stylesCustom?: {
        stylesCuston?: React.ReactNode
    }
    passProps?: {
        passProps?: React.ReactNode
    }
}

const Button: React.FC<Props> = ({
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
}) => {
    let Comp: any = 'button'

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
        to,
        href
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
                style={{
                    fontSize: `${fontSize}rem`,
                    fontWeight: `${fontWeight}`,
                    color: `${textColor}`,
                    ...stylesCustom
                }}
                className={cx('title')}
            >
                {children}
            </span>
        </Comp>
    )
}

export default Button
