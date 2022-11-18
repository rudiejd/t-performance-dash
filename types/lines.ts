import { TimeUnit } from "chart.js"
import React from "react"
import { AggregateDataPoint, BenchmarkField, MetricField, PointField, SingleDayDataPoint } from "../src/charts/types"

export interface LineProps {
    title: string,
    chartId: string,
    location: any,
    isLoading: any,
    pointField: PointField; // X value
    bothStops?: boolean,
    fname: any,
}

export interface AggregateLineProps extends LineProps {
    timeUnit: TimeUnit,
    data: AggregateDataPoint[]
    timeFormat: string,
    seriesName: string,
    startDate: any,
    endDate: any,
    fillColor: any,
    suggestedYMin?: number,
    suggestedYMax?: number,
    children?: React.ReactNode,
}

export interface SingleDayLineProps extends LineProps {
    data: SingleDayDataPoint[],
    metricField: MetricField, // Y value
    benchmarkField?: BenchmarkField,
}