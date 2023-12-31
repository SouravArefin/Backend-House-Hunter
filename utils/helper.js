
const crypto = require("crypto")


exports.generateRandomByte = () => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(30, (err, buff) => {
            if (err) reject(err);
            const buffString = buff.toString('hex')

            //console.log(buffString,"buff")
            resolve(buffString)
        })
    })
}

exports.formatHouse = (actor) => {
    const { name, gender, about, _id, avatar } = actor;
    return {
      id: _id,
      name,
      about,
      gender,
      avatar: avatar?.url,
    };
};
  

exports.pick = (obj, keys) => {
    
    const outputObject = {}
    keys.forEach(key => {
        if (obj && Object.hasOwnProperty.call(obj, key)) {
          outputObject[key] = obj[key]
        }
      })
    
      return outputObject
}

exports.paginationHelper = (option) => {
   
        const page = Number(option.page) || 1
        const limit = Number(option.limit) || 12
        const skip = (page - 1) * limit
      
        const sortBy = option.sortBy || 'createdAt'
        const sortOrder = option.sortOrder || 'desc'
      
        return { page, limit, skip, sortBy, sortOrder }
      
}