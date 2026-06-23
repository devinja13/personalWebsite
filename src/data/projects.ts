export type Project = {
  slug: string
  title: string
  eyebrow: string
  year: string
  summary: string
  challenge: string
  approach: string[]
  outcome: string
  tools: string[]
  accent: 'coral' | 'moss' | 'blue' | 'gold'
  visualLabel: string
}

export const projects: Project[] = [
  { slug: 'urban-tree-planting-optimization', title: 'Houston Tree Planting Optimization', eyebrow: 'Geospatial MILP', year: '2025', accent: 'moss', visualLabel: 'HEAT → CANOPY', summary: 'Allocated tree planting sites across Houston to reduce heat exposure under budget, feasibility, and capacity constraints.', challenge: 'Urban forestry decisions must balance limited budgets, feasible planting locations, site capacity, and unequal exposure to urban heat.', approach: ['Processed heat-index, canopy-cover, and plantable-land raster datasets into decision-ready spatial inputs.', 'Formulated a mixed-integer linear program with budget, site-activation, and per-site tree constraints.', 'Modeled diminishing cooling returns from canopy growth to prioritize high-impact allocations.'], outcome: 'Created a transparent planning framework for comparing urban forestry scenarios and identifying investments with the greatest potential cooling impact.', tools: ['Python', 'Gurobi', 'rasterio', 'NumPy', 'Geospatial data', 'MILP'] },
  { slug: 'nfl-big-data-bowl', title: 'NFL Big Data Bowl', eyebrow: 'Receiver–defender simulation', year: '2025', accent: 'blue', visualLabel: 'ROUTE / COVER', summary: 'Built a tracking-data simulation environment to study receiver and defender behavior during passing plays.', challenge: 'Football tracking data captures complex interactions, but turning trajectories into useful models of route and coverage decisions is difficult.', approach: ['Processed tracking data to identify receivers, defenders, ball landing locations, and play context.', 'Built a two-agent simulation environment for receiver–defender movement and interaction.', 'Used catch probability as a performance signal while exploring reinforcement-learning approaches.'], outcome: 'Established a foundation for testing how movement choices and coverage positioning affect passing-play outcomes.', tools: ['Python', 'pandas', 'XGBoost', 'PettingZoo', 'Reinforcement learning', 'NFL tracking data'] },
  { slug: 'two-elevator-dispatch', title: 'Elevator Dispatch Optimization', eyebrow: 'Markov decision process', year: '2025', accent: 'gold', visualLabel: 'QUEUE → MOVE', summary: 'Modeled a two-elevator system as an MDP to compare dispatch policies under stochastic passenger arrivals.', challenge: 'Dispatch rules must react to uncertain demand while managing elevator position, direction, occupancy, and waiting passengers.', approach: ['Formulated the system as a discrete-time Markov decision process.', 'Modeled passenger arrivals, floor queues, elevator locations, directions, and capacity.', 'Compared dynamic policies with simpler heuristic dispatch rules and examined state-space scaling challenges.'], outcome: 'Connected OR theory to a familiar routing problem while clarifying the trade-off between responsive policies and computational tractability.', tools: ['Python', 'Markov decision processes', 'Simulation', 'Dynamic programming', 'Optimization'] },
  { slug: 'euchre-reinforcement-learning', title: 'Euchre Reinforcement Learning', eyebrow: 'Sequential decision-making', year: '2025', accent: 'coral', visualLabel: 'REWARD → PLAY', summary: 'Trained Euchre agents to compare individual reward strategies with cooperative, team-oriented play.', challenge: 'Euchre is a team game with hidden information, so reward design can dramatically change what agents learn to value.', approach: ['Modeled Euchre as a sequential decision-making problem with imperfect information.', 'Compared independent and cooperative reward structures.', 'Built simulation, training, and evaluation loops for hand valuation, trump selection, and team outcomes.'], outcome: 'Demonstrated how incentive design shapes strategy in multi-agent settings—not merely whether an agent can win a game.', tools: ['Python', 'Custom environment', 'PyTorch', 'Reinforcement learning', 'Simulation'] },
]

export const additionalProjects = [
  { title: 'Data Engineering Foundations', description: 'Practical work with lakehouse patterns, ETL concepts, Parquet, Hive, S3, Airflow, and AWS EMR.', tags: ['PySpark', 'SQL', 'AWS'] },
  { title: 'Geospatial Analysis', description: 'Spatial data preparation and exploratory analysis for projects where place, access, and impact matter.', tags: ['rasterio', 'NumPy', 'GIS'] },
  { title: 'Modeling Experiments', description: 'Smaller simulations and decision models used to test assumptions before committing to a full build.', tags: ['Python', 'Simulation', 'OR'] },
]

export const skillGroups = [
  { title: 'Optimization / Operations Research', skills: ['Gurobi', 'Linear programming', 'MILP', 'Dynamic programming', 'MDPs', 'Simulation'] },
  { title: 'Data Science / Machine Learning', skills: ['Python', 'pandas', 'NumPy', 'XGBoost', 'PyTorch', 'Reinforcement learning'] },
  { title: 'Data Engineering', skills: ['PySpark', 'SQL', 'Parquet', 'Hive', 'S3', 'Airflow', 'AWS EMR'] },
  { title: 'Programming / Tools', skills: ['Python', 'TypeScript', 'Git', 'GitHub', 'Jupyter', 'Linux'] },
  { title: 'Web Development', skills: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'GitHub Pages'] },
]
