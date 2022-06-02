import React, { FC, HTMLAttributes, ReactNode } from 'react'
import { css, cx } from '@emotion/css'

export interface EllipsisProps extends HTMLAttributes<HTMLDivElement> {
  lines?: number
  children?: ReactNode
}

export const Ellipsis: FC<EllipsisProps> = ({
  className,
  lines = 1,
  children,
  ...restProps
}) => {
  return (
    <div
      className={cx(
        css`
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: ${lines};
          word-break: break-all;
        `,
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}
