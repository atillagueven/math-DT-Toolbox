export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log('Request body:', body);

    const { answers } = body;
    if (!answers) {
      throw new Error('Answers are missing from the request body');
    }

    const scores = evaluateScores(answers); // Logic to calculate scores per pillar
    console.log('Scores:', scores);

    const recommendations = recommendTools(scores); // Map weak pillars to tools
    console.log('Recommendations:', recommendations);

    return { scores, recommendations };
  } catch (error) {
    console.error('Error in /api/evaluate:', error.message);
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' });
  }
});


function evaluateScores(answers) {
  const pillars = {
    'Technology and Infrastructure': [1, 2, 3, 4, 5, 6],
    'Process Automation and Optimization': [7, 8],
    'Cybersecurity and Governance': [9, 10, 11, 12, 13],
    'Data and Analytics': [14, 15, 16],
    'Digital Skills and Training': [17, 18, 19],
    'Business Model Innovation': [20, 21, 22, 23],
    'Customer Experience': [24, 25],
    'Digital Leadership and Culture': [26, 27, 28, 29],
  };

  const scores = Object.entries(pillars).map(([pillar, questionIds]) => {
    const total = questionIds.reduce((sum, id) => sum + (answers[id] || 0), 0);
    const avg = total / questionIds.length;
    return { pillar, score: avg };
  });

  return {
    labels: scores.map((s) => s.pillar),
    values: scores.map((s) => s.score),
  };
}

function recommendTools(scores) {
  const sortedScores = scores.values
    .map((score, index) => ({ pillar: scores.labels[index], score }))
    .sort((a, b) => a.score - b.score);

  return sortedScores.slice(0, 2).map((weakPillar) => ({
    id: weakPillar.pillar,
    name: `Recommended Tool for ${weakPillar.pillar}`,
    description: `Improve your ${weakPillar.pillar} with this tool.`,
  }));
}
