import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import api from '../api'
import Select from 'react-select'
import { Form, Button } from 'reactstrap'
/* import { resultData } from '../data/results.js' */
import { questionsData } from '../data/questions'
import { calculateTotalData, calculateDividedData } from '../helpers'

const Statistics = () => {
  const [statsState, setStatsState] = useState({
    statisticsData: [, ,],
    backupStatistics: [],
    selectedCountryOption: 'all',
    selectedQuestionOption: 'all',
    title: 'All countries',
    subTitle: 'All questions',
    loading: true,
  })

  const handleReset = () => {
    const massagedTotalStatistics = calculateTotalData(
      statsState.backupStatistics,
      'all'
    )
    setStatsState({
      ...statsState,
      statisticsData: massagedTotalStatistics,
      selectedCountryOption: 'all',
      selectedQuestionOption: 'all',
      title: 'All countries',
      subTitle: 'All questions',
    })
  }

  const handleCountryChange = selectedCountryOption => {
    const countryFilter = selectedCountryOption.value.toLowerCase()
    const massagedTotalStatisticsWithCountryFilter = calculateTotalData(
      statsState.backupStatistics,
      countryFilter
    )

    setStatsState({
      ...statsState,
      statisticsData: massagedTotalStatisticsWithCountryFilter,
      title: countryFilter,
      selectedCountryOption: selectedCountryOption,
    })
  }

  const handleQuestionChange = selectedQuestionOption => {
    const qIndex = selectedQuestionOption.value || 1
    const qTitle = selectedQuestionOption.label || 'All questions'
    const countryFilter = statsState.selectedCountryOption
      ? statsState.selectedCountryOption
      : 'all'
    console.log(qIndex, qTitle, countryFilter)
    const massagedDividedStatisticsWithCountryFilter = calculateDividedData(
      statsState.backupStatistics,
      countryFilter,
      qIndex
    )
    setStatsState({
      ...statsState,
      statisticsData: massagedDividedStatisticsWithCountryFilter,
      subTitle: qTitle,
      selectedQuestionOption: selectedQuestionOption,
    })
  }

  const totalData = {
    labels: ['(A) - Budget Bobby', '(B) - Savvy Sam', '(C) - Laidback Lee'],
    datasets: [
      {
        data: statsState.statisticsData,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  }

  useEffect(() => {
    console.log('effect')
    api.getStatistics().then(result => {
      console.log(result, 'result')
      const massagedCountries = countryDataMassager(result.countries)
      const massagedQuestions = questionDataMassager(questionsData)
      const massagedTotalStatistics = calculateTotalData(
        result.statistics,
        'all'
      )

      setStatsState({
        ...statsState,
        backupStatistics: result.statistics,
        statisticsData: massagedTotalStatistics,
        massagedCountries: massagedCountries,
        massagedQuestions: massagedQuestions,
        loading: false,
      })
    })
  }, [])

  const countryDataMassager = array => {
    const massagedCountries = [{ value: 'all', label: 'All countries' }]
    array.forEach(c => {
      massagedCountries.push({
        value: c,
        label: c,
      })
    })
    console.log(massagedCountries)
    return massagedCountries
  }

  const questionDataMassager = array => {
    const massagedQuestions = [{ value: 'all', label: 'All questions' }]
    array.forEach((q, i) => {
      let questionNumber = i + 1
      massagedQuestions.push({
        value: i,
        label: `(${questionNumber}) - ${q.question}`,
      })
    })

    return massagedQuestions
  }

  return (
    <div>
      <p className="text-center display-3">{statsState.title}</p>
      <p className="text-center ">{statsState.subTitle}</p>
      {statsState.loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="d-flex flex-column">
          <Doughnut height={75} data={totalData} />
          <Button
            className="btn-success mt-5"
            style={{ width: '20%', margin: '0 auto' }}
            onClick={() => handleReset()}
          >
            Reset
          </Button>
          <Form style={{ margin: '0 auto' }} className="w-25 mt-5">
            <span>Filter by question</span>
            <Select
              value={statsState.selectedQuestionOption}
              onChange={handleQuestionChange}
              options={statsState.loading ? '' : statsState.massagedQuestions}
            />
            <span>Filter by country</span>
            <Select
              value={statsState.selectedCountryOption}
              onChange={handleCountryChange}
              options={statsState.loading ? '' : statsState.massagedCountries}
            />
          </Form>
        </div>
      )}
    </div>
  )
}
export default Statistics
