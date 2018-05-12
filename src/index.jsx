import React from 'react'
import { render } from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/main.css'

import MainView from './components/MainView'

render(
  <MainView />,
  document.getElementById('root')
)
