const UserModel = require('../database/models/UserModel')

class UserRepository {
  async add(user) {
    try {
      return await UserModel.create(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  async selectAll() {
    try {
      return await UserModel.findAll()
    } catch (error) {
      console.log(error.message)
    }
  }

  async selectByFilter(filter) {
    try {
      return await UserModel.findAll({
        where: filter
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  async update(user) {
    try {
      return await user.save()
    } catch (error) {
      console.log(error.message)
    }
  }

  async remove(id) {
    try {
      return await UserModel.destroy({
        where: {
          id
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = UserRepository