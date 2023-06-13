import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  ip: String,
  datetime: Date,
  method: {
    type: String,
    enum: ['getIssues', 'getIssuesCount', 'getIssue'],
  },
});
const Log = mongoose.model('Log', logSchema);

export default Log;
