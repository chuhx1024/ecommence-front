import React, { FC } from 'react'
import Navigation from './Navigation'
import { PageHeader } from 'antd'

interface Props {
    children: React.ReactNode
    title: string,
    subTitle: string,
}

const Layout: FC<Props> = ({children, title, subTitle}) => {
  return (
    <div>
        <Navigation></Navigation>
        <PageHeader
            className="jumbotron"
            onBack={() => null}
            title={title}
            subTitle={subTitle}
        />
        {children}
    </div>
  )
}

export default Layout