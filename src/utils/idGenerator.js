// Timestamp + random suffix — sortable by creation time, and collision-safe
// even if two records get created in the same millisecond.
export function generateId() {
  const randomSuffix = Math.random().toString(36).slice(2, 8);
  return `${Date.now()}-${randomSuffix}`;
}
