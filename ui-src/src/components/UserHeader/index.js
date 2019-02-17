import React from 'react'
import Icons from '../../index.svg'
import style from './index.module.css'

const placeholder =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

export const UserHeader = ({ sidebarOpen, user = {}, setSidebar }) => (
  <header className={style.component}>
    <button onClick={e => setSidebar(!sidebarOpen)}>
      <svg>
        <use xlinkHref={`${Icons}#menu`} />
      </svg>
    </button>
    <img src={user.avatarURL || placeholder} alt='' />
    <div>
      <h3>{user.name}</h3>
      <h5>{user.id && `@${user.id.substring(0, 15)}`}</h5>
    </div>
  </header>
)
