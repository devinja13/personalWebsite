export type Project = {
  slug: string
  title: string
  eyebrow: string
  year: string
  category: 'Optimization' | 'Machine Learning' | 'Data Engineering' | 'Research'
  summary: string
  description: string
  challenge: string
  approach: string[]
  outcome: string
  tools: string[]
  metrics: { label: string; value: string }[]
  accent: 'coral' | 'moss' | 'blue' | 'gold'
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'last-mile-routing', title: 'Last-Mile Routing', eyebrow: 'Network optimization', year: '2024', category: 'Optimization', accent: 'coral', featured: true,
    summary: 'A vehicle-routing model that turns dense delivery data into shorter, more reliable routes.',
    description: 'Built an operations research workflow for a regional delivery network balancing mileage, time windows, and driver workload.',
    challenge: 'Dispatchers were planning routes manually while order volume and service constraints kept changing.',
    approach: ['Mapped operational constraints into a capacitated vehicle-routing formulation.', 'Generated feasible route candidates with OR-Tools and local search.', 'Built a scenario dashboard for comparing cost, mileage, and on-time delivery trade-offs.'],
    outcome: 'The model provided a clear planning baseline and revealed where a small fleet rebalance would have the largest impact.',
    tools: ['Python', 'OR-Tools', 'Pandas', 'Tableau'], metrics: [{ label: 'distance reduction', value: '14%' }, { label: 'stops modeled', value: '1,200+' }, { label: 'scenarios', value: '36' }],
  },
  {
    slug: 'demand-forecasting', title: 'Demand Forecasting', eyebrow: 'Time series analysis', year: '2024', category: 'Machine Learning', accent: 'moss', featured: true,
    summary: 'An interpretable forecasting pipeline for weekly inventory decisions.',
    description: 'Developed a forecasting comparison across classical and machine-learning models for a multi-category retail dataset.',
    challenge: 'Planners needed forecasts they could trust, not only a lower error score.',
    approach: ['Cleaned seasonality, promotion, and stock-out effects from transaction data.', 'Benchmarked seasonal naive, SARIMAX, and gradient-boosting models.', 'Designed a report that surfaces confidence intervals and the drivers behind each forecast.'],
    outcome: 'The selected model improved accuracy while preserving a useful planning narrative for nontechnical stakeholders.',
    tools: ['Python', 'Statsmodels', 'XGBoost', 'SQL'], metrics: [{ label: 'MAPE improvement', value: '18%' }, { label: 'series', value: '84' }, { label: 'forecast horizon', value: '12 wk' }],
  },
  {
    slug: 'transit-equity', title: 'Transit Equity Atlas', eyebrow: 'Spatial research', year: '2023', category: 'Research', accent: 'blue', featured: true,
    summary: 'A spatial analysis of how service frequency intersects with access to opportunity.',
    description: 'An exploratory research project that combines transit schedules, census indicators, and travel-time accessibility measures.',
    challenge: 'Simple service maps can hide large differences in what residents can actually reach.',
    approach: ['Joined GTFS service data with block-group demographics.', 'Calculated access scores for jobs, health care, and education.', 'Created a concise web atlas for comparing corridors and service scenarios.'],
    outcome: 'The analysis identified several high-need corridors where frequency improvements would have outsized accessibility benefits.',
    tools: ['Python', 'GeoPandas', 'QGIS', 'GTFS'], metrics: [{ label: 'block groups', value: '680' }, { label: 'destinations', value: '9,000+' }, { label: 'travel modes', value: '3' }],
  },
  {
    slug: 'energy-data-pipeline', title: 'Energy Data Pipeline', eyebrow: 'Analytics engineering', year: '2023', category: 'Data Engineering', accent: 'gold',
    summary: 'A durable data model for analyzing hourly building-energy performance.',
    description: 'Designed a lightweight analytics pipeline that makes raw sensor data useful for recurring operational analysis.',
    challenge: 'Energy data arrived in inconsistent formats and made repeatable comparison nearly impossible.',
    approach: ['Modeled source data into a clean star schema.', 'Added quality checks for missing readings and unusual usage patterns.', 'Published reusable views for monthly reporting and anomaly review.'],
    outcome: 'The team moved from spreadsheet cleanup to a repeatable analysis process with a shared source of truth.',
    tools: ['SQL', 'dbt', 'BigQuery', 'Metabase'], metrics: [{ label: 'readings processed', value: '4.2M' }, { label: 'data checks', value: '21' }, { label: 'refresh time', value: '8 min' }],
  },
  {
    slug: 'queue-simulation', title: 'Service Queue Simulation', eyebrow: 'Discrete-event simulation', year: '2023', category: 'Optimization', accent: 'blue',
    summary: 'A simulation study for making wait-time decisions under variable demand.',
    description: 'Modeled a high-variability service environment to test staffing and scheduling policies before implementation.',
    challenge: 'Average demand masked the peak periods that created the longest customer waits.',
    approach: ['Fit arrival and service distributions from historical observations.', 'Built a discrete-event simulation with alternative staffing rules.', 'Presented results as practical staffing thresholds rather than a black-box recommendation.'],
    outcome: 'The analysis gave decision-makers a low-risk way to choose a staffing policy around the most important peak windows.',
    tools: ['Python', 'SimPy', 'NumPy', 'Matplotlib'], metrics: [{ label: 'wait reduction', value: '22%' }, { label: 'runs', value: '500' }, { label: 'policies tested', value: '8' }],
  },
]
