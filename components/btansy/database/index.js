const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productimagerepo', { useNewUrlParser: true, useUnifiedTopology: true });

var prodImgRepoSchema = new mongoose.Schema({
  id: Number,
  urls: [String],
});

let ProdImages = mongoose.model('imgurls', prodImgRepoSchema);

let fetch = (productid, callback) => {
  ProdImages.find({ id: productid }, null, null, function (err, docs) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  })
};

module.exports.fetch = fetch;