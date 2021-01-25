import { Timestamp } from 'mongodb';
import mongoose, { Schema, Document } from 'mongoose';

type AIOutput = {
  sentence: string,
  biasDetectionResult: number,
  objectivityDetectionResult: number,
  sentimentDetectionResult: number
}
 

export interface IArticle extends Document {
  url: string,
  firstPublishDate: Date,
  lastPublishDate: Date,
  contributers: string [],
  headline: string,
  section: string,
  thumbnailUrl: string,
  body: string | AIOutput,
  category: string, // TODO make this an enum
  publisher: string
}

const ArticleSchema: Schema = new Schema({
  url: { type: String, required: true },
  firstPublishDate: { type: Date, required: true },
  lastPublishDate: { type: Date, required: true },
  contributers: { type: [String], required: false },
  headline: { type: String, required: true },
  section: { type: String, required: false },
  thumbnailUrl: { type: String, required: false },
  body: { type: Schema.Types.Mixed, required: true },
  category: { type: String, required: false },  // TODO make this an enum
  publisher: { type: String, required: false}
});

export default mongoose.model<IArticle>('Article', ArticleSchema);