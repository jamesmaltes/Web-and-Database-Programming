//for Project

class User {
    constructor(id, firstName, lastName, userAge, pswd) {
      this.userId = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.userAge = userAge;
    }
    //get methods
    getUserId() {
      return this.userId;
    }
    getFirstName() {
      return this.firstName;
    }
    getLastName() {
        return this.lastName;
      }
    getUserAge() {
        return this.userAge;
      }
      
    //set methods
    setUserId(id) {
      this.userId = id;
    }
    setFirstName(firstName) {
      this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
      }
    setUserAge() {
        this.userAge = userAge;
      }
}