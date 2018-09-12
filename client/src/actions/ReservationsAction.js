const changeBusiness = (newBusiness) => {
  const action = {
    type: 'NEW_BUSINESS',
    business: newBusiness,
  };
  return action;
};

export default changeBusiness;
