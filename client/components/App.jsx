import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getSubSeries } from '../apis/covidDataApi'
import { receiveSubSeries } from '../actions/index'

import Filter from './Filter'
import Graph from './Graph'
import Analytics from './Analytics'

function App(props) {

  useEffect(() => {
    getSubSeries()
      .then(res => {
        props.dispatch(receiveSubSeries(res))
      })
  }, [])

  return (
    <div className='app'>
      <nav className="navbar">
        <div className="container">
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                New Zealand Covid-19 Data
              </a>
              <a className="navbar-item">
                Documentation
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <Filter />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div>
            <div>
            <Analytics />
            </div>
            <div>
            <Graph />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default connect()(App)
