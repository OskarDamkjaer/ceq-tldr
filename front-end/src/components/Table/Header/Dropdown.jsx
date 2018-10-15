import React from 'react'
import 'bootstrap3/dist/css/bootstrap.css'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { filterList } from '../../../data'

function getFilterList(filterBy) {
  const drpDwnList = []
  filterList.map((title, index) => (
    drpDwnList.push({ title, active: filterBy === title, id: index })
  ))
  return drpDwnList
}
const Dropdown = ({ activeFilter, activateFilter }) => (
  <DropdownButton
    bsStyle="primary"
    bsSize="large"
    title="FILTER"
    id="dd"
  >
    { getFilterList(activeFilter).map(drpDwnItem => (
      <MenuItem
        key={drpDwnItem.id}
        eventKey={drpDwnItem.id}
        onSelect={() => activateFilter(drpDwnItem.title)}
        active={drpDwnItem.active}
      >
        {drpDwnItem.title}
      </MenuItem>
    )) }
  </DropdownButton>
)

export default Dropdown
