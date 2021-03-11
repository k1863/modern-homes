export const searchPropertyItem = (properties, searchInput) => {
  const propertyItems = Object.values(properties);
  console.log(propertyItems);
  return propertyItems.filter((property) =>
    `${property}`.toLowerCase().includes(searchInput.toLowerCase())
  );
};
