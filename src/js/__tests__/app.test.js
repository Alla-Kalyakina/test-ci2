import checkHealth from '../app';

test.each([
  ['маг', 100, 'healthy'],
  ['мечник', 30, 'wounded'],
  ['лучник', 10, 'critical'],
])
('testing %s with health %i', (name, healthValue, expended) => {
  const result = checkHealth({ name: name, health: healthValue });
  expect(result).toBe(expended);
});