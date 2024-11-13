const summary = {
    fullName: undefined,
    balance: undefined,
    friendsMap: undefined,
    filteredTags: undefined,
    formattedAddress: undefined,
    coordinates: undefined,
  };
  
  function getFullName() {
    return `${this.name.first} ${this.name.last}`;
  }
  
  function getBalance() {
    return parseFloat(this.balance.replace(/[$,]/g, ''));
  }
  
  function getFriendsMap() {
    return new Map(this.friends.map(friend => [friend.id, friend]));
  }
  
  function getFilteredTags() {
    return this.tags.filter(tag => tag === "anim");
  }
  
  function getFormattedAddress() {
    const [, city, stateZip] = this.address.split(", ");
    return `${city}, ${stateZip}`;
  }
  
  function getCoordinates() {
    return {
      latitude: parseFloat(this.latitude),
      longitude: parseFloat(this.longitude),
    };
  }
  
  
  const boundGetFullName = getFullName.bind(person);
  const boundGetBalance = getBalance.bind(person);
  const boundGetFriendsMap = getFriendsMap.bind(person);
  const boundGetFilteredTags = getFilteredTags.bind(person);
  const boundGetFormattedAddress = getFormattedAddress.bind(person);
  const boundGetCoordinates = getCoordinates.bind(person);
  

  summary.fullName = boundGetFullName();
  summary.balance = boundGetBalance();
  summary.friendsMap = boundGetFriendsMap();
  summary.filteredTags = boundGetFilteredTags();
  summary.formattedAddress = boundGetFormattedAddress();
  summary.coordinates = boundGetCoordinates();
  
  console.log(summary);
  