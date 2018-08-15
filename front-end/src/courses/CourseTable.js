import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import pureData from './pureScrapeData'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
})

// Comments are big and index number 3
const scrapeData = Object.values(pureData).filter((item, index) => index !== 2)
const scrapeKeys = Object.keys(pureData[0]).filter((item, index) => index !== 2)

// Aparently we don't need to parse this as json as it is already a "valid" js object...

function SimpleTable (props) {
  const {classes} = props
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {
              scrapeKeys.map(key => <TableCell>{key}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {scrapeData.map((row, index) => (
            <TableRow key={index}>
              {scrapeKeys.map(key => <TableCell>{row[key]}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleTable)
