import {Schema, model, Types} from 'mongoose';

const TrackSchema = new Schema({
  name: {type: String},
  album: {type: String},
  cover: {
    type: String,
    validate: {
      validator: (req: any) => {
        return true;
      },
      message: 'ERROR_URL'
    }
  },
  artist: {
    name: {type: String},
    nickname: {type: String},
    nationality: {type: String}
  },
  duration: {
    start: {type: Number},
    end: {type: Number}
  },
  mediaId: {
    type: Schema.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});

const Track = model('Track', TrackSchema);

export default Track;