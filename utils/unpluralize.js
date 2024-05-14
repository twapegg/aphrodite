export default function unpluralize(word) {
  word = word.toLowerCase();

  const rules = [
    { pattern: /s$/i, replace: "" }, // Remove 's' at the end
    { pattern: /ies$/i, replace: "y" }, // Change 'ies' to 'y'
    { pattern: /es$/i, replace: "" }, // Remove 'es' at the end
    { pattern: /([^aeiou])ies$/i, replace: "$1y" }, // Change 'ies' preceded by a consonant to 'y'
    { pattern: /([^aeiou])es$/i, replace: "$1" }, // Remove 'es' preceded by a consonant
  ];

  for (const rule of rules) {
    if (rule.pattern.test(word)) {
      return word.replace(rule.pattern, rule.replace);
    }
  }

  return word; // Return original word if no rule applies
}
