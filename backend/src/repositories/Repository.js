class Repository {
  constructor (repository) {
    this.repository = repository
  }

  setRepository(repository) {
    this.repository = repository
  }

  async add(item) {
    return await this.repository.add(item)
  }

  async selectAll() {
    return await this.repository.selectAll()
  }

  async selectByFilter(filter) {
    return await this.repository.selectByFilter(filter)
  }

  async update(item) {
    return await this.repository.update(item)
  }

  async remove(id) {
    return await this.repository.remove(id)
  }
}

module.exports = Repository