import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
//import scrapeData from "./pureScrapeData"

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

let id = 0
const scrapeData = [{
  'assessmentScore': '+47',
  'code': 'EDAA01',
  'goalClearnessScore': '+24',
  'importanceScore': '+64',
  'percentPassed': '58%',
  'points': '7.5',
  'registered': '40',
  'satisfactionScore': '+29',
  'teachingScore': '+4',
  'workloadScore': '-7'
}]

function SimpleTable (props) {
  const {classes} = props
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {
              Object.keys(scrapeData[0]).map(key => <TableCell>{key}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {[scrapeData[0]].map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.assessmentScore}</TableCell>
              <TableCell>{row.code}</TableCell>
              <TableCell>{row.goalClearnessScore}</TableCell>
              <TableCell>{row.importanceScore}</TableCell>
              <TableCell>{row.percentPassed}</TableCell>
              <TableCell>{row.points}</TableCell>
              <TableCell>{row.registered}</TableCell>
              <TableCell>{row.satisfactionScore}</TableCell>
              <TableCell>{row.teachingScore}</TableCell>
              <TableCell>{row.workloadScore}</TableCell>
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
