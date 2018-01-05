export const METRICS = [
  {
    category: 'Social',
    fmt: ',.1f',
    id: 'avg_family_size',
    name: 'Average family size',
  },
  {
    category: 'Social',
    fmt: '.1%',
    id: 'households_w_kids',
    name: 'Households with 1+ people under 18 years',
  },
  {
    category: 'Social',
    fmt: '.1%',
    id: 'households_w_elderly',
    name: 'Households with 1+ people 65 years and over',
  },
  {
    category: 'Social',
    fmt: '.1%',
    id: 'married',
    name: 'Currently married (15+ years old)',
  },
  {
    category: 'Social',
    fmt: '.1%',
    id: 'vets',
    name: 'Civilian veterans',
  },
  {
    category: 'Social',
    fmt: '.1%',
    id: 'high_school_plus',
    name: 'High school graduate or higher',
  },
  {
    category: 'Social',
    fmt: '.1%',
    id: 'bach_degree_plus',
    name: "Bachelor's degree or higher",
  },
  {
    category: 'Social',
    fmt: '.1%',
    id: 'native_born',
    name: 'Native born (US, PR, or abroad to US parents)',
  },
  {
    category: 'Social',
    fmt: '.1%',
    id: 'foreign_born',
    name: 'Foreign born',
  },
  {
    category: 'Social',
    fmt: '.1%',
    id: 'born_in_state_of_residence',
    name: 'Born in state of residence',
  },
  {
    category: 'Social',
    fmt: '.1%',
    id: 'language_english_only',
    name: 'Language spoken at home: English only',
  },
  {
    category: 'Social',
    fmt: '.1%',
    id: 'language_not_english',
    name: 'Language spoken at home: Non-English language',
  },
  // {
  //   category: 'Social',
  //   fmt: ',.1f',
  //   id: 'avg_household_size',
  //   name: 'Average household size',
  // },
  // {
  //   category: 'Social',
  //   fmt: '.1%',
  //   id: 'families_w_kids',
  //   name: 'Families with children under 18 years',
  // },
  {
    category: 'Ancestry',
    fmt: '.1%',
    id: 'ancestry_american',
    name: 'American',
  },
  {
    category: 'Ancestry',
    fmt: '.1%',
    id: 'ancestry_english',
    name: 'English',
  },
  {
    category: 'Ancestry',
    fmt: '.1%',
    id: 'ancestry_german',
    name: 'German',
  },
  {
    category: 'Ancestry',
    fmt: '.1%',
    id: 'ancestry_irish',
    name: 'Irish',
  },
  {
    category: 'Ancestry',
    fmt: '.1%',
    id: 'ancestry_italian',
    name: 'Italian',
  },
  {
    category: 'Ancestry',
    fmt: '.1%',
    id: 'ancestry_polish',
    name: 'Polish',
  },
  {
    category: 'Ancestry',
    fmt: '.1%',
    id: 'ancestry_other',
    name: 'Other or unknown origin',
  },
  {
    category: 'Housing',
    fmt: '.1%',
    id: 'last_yr_same_house',
    name: 'Residence last year: same house',
  },
  {
    category: 'Housing',
    fmt: '.1%',
    id: 'last_yr_diff_house_same_state',
    name: 'Residence last year: different house, same state',
  },
  {
    category: 'Housing',
    fmt: '.1%',
    id: 'last_yr_diff_house_diff_state',
    name: 'Residence last year: different house, different state',
  },
  {
    category: 'Housing',
    fmt: ',.1f',
    id: 'median_rooms',
    name: 'Median number of rooms',
  },
  {
    category: 'Housing',
    fmt: '.1%',
    id: 'owner_occupied',
    name: 'Owner-occupied',
  },
  {
    category: 'Housing',
    fmt: '.1%',
    id: 'renter_occupied',
    name: 'Renter-occupied',
  },
  {
    category: 'Housing',
    fmt: '$,.0f',
    id: 'median_house_value',
    name: 'Median value (owner-occupied)',
  },
  {
    category: 'Housing',
    fmt: '$,.0f',
    id: 'mortgage_monthly_costs',
    name: 'Median monthly costs (with mortgage)',
  },
  {
    category: 'Housing',
    fmt: '.1%',
    id: 'houses_million_plus',
    name: 'Percent of houses valued at $1M+',
  },
  // {
  //   category: 'Housing',
  //   fmt: '$,.0f',
  //   id: 'rent_monthly_costs',
  //   name: 'Median monthly costs (occupied units paying rent)',
  // },
  {
    category: 'Economics',
    fmt: ',.0f',
    id: 'travel_time_to_work',
    name: 'Mean travel time to work (minutes)',
  },
  {
    category: 'Economics',
    fmt: '.1%',
    id: 'commute_via_public_transport',
    name: 'Commute to work via public transportation',
  },
  {
    category: 'Economics',
    fmt: '.1%',
    id: 'work_at_home',
    name: 'Work from home',
  },
  {
    category: 'Economics',
    fmt: '$,.0f',
    id: 'median_household_income',
    name: 'Median household income',
  },
  {
    category: 'Economics',
    fmt: '$,.0f',
    id: 'mean_household_income',
    name: 'Mean household income',
  },
  {
    category: 'Economics',
    fmt: '$,.0f',
    id: 'per_capita_income',
    name: 'Per capita income',
  },
  {
    category: 'Economics',
    fmt: '.1%',
    id: 'health_coverage',
    name: 'People with health insurance coverage',
  },
  {
    category: 'Economics',
    fmt: '.1%',
    id: 'families_poverty',
    name: 'Families with income below poverty level',
  },
  {
    category: 'Economics',
    fmt: '.1%',
    id: 'unemployment_rate',
    name: 'Unemployment rate',
  },
  // {
  //   category: 'Economics',
  //   fmt: '$,.0f',
  //   id: 'median_family_income',
  //   name: 'Median family income',
  // },
  // {
  //   category: 'Economics',
  //   fmt: '$,.0f',
  //   id: 'mean_family_income',
  //   name: 'Mean family income',
  // },
  {
    category: 'Business',
    fmt: '.1%',
    id: 'industry_arts_rec_food',
    name: 'Arts, entertainment, recreation, and food services',
  },
  {
    category: 'Business',
    fmt: '.1%',
    id: 'industry_edu_healthcare_social',
    name: 'Educational services, and health care and social assistance',
  },
  {
    category: 'Business',
    fmt: '.1%',
    id: 'industry_manufacturing',
    name: 'Manufacturing',
  },
  {
    category: 'Business',
    fmt: '.1%',
    id: 'industry_prof_science_manage',
    name: 'Professional, scientific, management, and admin. services',
  },
  {
    category: 'Business',
    fmt: '.1%',
    id: 'industry_retail_trade',
    name: 'Retail trade',
  },
  {
    category: 'Business',
    fmt: '.1%',
    id: 'industry_other',
    name: 'Some other business',
  },
  {
    category: 'Demographics',
    fmt: ',.0f',
    id: 'median_age',
    name: 'Median age (years)',
  },
  {
    category: 'Demographics',
    fmt: '.1%',
    id: '_21_and_over',
    name: '21 years and over',
  },
  {
    category: 'Demographics',
    fmt: '.1%',
    id: '_65_and_over',
    name: '65 years and over',
  },
  { category: 'Demographics', fmt: '.1%', id: 'white', name: 'White' },
  {
    category: 'Demographics',
    fmt: '.1%',
    id: 'black',
    name: 'Black or African American',
  },
  { category: 'Demographics', fmt: '.1%', id: 'asian', name: 'Asian' },
  {
    category: 'Demographics',
    fmt: '.1%',
    id: 'american_indian',
    name: 'American Indian and Alaska Native',
  },
  {
    category: 'Demographics',
    fmt: '.1%',
    id: 'other_race',
    name: 'Some other race',
  },
  {
    category: 'Demographics',
    fmt: '.1%',
    id: 'hispanic_latino',
    name: 'Hispanic or Latino',
  },
]

export const CATEGORIES = [
  'Social',
  'Housing',
  'Economics',
  'Business',
  'Demographics',
  'Ancestry',
]

export const catOptions = ['All', ...CATEGORIES].map(cat => ({
  id: cat.toLowerCase(),
  display: cat,
}))

export const isCat = x => x && catOptions.find(c => c.id === x.toLowerCase())
