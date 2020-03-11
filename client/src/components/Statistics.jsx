import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import api from '../api'
import resultData from '../data/results.js'
import questionsData from '../data/questions.js'

const Statistics = () => {
  const [statsState, setStatsState] = useState({
    totalResult: [, ,],
    dividedResult: [],
    loading: true,
  })

  const totalData = {
    labels: ['(A) - Budget Bobby', '(B) - Savvy Sam', '(C) - Laidback Lee'],
    datasets: [
      {
        data: statsState.totalResult,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  }

  useEffect(() => {
    api.getStatistics().then(result => {
      console.log(result, 'result')
      setStatsState({
        ...statsState,
        totalResult: result.totalResult,
        dividedResult: result.dividedResult,
        loading: false,
      })
    })
  }, [])

  return (
    <div>
      <p className="text-center display-3">Total Response</p>
      {statsState.loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <Doughnut data={totalData} />
      )}
    </div>
  )
}
export default Statistics
