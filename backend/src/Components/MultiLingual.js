import React from 'react'
import './i18n'
import { useTranslation } from 'react-i18next'

const MultiLingual = () => {
    const { t, i18n } = useTranslation();
  return (
    <div className='multi-lingual'>
      <select className='language-select' >
        <option value="en">English</option>
        <option value="te">Telugu</option>
        <option value="ta">Tamil</option>
        <option value="ur">Urdu</option>
      </select>
    </div>
  )
}

export default MultiLingual
