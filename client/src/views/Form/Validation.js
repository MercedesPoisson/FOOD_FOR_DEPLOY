const validation = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = "Please enter a recipe name.";
  }

  if (!input.summary) {
    errors.summary = "Please enter a summary.";
  }

  if (!input.image) {
    errors.image = "Please enter an image URL.";
  }

  if (!input.healthScore) {
    errors.healthScore = "Please enter a health score.";
  }

  if (input.analyzedInstructions.length === 0 || !input.analyzedInstructions[0].step) {
    errors.analyzedInstructions = "Please enter at least one step.";
  }

  if (input.typeDiets.length === 0) {
    errors.typeDiets = "Please select at least one diet type.";
  }

  return errors;
};

export default validation;