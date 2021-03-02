'use strict';

// "class" is used in many modern programming languages
// and it provides us with structure and readability that old JS didn't

// this model is meant to be dynamic, meaning it can "get, create, update, delete" any type of resource
class ClothesModels {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  // READ -> will work for returning all items in our db or a specific item
  get(id) {
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  // CREATE
  create(obj) {
    let record = {
      id: ++this.id,
      record: obj
    }

    this.db.push(record);
    return record;
  }

  // UPDATE 
  // update(id, obj) {
  //   if(id) {
  //     return obj
  //   }
  // }
  update(id, obj) {
    for(let i = 0; i<this.db.length;i++)
    if(this.db[i].id === id) {
      this.db[i].record= obj
      return this.db[i]
    }
  }

  // DELETE 
  delete(id) {
    for(let i = 0; i<this.db.length;i++)
    if (this.db[i].id===id) {
      // return null;
      delete this.db[i]
    }
  }
}

module.exports = ClothesModels;