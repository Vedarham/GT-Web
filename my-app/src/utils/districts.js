// This is a simplified version. In a real app, you'd want a complete list of districts
const districtsByState = {
    'Maharashtra': [
      'Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik',
      'Aurangabad', 'Solapur', 'Kolhapur', 'Amravati'
    ],
    'Delhi': [
      'Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi',
      'North East Delhi', 'North West Delhi', 'South Delhi',
      'South East Delhi', 'South West Delhi', 'West Delhi'
    ],
    // Add more states and their districts
  };
  
  export function getDistricts(state) {
    return districtsByState[state] || [];
  }