export const getAllContacts = store => store.contacts;

export const getFilter = store => store.filter;

export const getFilteredContacts = store => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(({ name }) => {
    const normalizedName = name.toLowerCase();

    return normalizedName.includes(normalizedFilter);
  });

  return filteredContacts;
};
