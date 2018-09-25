import React from 'react'
import { AxisBottom, AxisLeft } from '@vx/axis'
import { scaleLinear } from '@vx/scale'
import { curveNatural } from '@vx/curve'
import { LinePath } from '@vx/shape'
import { min, max } from 'd3-array'

const data = [{
  assessmentScore: '+50',
  code: 'EDAF60',
  comments: 'Studier\u00e5dets kommentarerEn kurs som har varit v\u00e4ldigt uppskattad \u00e4ven om den varit kr\u00e4vande. Att \u00e4ndra p\u00e5 projekten vore uppskattat d\u00e5 det blev lite f\u00f6r lite tid till andra projektet.Kursl\u00e4rarens kommentererKommentarer har ej inkommet f\u00f6re utsatt tidProgramledarens kommentarerN\u00e4rvarande p\u00e5 CEQ-m\u00f6tet var representanter fr\u00e5n SRD, KL och PL. Kursen anses som bra och viktig f\u00f6r utbildningen. Det var en del diskussion kring styrningen av projektet, bland annat hur gruppindelningen g\u00f6rs.CEQ-enk\u00e4ten fylldes iWebbenk\u00e4ter har anv\u00e4nts p\u00e5 denna kurs.',
  goalClearnessScore: '+45',
  importanceScore: '+98',
  name: 'Objektorienterad modellering och design',
  percentPassed: '88%',
  points: '4.5',
  registered: '76',
  satisfactionScore: '+81',
  teachingScore: '+72',
  workloadScore: '+45',
  year: '2016',
}, {
  assessmentScore: '+21',
  code: 'EDAA60',
  comments: 'KommentarerStudier\u00e5dets kommentarerKursens inneh\u00e5ll \u00e4r relevant f\u00f6r studenterna. F\u00f6rel\u00e4sningarna var det dock lite splittring kring och det var en del studenter som upplevde att f\u00f6rel\u00e4sningarna var "utt\u00e4njda".Kursl\u00e4rarens kommentererKommentarer har ej inkommet f\u00f6re utsatt tidProgramledarens kommentarerKommentarer har ej inkommet f\u00f6re utsatt tidCEQ-enk\u00e4ten fylldes iWebbenk\u00e4ter har anv\u00e4nts p\u00e5 denna kurs.',
  goalClearnessScore: '+48',
  importanceScore: '+56',
  name: 'Datorer och datoranv\u00e4ndning',
  percentPassed: '96%',
  points: '3.0',
  registered: '110',
  satisfactionScore: '+47',
  teachingScore: '+14',
  workloadScore: '+52',
  year: '2017',
},
  {
    assessmentScore: '+50',
    code: 'EDAF60',
    comments: 'Studier\u00e5dets kommentarerEn kurs som har varit v\u00e4ldigt uppskattad \u00e4ven om den varit kr\u00e4vande. Att \u00e4ndra p\u00e5 projekten vore uppskattat d\u00e5 det blev lite f\u00f6r lite tid till andra projektet.Kursl\u00e4rarens kommentererKommentarer har ej inkommet f\u00f6re utsatt tidProgramledarens kommentarerN\u00e4rvarande p\u00e5 CEQ-m\u00f6tet var representanter fr\u00e5n SRD, KL och PL. Kursen anses som bra och viktig f\u00f6r utbildningen. Det var en del diskussion kring styrningen av projektet, bland annat hur gruppindelningen g\u00f6rs.CEQ-enk\u00e4ten fylldes iWebbenk\u00e4ter har anv\u00e4nts p\u00e5 denna kurs.',
    goalClearnessScore: '+45',
    importanceScore: '+44',
    name: 'Objektorienterad modellering och design',
    percentPassed: '88%',
    points: '4.5',
    registered: '76',
    satisfactionScore: '+81',
    teachingScore: '+72',
    workloadScore: '+45',
    year: '2018',
  }]

const x = data => data.year
const y = data => data.importanceScore
const height = 500
const width = 500

const xScale = scaleLinear({
  rangeRound: [0, width],
  domain: [5, 1],
})

const yScale = scaleLinear({
  rangeRound: [height, 0],
  domain: [0, 100]
})

const CourseGraph = () => (
  <svg width={width} height={height}>
    <AxisBottom
      scale={xScale}
      top={300}
      left={30}
      tickValues={[2016, 2017, 2018, 2019, 2020]}
    />
    <AxisLeft
      scale={yScale}
      left={30}
      top={100}
    />
    <LinePath
      data={data}
      xScale={xScale}
      yScale={yScale}
      x={x}
      y={y}
      curve={curveNatural}
      strokeLinecap="round"
    />
  </svg>
)

export default CourseGraph