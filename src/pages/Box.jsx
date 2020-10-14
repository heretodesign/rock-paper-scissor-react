import React from 'react'
import PropTypes from 'prop-types'
import Button from '../components/reusable/Button';

const Box = props => {
  return (
    <>
      <div className="box">
        <header className="box__header">
          <h2 className="box__credits">
            <span className="box__credits--name">
              Developer: Abel Senwelo
            </span>
          </h2>
        </header>
        <div className="mode">
          <h1 className="box__mode">Select Game Mode</h1>
        </div>
        <div className="box__selectMode">
          <div className="box__linkBtns">
            <Link to="/laptop-vs-desktop-game-mode" className="box__btn">
              <Button
                className="box__redirectBtn box__redirectBtn--active"
                value="Laptop vs Desktop"
              />
            </Link>
          </div>
          <div className="box__linkBtns">
            <Link to="/player-vs-computer-game-mode" className="box__btn">
              <Button
                className="box__redirectBtn box__redirectBtn--active"
                value="Player vs Computer"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

Box.propTypes = {

}

export default Box
