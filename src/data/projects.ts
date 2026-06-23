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
    slug: 'urban-tree-planting-optimization', title: 'Urban Tree Planting Optimization', eyebrow: 'Geospatial MILP', year: '2025', category: 'Optimization', accent: 'moss', featured: true,
    summary: 'Allocated tree planting sites across Houston to reduce heat exposure under budget, feasibility, and capacity constraints.',
    description: 'Built a geospatial optimization framework for urban forestry planning that uses heat, canopy, and plantability data to decide where new trees can create the most cooling benefit.',
    challenge: 'Tree-planting decisions must balance limited budgets, feasible planting locations, site capacity, and unequal exposure to urban heat.',
    approach: ['Processed heat-index, canopy-cover, and plantable-land raster datasets into decision-ready spatial inputs.', 'Formulated a mixed-integer linear program with budget, site-activation, and per-site tree constraints.', 'Modeled diminishing cooling returns from canopy growth to prioritize high-impact allocations.'],
    outcome: 'The model provides a transparent way to compare urban forestry scenarios and identify investments with the greatest potential cooling impact.',
    tools: ['Python', 'Gurobi', 'rasterio', 'NumPy', 'Geospatial data', 'MILP'], metrics: [{ label: 'decision focus', value: 'Heat' }, { label: 'model type', value: 'MILP' }, { label: 'study area', value: 'Houston' }],
  },
  {
    slug: 'nfl-big-data-bowl', title: 'NFL Big Data Bowl: Receiver–Defender Simulation', eyebrow: 'Sports analytics', year: '2025', category: 'Machine Learning', accent: 'blue', featured: true,
    summary: 'Built a tracking-data simulation environment to study receiver and defender behavior during passing plays.',
    description: 'Developed a two-agent environment using NFL tracking data to analyze receiver–defender interactions, player movement, and catch opportunity in the passing game.',
    challenge: 'Football tracking data records complex interactions, but turning trajectories into a useful model of route and coverage decisions is difficult.',
    approach: ['Processed tracking data to identify receivers, defenders, ball landing location, and play context.', 'Built a simulation environment for receiver–defender movement and interaction.', 'Used catch probability as a performance signal while exploring reinforcement-learning approaches to route and coverage behavior.'],
    outcome: 'The project created a foundation for testing how movement choices and coverage positioning affect passing-play outcomes.',
    tools: ['Python', 'pandas', 'XGBoost', 'PettingZoo', 'Reinforcement learning', 'NFL tracking data'], metrics: [{ label: 'agents', value: '2' }, { label: 'signal', value: 'Catch probability' }, { label: 'domain', value: 'NFL passing' }],
  },
  {
    slug: 'two-elevator-dispatch', title: 'Two-Elevator Dispatch Optimization', eyebrow: 'Markov decision process', year: '2025', category: 'Optimization', accent: 'gold', featured: true,
    summary: 'Modeled a two-elevator system as an MDP to compare dispatch policies under stochastic passenger arrivals.',
    description: 'Created a decision model for dispatching two elevators across multiple floors with stochastic arrivals, destinations, queues, and capacity constraints.',
    challenge: 'Dispatch rules have to react to uncertain demand while managing elevator position, direction, occupancy, and waiting passengers.',
    approach: ['Formulated the system as a discrete-time Markov decision process.', 'Modeled passenger arrivals, floor queues, elevator locations, directions, and capacity.', 'Compared dynamic policies with simpler heuristic dispatch rules and examined state-space scaling challenges.'],
    outcome: 'The work connects OR theory to a familiar real-world routing problem and highlights trade-offs between responsiveness and computational tractability.',
    tools: ['Python', 'Markov decision processes', 'Simulation', 'Dynamic programming', 'Optimization'], metrics: [{ label: 'elevators', value: '2' }, { label: 'model', value: 'MDP' }, { label: 'objective', value: 'Wait time' }],
  },
  {
    slug: 'euchre-reinforcement-learning', title: 'Euchre Reinforcement Learning Agent', eyebrow: 'Sequential decision-making', year: '2025', category: 'Machine Learning', accent: 'coral', featured: true,
    summary: 'Trained Euchre agents to compare individual reward strategies with cooperative, team-oriented play.',
    description: 'Designed a reinforcement-learning environment for Euchre to study bidding, trump selection, dealer decisions, and trick-taking under hidden information.',
    challenge: 'Euchre is a team-based game with imperfect information, so reward design can dramatically change what agents learn to value.',
    approach: ['Modeled Euchre as a sequential decision-making problem with hidden information.', 'Compared independent and cooperative reward structures.', 'Built simulation, training, and evaluation loops focused on hand valuation, trump selection, and team outcomes.'],
    outcome: 'The project demonstrates how incentives shape strategy in multi-agent settings—not simply whether an agent can win a game.',
    tools: ['Python', 'Custom environment', 'PyTorch', 'Reinforcement learning', 'Simulation'], metrics: [{ label: 'setting', value: 'Team play' }, { label: 'information', value: 'Hidden' }, { label: 'focus', value: 'Rewards' }],
  },
]
