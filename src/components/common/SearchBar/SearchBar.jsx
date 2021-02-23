import React, { Component } from 'react'

import "./SearchBar.css"


export default class SearchBar extends Component {
  render() {

    const { isSearchOpened, handleSearchBtn, searchInputValue, handleInput } = this.props
    return (
      <div className="search">
        <span
          onClick={() => handleSearchBtn()
          }
          className={
            isSearchOpened ? "search-icon open" : "search-icon"
          }
        >
          <i className="fas fa-search"></i>
        </span>
        <div className="search-bar">
          <input
            onChange={handleInput}
            placeholder="I want to find..."
            className={isSearchOpened ? "input open" : "input"}
            value={searchInputValue}
          ></input>

          <span
            className={
              isSearchOpened ? "exit-btn" : "exit-btn open"
            }
            onClick={() => handleSearchBtn()
            }
          >
            <i className="fas fa-times"></i>
          </span>
        </div>
      </div>
    )
  }
}
