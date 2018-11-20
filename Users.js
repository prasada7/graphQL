/**
 * Class to represent a user
 */
class User {

    /**
     * Constructor for the User obj
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    /**
     * Function to change the name of a user
     * @param {String} name The new name of the user
     */
    changeName(name) {
        this.name = name;
    }
}

/**
 * Class to represent a User list
 */
class UserList {

    /**
     * Constructor for the user list object
     */
    constructor() {
        this.userList = [];
        this.total = 0;
    }

    /**
     * Function to add a user
     * @param {String} name Name of the user to add
     */
    addUser(name) {
        let newUser = new User(this.total+1, name);
        this.userList.push(newUser);
        this.total++;
        return newUser;
    }

    /**
     * Function to delete a user
     * @param {Integer} id Id of the user to delete
     */
    deleteUser(id) {
        // Loop through the user list
        for (var i = 0; i < this.userList.length; i++) {
            // If the id is found, delete the user and return it
            if (this.userList[i].id === id) {
                let userToDelete = this.userList[i];
                this.userList.splice(i, 1);
                return userToDelete;
            }
        }
    }
}

// Export the UserList class
module.exports = {
    UserList
}

