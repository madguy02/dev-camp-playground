import React from 'react'
import Icons from '../../index.svg'
import style from './index.module.css'

export const CreateMessageForm = ({
  eventId,
  actions: { sendMessage, runCommand }
}) =>
  eventId ? (
    <form
      className={style.component}
      onSubmit={e => {
        e.preventDefault()

        const message = e.target[0].value.trim()

        if (message.length === 0) {
          return
        }

        e.target[0].value = ''

        message.startsWith('/')
          ? runCommand(message.slice(1))
          : sendMessage({
            text: message,
            eventId
          })
      }}
    >
      <input
        placeholder='Post a message to the event...'
      />
      <button type='submit'>
        <svg>
          <use xlinkHref={`${Icons}#send`} />
        </svg>
      </button>
    </form>
  ) : null
