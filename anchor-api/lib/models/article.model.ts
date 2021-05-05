import { Timestamp } from 'mongodb';
import mongoose, { Schema, Document } from 'mongoose';
import AIOutput from './AIOutput';

// type AIOutput = {
//   sentence: string,
//   biasDetectionResult: number,
//   objectivityDetectionResult: number,
//   sentimentDetectionResult: number
// }

export interface IArticle extends Document {
  url: string;
  firstPublishDate: Date;
  lastPublishDate: Date;
  contributors: string[];
  headline: string;
  section: string;
  thumbnail: string;
  body: string | AIOutput[];
  category: string; // TODO make this an enum
  publisher: string;
  average_bias: number;
  average_sentiment: number;
  average_objectivity: number;
}

const ArticleSchema: Schema = new Schema({
  url: { type: String, required: true, unique: true },
  firstPublishDate: { type: Date, required: true },
  lastPublishDate: { type: Date, required: true },
  contributors: { type: [String], required: false },
  headline: { type: String, required: true },
  section: { type: String, required: false },
  thumbnail: { type: String, required: false },
  body: {
    type: Schema.Types.Mixed,
    validate: {
      validator: (v:[] | string) => {
        if(typeof v === 'string' || v instanceof String){
          if(v === undefined || v.length === 0 || v === '') return false;
        }
        else{
          if(v===undefined || v.length === 0 || !Array.isArray(v)) return false;
        }
      },
    message: props => `${props.value} Body cannot be empty`
  },
    required: true },
  category: { type: String, required: false }, // TODO make this an enum
  publisher: { type: String, required: false },
  average_bias: { type: Number, required: false},
  average_sentiment: { type: Number, required: false},
  average_objectivity: {type: Number, required: false},
});

ArticleSchema.index({ '$**': 'text' });

// exports a model named Article
export default mongoose.model<IArticle>('Article', ArticleSchema);
