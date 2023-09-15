function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else if (a === 0) {
    throw new Error("Zero Error");
  } else {
    throw new Error("Negative Error");
  }
}

try {
  isPositive(7);
  isPositive(0);
  isPositive(-7);
} catch (error) {
  console.error(error.message);
}
