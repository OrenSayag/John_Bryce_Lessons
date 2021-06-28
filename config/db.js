const mongoose = require("mongoose")


const connectToMongoDB = async ()=>{
  try {
    await mongoose.connect('mongodb://localhost/prod',
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
     } )
     console.log("The goose is loose!")
  } catch (error) {
    
  }

}

module.exports = {
  connectToMongoDB
}
